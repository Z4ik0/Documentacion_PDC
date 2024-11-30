---
sidebar_position: 11
---



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

## Ventajas y Desventajas

Ventajas | Desventajas
---------|------------
Facilita la adición de nuevas operaciones sin modificar las clases base.| Introduce un alto acoplamiento entre el visitante y las clases.
Separa la lógica de operaciones de la estructura de objetos.| Puede ser difícil de mantener si se agrega una nueva clase en la jerarquía de objetos.
Promueve la organización del código al mover algoritmos fuera de las clases.| Si las clases cambian frecuentemente, se requiere actualizar todos los visitantes.
Permite manejar diferentes tipos de objetos de manera uniforme.| No es ideal si la jerarquía de clases cambia más frecuentemente que las operaciones.

## Ejemplo de código en Python
```python
from abc import ABC, abstractmethod

# Elemento base que acepta un visitante
class Shape(ABC):
    @abstractmethod
    def accept(self, visitor):
        pass

# Subclases concretas
class Circle(Shape):
    def accept(self, visitor):
        visitor.visit_circle(self)

class Square(Shape):
    def accept(self, visitor):
        visitor.visit_square(self)

# Visitante base
class Visitor(ABC):
    @abstractmethod
    def visit_circle(self, circle):
        pass

    @abstractmethod
    def visit_square(self, square):
        pass

# Visitante concreto
class AreaCalculator(Visitor):
    def visit_circle(self, circle):
        print("Calculating area of the circle.")
    
    def visit_square(self, square):
        print("Calculating area of the square.")

# Uso del patrón
shapes = [Circle(), Square()]
visitor = AreaCalculator()

for shape in shapes:
    shape.accept(visitor)
```

## Analogía 

Imagina un experimentado agente de seguros que está deseoso de conseguir nuevos clientes. Puede visitar todos los edificios de un barrio, intentando vender seguros a todo aquel que se va encontrando. Dependiendo del tipo de organización que ocupe el edificio, puede ofrecer pólizas de seguro especializadas:

* Si es un edificio residencial, vende seguros médicos.
* Si es un banco, vende seguros contra robos.
* Si es una cafetería, vende seguros contra incendios e inundaciones.

![Ilustración de Analogía Visitor](https://refactoring.guru/images/patterns/content/visitor/visitor-comic-1.png)