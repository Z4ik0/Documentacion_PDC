---
sidebar_position: 5
---

# Mediator.

## Definición.
El patrón Mediator define un objeto que centraliza la comunicación entre un conjunto de objetos, evitando que estos se comuniquen directamente entre sí. En lugar de hacerlo, todos los objetos interactúan con el mediador, que gestiona y coordina las interacciones. Esto reduce el acoplamiento entre los objetos y mejora la mantenibilidad del sistema.

----------
## Proposito.

Mediator es un patrón de diseño de comportamiento que te permite reducir las dependencias caóticas entre objetos. El patrón restringe las comunicaciones directas entre los objetos, forzándolos a colaborar únicamente a través de un objeto mediador.

--------

## Características Principales
1. **Centralización:**
    * Todas las interacciones entre los objetos pasan por un mediador central.

2. **Desacoplamiento:**
    * Los objetos no necesitan conocer los detalles de otros objetos con los que interactúan.

3. **Coordinación Simplificada:**
    * El mediador se encarga de manejar la lógica de interacción entre los objetos.

4. **Mantenibilidad Mejorada:**
    * Cambios en un objeto o en las interacciones no afectan directamente a otros objetos.

------
## Ventajas y Desventajas.

| **Ventajas**                                   | **Desventajas**                                                                                     |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Reducción de dependencias**: Minimiza las dependencias entre objetos, haciendo que estén menos acoplados y sean más fáciles de modificar. | **Sobrecarga del mediador**: El mediador puede convertirse en un "Dios" que maneja demasiada lógica, lo que dificulta su mantenimiento. |
| **Facilita la escalabilidad**: Permite agregar nuevos objetos o cambiar los existentes sin afectar a otros objetos relacionados. | **Complejidad del mediador**: A medida que crece el número de objetos y la lógica de interacción, el mediador puede volverse complicado. |
| **Centralización de la lógica**: La lógica de interacción entre objetos se centraliza en el mediador, simplificando la colaboración. | **Pérdida de flexibilidad**: Toda la interacción entre objetos depende del mediador, lo que limita soluciones alternativas. |
| **Código más limpio**: Reduce la complejidad del código al evitar comunicaciones directas entre múltiples objetos. | **Punto único de fallo**: Si el mediador tiene un error o falla, toda la interacción entre objetos se ve afectada. |
| **Mejora la reutilización**: Los objetos individuales son más reutilizables porque no están acoplados a otros objetos específicos. | |

-------

## Implementación.

![estructura](https://refactoring.guru/images/patterns/diagrams/mediator/structure.png)

1. Los Componentes son varias clases que contienen cierta lógica de negocio. Cada componente tiene una referencia a una interfaz mediadora, declarada con su tipo. El componente no conoce la clase de la interfaz mediadora, por lo que puedes reutilizarlo en otros programas vinculándolo a una mediadora diferente.

2. La interfaz Mediadora declara métodos de comunicación con los componentes, que normalmente incluyen un único método de notificación. Los componentes pueden pasar cualquier contexto como argumentos de este método, incluyendo sus propios objetos, pero sólo de tal forma que no haya acoplamiento entre un componente receptor y la clase del emisor.

3. Los Mediadores Concretos encapsulan las relaciones entre varios componentes. Los mediadores concretos a menudo mantienen referencias a todos los componentes que gestionan y en ocasiones gestionan incluso su ciclo de vida.

**Pseudocódigo.**

En este ejemplo, el patrón Mediator te ayuda a eliminar dependencias mutuas entre varias clases UI: botones, casillas y etiquetas de texto.


![Pseudocodigo](https://refactoring.guru/images/patterns/diagrams/mediator/example.png)

Un elemento activado por un usuario, no se comunica directamente con otros elementos, aunque parezca que debería. En lugar de eso, el elemento solo necesita dar a conocer el evento al mediador, pasando la información contextual junto a la notificación.

En este ejemplo, el diálogo de autenticación actúa como mediador. Sabe cómo deben colaborar los elementos concretos y facilita su comunicación indirecta. Al recibir una notificación sobre un evento, el diálogo decide qué elemento debe encargarse del evento y redirige la llamada en consecuencia.

**Código de implementación.**

~~~
// La interfaz mediadora declara un método utilizado por los
// componentes para notificar al mediador sobre varios eventos.
// El mediador puede reaccionar a estos eventos y pasar la
// ejecución a otros componentes.
interface Mediator is
    method notify(sender: Component, event: string)


// La clase concreta mediadora. La red entrecruzada de
// conexiones entre componentes individuales se ha desenredado y
// se ha colocado dentro de la mediadora.
class AuthenticationDialog implements Mediator is
    private field title: string
    private field loginOrRegisterChkBx: Checkbox
    private field loginUsername, loginPassword: Textbox
    private field registrationUsername, registrationPassword,
                  registrationEmail: Textbox
    private field okBtn, cancelBtn: Button

    constructor AuthenticationDialog() is
        // Crea todos los objetos del componente y pasa el
        // mediador actual a sus constructores para establecer
        // vínculos.

    // Cuando sucede algo con un componente, notifica al
    // mediador, que al recibir la notificación, puede hacer
    // algo por su cuenta o pasar la solicitud a otro
    // componente.
    method notify(sender, event) is
        if (sender == loginOrRegisterChkBx and event == "check")
            if (loginOrRegisterChkBx.checked)
                title = "Log in"
                // 1. Muestra los componentes del formulario de
                // inicio de sesión.
                // 2. Esconde los componentes del formulario de
                // registro.
            else
                title = "Register"
                // 1. Muestra los componentes del formulario de
                // registro.
                // 2. Esconde los componentes del formulario de
                // inicio de sesión.

        if (sender == okBtn && event == "click")
            if (loginOrRegister.checked)
                // Intenta encontrar un usuario utilizando las
                // credenciales de inicio de sesión.
                if (!found)
                    // Muestra un mensaje de error sobre el
                    // campo de inicio de sesión.
            else
                // 1. Crea una cuenta de usuario utilizando
                // información de los campos de registro.
                // 2. Ingresa a ese usuario.
                // ...


// Los componentes se comunican con un mediador utilizando la
// interfaz mediadora. Gracias a ello, puedes utilizar los
// mismos componentes en otros contextos vinculándolos con
// diferentes objetos mediadores.
class Component is
    field dialog: Mediator

    constructor Component(dialog) is
        this.dialog = dialog

    method click() is
        dialog.notify(this, "click")

    method keypress() is
        dialog.notify(this, "keypress")

// Los componentes concretos no hablan entre sí. Sólo tienen un
// canal de comunicación, que es el envío de notificaciones al
// mediador.
class Button extends Component is
    // ...

class Textbox extends Component is
    // ...

class Checkbox extends Component is
    method check() is
        dialog.notify(this, "check")
    // ...
~~~

------
## Analogía.

Los pilotos de los aviones que llegan o salen del área de control del aeropuerto no se comunican directamente entre sí. En lugar de eso, hablan con un controlador de tráfico aéreo, que está sentado en una torre alta cerca de la pista de aterrizaje. Sin el controlador de tráfico aéreo, los pilotos tendrían que ser conscientes de todos los aviones en las proximidades del aeropuerto y discutir las prioridades de aterrizaje con un comité de decenas de otros pilotos. Probablemente, esto provocaría que las estadísticas de accidentes aéreos se dispararan.

![Mediator](https://refactoring.guru/images/patterns/diagrams/mediator/live-example.png) 

La torre no necesita controlar el vuelo completo. Sólo existe para imponer límites en el área de la terminal porque el número de actores implicados puede resultar difícil de gestionar para un piloto.
