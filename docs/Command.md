# Command.

## Definición.
El patrón Command encapsula una solicitud como un objeto, permitiendo que se parametrice con diferentes solicitudes, se coloque en colas y se pueda deshacer. Este patrón desacopla al emisor de la solicitud de los objetos que realmente ejecutan las acciones.

## Proposito.
El propósito principal de este patrón es permitir que las solicitudes sean representadas como objetos, de forma que se pueda parametrizar las acciones a realizar, almacenarlas, ejecutar operaciones en momentos posteriores y realizar deshacer (undo).

### Los actores principales en este patrón son:

1. **Cliente/Invoker.**
    * Es la clase que inicia todo, en el ejemplo anterior de registrar un usuario, bien podría ser un controlador asociado a una ruta POST que toma los valores de un formulario para registrar a un nuevo usuario.
2. **Command.**
    * Es la clase que encapsula toda la información necesaria para ejecutar la acción. Son simples DTOs en la mayoría de casos, aunque pueden contener otros objetos dentro. Es muy importante, como veremos más adelante, que sean fácilmente serializables. En nuestro ejemplo, esto sería una clase que contenga los datos del usuario a registrar, por ejemplo email y password.
3. **CommandHandler/Handler.**
    * Es la clase que contiene la lógica a ejecutar, puede tener dependencias externas, como servicios de mensajería, conexiones a base de datos, servicios para escribir en logs… etc. Es importante que esta clase ejecute una y solo una acción, ya que en caso contrario resultaría muy confusa su nomenclatura.

Por convención, todos los handlers deberían de tener un método conocido para ejecutar los comandos, como: **handle, execute, do…** o en el caso de PHP usar el magic method **__invoke.**

El definir una interfaz común para todos los comandos se complica si queremos sacar partido del type hinting para asegurar que nuestro handler solo ejecute comandos del tipo adecuado. Una opción es que todos los comandos implementen una interfaz Command y que todos los manejadores implementen una interfaz CommandHandler, con un método execute(Command $command o handle(Command $command) y dentro del mismo ejecutar la comprobación de que es la clase adecuada.

----------
## Características principales:

1. Encapsulamiento de solicitudes:
    * Las acciones se encapsulan como objetos independientes.
2. Desacoplamiento: 
    * Los objetos que invocan los comandos no necesitan saber cómo se ejecutan las acciones.
3. Deshacer/rehacer: 
    * Se puede implementar la funcionalidad de deshacer y rehacer las operaciones de forma sencilla.


## Ventajas.

| **Ventaja**                          | **Descripción**                                                                                      |
|--------------------------------------|------------------------------------------------------------------------------------------------------|
| **Desacoplamiento**                  | El emisor de la solicitud no necesita conocer los detalles de los objetos que procesan la solicitud. |
| **Extensibilidad**                   | Es fácil agregar nuevos manejadores a la cadena sin modificar los existentes.                        |
| **Flexibilidad en el procesamiento** | Permite modificar dinámicamente el orden de los manejadores o la cadena de responsabilidad.          |
| **Reutilización**                    | Los manejadores individuales pueden ser reutilizados en diferentes cadenas o contextos.              |
