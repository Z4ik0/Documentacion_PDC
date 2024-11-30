## Definición

El patrón Visitor es un patrón de diseño de comportamiento que permite separar un algoritmo de la estructura de objetos sobre la que opera. Agrega nuevas operaciones a una clase sin modificar su estructura, utilizando un objeto externo (el visitante) para realizar las operaciones.

![Patron VIsitor](https://refactoring.guru/images/patterns/diagrams/visitor/structure-es.png)

## Propósito

El propósito de Visitor es agregar nuevas funcionalidades a una jerarquía de clases sin alterar sus definiciones, manteniendo la estructura fija. Esto es especialmente útil cuando las operaciones sobre las clases cambian con más frecuencia que las clases mismas.

![ilustración representativa Visitor](https://refactoring.guru/images/patterns/content/visitor/visitor.png)