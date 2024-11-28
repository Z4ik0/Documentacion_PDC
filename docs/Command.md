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
