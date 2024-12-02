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
