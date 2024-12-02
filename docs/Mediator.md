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

## Ventajas.

| **Ventaja**                          | **Descripción**                                                                                      |
|--------------------------------------|------------------------------------------------------------------------------------------------------|
| **Reducción de dependencias**        | Minimiza las dependencias entre objetos, haciendo que estén menos acoplados y sean más fáciles de modificar. |
| **Facilita la escalabilidad**        | Permite agregar nuevos objetos o cambiar los existentes sin afectar a otros objetos relacionados.         |
| **Centralización de la lógica**      | La lógica de interacción entre objetos se centraliza en el mediador, simplificando la colaboración.       |
| **Código más limpio**                | Reduce la complejidad del código al evitar comunicaciones directas entre múltiples objetos.               |
| **Mejora la reutilización**          | Los objetos individuales son más reutilizables porque no están acoplados a otros objetos específicos.     |

## Desventajas.

| **Desventaja**                       | **Descripción**                                                                                              |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **Sobrecarga del mediador**          | El mediador puede convertirse en un "Dios" que maneja demasiada lógica, lo que dificulta su mantenimiento.  |
| **Complejidad del mediador**         | A medida que crece el número de objetos y la lógica de interacción, el mediador puede volverse complicado.  |
| **Pérdida de flexibilidad**          | Toda la interacción entre objetos depende del mediador, lo que limita soluciones alternativas.               |
| **Punto único de fallo**             | Si el mediador tiene un error o falla, toda la interacción entre objetos se ve afectada.                    |

-------

## Analogía.

Los pilotos de los aviones que llegan o salen del área de control del aeropuerto no se comunican directamente entre sí. En lugar de eso, hablan con un controlador de tráfico aéreo, que está sentado en una torre alta cerca de la pista de aterrizaje. Sin el controlador de tráfico aéreo, los pilotos tendrían que ser conscientes de todos los aviones en las proximidades del aeropuerto y discutir las prioridades de aterrizaje con un comité de decenas de otros pilotos. Probablemente, esto provocaría que las estadísticas de accidentes aéreos se dispararan.

![Mediator](https://refactoring.guru/images/patterns/diagrams/mediator/live-example.png) 

La torre no necesita controlar el vuelo completo. Sólo existe para imponer límites en el área de la terminal porque el número de actores implicados puede resultar difícil de gestionar para un piloto.

-----

