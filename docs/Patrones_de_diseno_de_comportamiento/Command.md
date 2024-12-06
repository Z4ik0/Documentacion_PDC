---
sidebar_position: 3
---

# Command.

## Definición.
El patrón Command encapsula una solicitud como un objeto, permitiendo que se parametrice con diferentes solicitudes, se coloque en colas y se pueda deshacer. Este patrón desacopla al emisor de la solicitud de los objetos que realmente ejecutan las acciones, dentro de este patron estan los siguientes actores:

1. **Cliente/Invoker.**
    * Es la clase que inicia todo, en el ejemplo anterior de registrar un usuario, bien podría ser un controlador asociado a una ruta POST que toma los valores de un formulario para registrar a un nuevo usuario.
2. **Command.**
    * Es la clase que encapsula toda la información necesaria para ejecutar la acción. Son simples DTOs en la mayoría de casos, aunque pueden contener otros objetos dentro. Es muy importante, como veremos más adelante, que sean fácilmente serializables. En nuestro ejemplo, esto sería una clase que contenga los datos del usuario a registrar, por ejemplo email y password.
3. **CommandHandler/Handler.**
    * Es la clase que contiene la lógica a ejecutar, puede tener dependencias externas, como servicios de mensajería, conexiones a base de datos, servicios para escribir en logs… etc. Es importante que esta clase ejecute una y solo una acción, ya que en caso contrario resultaría muy confusa su nomenclatura.

![](https://refactoring.guru/images/patterns/diagrams/command/structure.png)


-----
## Propósito.
El propósito principal de este patrón es permitir que las solicitudes sean representadas como objetos, de forma que se pueda parametrizar las acciones a realizar, almacenarlas, ejecutar operaciones en momentos posteriores y realizar deshacer (undo).

![](https://refactoring.guru/images/patterns/content/command/command-es.png)

--------

## Características principales:

1. Encapsulamiento de solicitudes:
    * Las acciones se encapsulan como objetos independientes.
2. Desacoplamiento: 
    * Los objetos que invocan los comandos no necesitan saber cómo se ejecutan las acciones.
3. Deshacer/rehacer: 
    * Se puede implementar la funcionalidad de deshacer y rehacer las operaciones de forma sencilla.


![Command](https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns%2Fcommand2.png&w=3840&q=75)

-----
## Ventajas y Desventajas.

| **Ventajas**                                   | **Desventajas**                                                                                     |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Desacoplamiento**: El emisor no necesita conocer los detalles de los objetos que procesan la solicitud. | **Dificultad para depurar**: Es complicado rastrear qué manejador procesó una solicitud en cadenas largas o complejas. |
| **Extensibilidad**: Es fácil agregar nuevos manejadores a la cadena sin modificar los existentes.  | **Posible bajo rendimiento**: Si la cadena es muy extensa, se generan múltiples llamadas innecesarias antes de procesar la solicitud. |
| **Flexibilidad en el procesamiento**: Permite modificar dinámicamente el orden de los manejadores o la cadena de responsabilidad. | **Orden estricto**: El orden de los manejadores afecta el comportamiento, lo que puede causar errores si no se define correctamente. |
| **Reutilización**: Los manejadores pueden ser reutilizados en diferentes cadenas o contextos. | **Falta de garantía de manejo**: No hay certeza de que la solicitud será procesada si ningún manejador es capaz de hacerlo. |

-----------
## Ejemplo.

**Código**

~~~php
<?php

namespace Api\Command\User;

final class RegisterUserCommand
{
    private $email;
    private $password;
    
    public function __construct(string $email, string $password)
    {
        $this->email = $email;
        $this->password = $password;
    }
    
    public function email(): string
    {
        return $this->email;   
    }
    
    
    public function password(): string
    {
        return $this->password;   
    }
}
~~~
~~~php
<?php

namespace Api\CommandHandler\User;

use Api\Command\User\RegisterUserCommand;
use Api\Domain\Repository\UserRepository;
use Api\Entity\User;

final class RegisterUserHandler
{
    const MINIMUM_LENGHT = 12;
    
    private $repository;
    
    public function __construct (UserRepository $repository)
    {
        $this->repository = $repository;   
    }
    
    public function __invoke(RegisterUserCommand $command)
    {
        $email = $command->email();
        $password = $command->password();
        
        $this->checkEmail();
        $this->checkPassword();
        
        $user = new User($email, $password);
        $this->repository->save($user);
    }
    
    private function checkEmail($email)
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new \Exception('Invalid email');
        }
        
        if ($this->repository->userExists($email)) {
            throw new \Exception('User already exist');
        }
    }
    
    private function checkPassword($password)
    {
        if (self::MINIMUM_LENGHT > strlen($password)) {
            throw new \Exception('Password too short');
        }
    }
}
~~~
~~~ php
<?php

namespace Api\Controller\User;

use Api\Command\User\RegisterUserCommand;
use Api\CommandHandler\User\RegisterUserHandler;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class UserController
{
    public function registerUser(Request $request): Response
    {
        $email = $request->request->get('email');
        $password = $request->request->get('password');
        
        $command = new RegisterUserCommand($email, $password);
        
        $userRepository = $this->get('repository.user');
        $handler = new RegisterUserHandler($userRepository);
        
        try {
            $handler($command);
        } catch (\Exception $e) {
            return new Response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
        
        return new Response('', Response::HTTP_CREATED);
    }
}
~~~
------
## Analogía:
Tras un largo paseo por la ciudad, entras en un buen restaurante y te sientas a una mesa junto a la ventana. Un amable camarero se acerca y toma tu pedido rápidamente, apuntándolo en un papel. El camarero se va a la cocina y pega el pedido a la pared. Al cabo de un rato, el pedido llega al chef, que lo lee y prepara la comida. El cocinero coloca la comida en una bandeja junto al pedido. El camarero descubre la bandeja, comprueba el pedido para asegurarse de que todo está como lo querías, y lo lleva todo a tu mesa.

![](https://refactoring.guru/images/patterns/content/command/command-comic-1.png)

El pedido en papel hace la función de un comando. Permanece en una cola hasta que el chef está listo para servirlo. Este pedido contiene toda la información relevante necesaria para preparar la comida. Permite al chef empezar a cocinar de inmediato, en lugar de tener que correr de un lado a otro aclarando los detalles del pedido directamente contigo.