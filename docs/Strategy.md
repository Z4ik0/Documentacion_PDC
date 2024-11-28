## Definición
El patrón Estrategia (Strategy) es un patrón de diseño para el desarrollo de software. Se clasifica como patrón de comportamiento porque determina cómo se debe realizar el intercambio de mensajes entre diferentes objetos para resolver una tarea. El patrón estrategia permite mantener un conjunto de algoritmos de entre los cuales el objeto cliente puede elegir aquel que le conviene e intercambiarlo dinámicamente según sus necesidades.

## Proposito
**Strategy** es un patrón de diseño de comportamiento que te permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.

![Strategy_image](https://refactoring.guru/images/patterns/content/strategy/strategy.png?id=379bfba335380500375881a3da6507e0)

## Caracteristicas principales

### Encapsulamiento de algoritmos: 

Cada estrategia (algoritmo) se implementa en una clase separada que sigue una misma interfaz común.
Esto facilita agregar nuevas estrategias sin modificar el código existente.


### Intercambiabilidad:

Los algoritmos pueden intercambiarse dinámicamente en tiempo de ejecución.
Esto se logra al asignar un objeto de estrategia diferente al contexto que las utiliza.


### Separación del comportamiento y el contexto:

El contexto (la clase principal) delega la ejecución del comportamiento a una estrategia específica.
Esto reduce la complejidad del contexto y lo hace más fácil de mantener.


### Uso de composición sobre herencia:

En lugar de usar herencia para modificar o agregar comportamientos, Strategy usa la composición, delegando el comportamiento a un objeto de estrategia.


### Cumple con el Principio Abierto-Cerrado:

Las estrategias nuevas se pueden agregar extendiendo el sistema, sin necesidad de modificar el código del contexto.


### Fomenta la cohesión:

Cada estrategia tiene un propósito bien definido, lo que mejora la claridad y la modularidad del código.


## Ventajas

1. Flexibilidad para cambiar algoritmos en tiempo de ejecución:

   Al encapsular los algoritmos en clases independientes, puedes cambiar la estrategia usada por el contexto sin    necesidad de modificar su código. Esto permite que el sistema se adapte a nuevas condiciones de manera dinámica.
   Ejemplo: En una aplicación de pagos, puedes alternar entre pago con tarjeta de crédito o PayPal según la preferencia del usuario.

2. Cumple con el principio de responsabilidad única (SRP):

   El contexto no necesita preocuparse por los detalles de implementación de las estrategias; cada estrategia maneja su propia lógica.
   Esto reduce el acoplamiento y mantiene las responsabilidades bien definidas.


3. Cumple con el principio abierto-cerrado (OCP):

   Puedes agregar nuevas estrategias sin modificar el código existente, simplemente creando una nueva clase que implemente la interfaz de estrategia.


4. Reutilización de código:

    Las estrategias pueden ser reutilizadas en diferentes contextos o sistemas que necesiten comportamientos similares.

5. Reducción de código duplicado:

    En lugar de tener múltiples condicionales (como if-else o switch) para determinar qué algoritmo ejecutar, cada estrategia encapsula su propio comportamiento, eliminando lógica repetida.

6. Facilita la prueba y el mantenimiento:

    Cada estrategia se puede probar de manera aislada, lo que mejora la calidad del código y facilita el diagnóstico de problemas.

7. Escalabilidad:

    A medida que surjan nuevos algoritmos o comportamientos, puedes agregarlos fácilmente sin necesidad de tocar las estrategias existentes o el contexto.