# Observer

---

_Es un patrón de comportamiento que establece una relación de dependencias entre objetos, de modo que cuando el estado de un objeto (el sujeto o subject) cambia, todos sus objetos dependientes_

---

## Proposito

1. **_Proporcionar una manera eficiente y flexible._**
   - Nos ayudara a gestionar la notificación de cambios en el estado de un objeto a sus objetos dependientes sin necesidad de que estos estén estrechamente acoplados entre sí.

---

## Caracteristicas

1. **_Desacoplamiento entre Sujeto y Observadores_**
   - El sujeto y los observadores están desacoplados. El sujeto no conoce los detalles de los observadores, solo les notifica cuando su estado cambia. Los observadores, a su vez, no necesitan saber nada sobre el sujeto, solo reaccionan al cambio.

2. **_Notificación automática_**
   - Cuando el estado del sujeto cambia, el patrón garantiza que todos los observadores registrados sean notificados automáticamente sin necesidad de intervención directa. La actualización es automática y en tiempo real.

3. **_Multiplicidad de Observadores_**
   - Un único sujeto puede tener múltiples observadores registrados. Esto permite que varios objetos reaccionen a los mismos cambios de estado de manera independiente.

4. **_Independencia de los Observadores_**
   - Los observadores no necesitan conocer a otros observadores ni compartir datos entre sí. Cada observador actúa de manera independiente en función de la notificación que recibe.
---

### Ventajas y Desventajas

| **Ventajas** | **Desventajas** |
|--------------|--------------|
| Desacoplamiento entre Sujeto y Observadores   | Dependencia del número de Observadores     |
| Fácil expansión      | Complejidad en la gestión de notificaciones      |
| Actualización automática    |  Riesgo de notificaciones desincronizadas  |
| Mejor mantenimiento y refactorización   | Gestión de eliminación de observadores   |
| Desempeño flexible    | Uso excesivo de memoria   |

---

#### Ejemplo de Uso en Codigo

``
