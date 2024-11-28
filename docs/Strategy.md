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
