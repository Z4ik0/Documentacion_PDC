## Definición

El patrón Visitor es un patrón de diseño de comportamiento que permite separar un algoritmo de la estructura de objetos sobre la que opera. Agrega nuevas operaciones a una clase sin modificar su estructura, utilizando un objeto externo (el visitante) para realizar las operaciones.

![Patron VIsitor](https://refactoring.guru/images/patterns/diagrams/visitor/structure-es.png)

## Propósito

El propósito de Visitor es agregar nuevas funcionalidades a una jerarquía de clases sin alterar sus definiciones, manteniendo la estructura fija. Esto es especialmente útil cuando las operaciones sobre las clases cambian con más frecuencia que las clases mismas.

![ilustración representativa Visitor](https://refactoring.guru/images/patterns/content/visitor/visitor.png)

## Características principales

* **Separación de responsabilidades:**
   
    El patrón divide la lógica de operación (algoritmos) de la estructura de objetos. Esto permite modificar o agregar nuevos comportamientos sin alterar las clases base o concretas.

* **Doble despacho**
   
    El patrón Visitor se basa en el doble despacho, lo que significa que:

    1.- El objeto a visitar acepta al visitante.
    
    2.- El visitante ejecuta la operación correspondiente según el tipo de objeto.
    
    Esto permite que la operación se ajuste al tipo de ambos: el objeto visitado y el visitante.

* **Extensibilidad**
    
    Puedes agregar nuevas operaciones creando nuevos visitantes, sin necesidad de modificar la jerarquía de clases. Esto hace que el patrón sea altamente extensible para agregar funcionalidades.

* **Acoplamiento**
    
    El patrón introduce un alto acoplamiento entre el visitante y la jerarquía de clases, ya que el visitante debe conocer los detalles de cada clase para operar correctamente