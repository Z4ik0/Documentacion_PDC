# Memento

---

_Es un patrón de comportamiento que permite capturar y guardar el estado interno de un objeto sin violar su encapsulamiento, para que posteriormente se pueda restaurar a ese estado, es útil para implementar operaciones de deshacer undo y rehacer redo en aplicaciones_

---

## Proposito

1. **_Permitir guardar y restaurar el estado de un objeto sin comprometer su encapsulamiento._**
   - Permitir guardar y restaurar el estado previo de un objeto sin revelar los detalles de su implementación.

---

## Caracteristicas

1. **_El Encapsulamiento del estado interno_**
   - El estado del objeto (Originator) se guarda dentro del Memento de manera encapsulada.
   - Los detalles del estado interno no son accesibles para otros objetos, como el Caretaker.
   - Garantiza la protección del encapsulamiento del objeto principal.

2. **_La Independencia entre objeto y almacenamiento_**
   - El objeto que desea guardar su estado (el Originator) no necesita gestionar directamente los estados históricos.
   - El almacenamiento y recuperación de los estados se delega al Caretaker, que administra los Mementos.

3. **_La Restauración de estados_**
   - Permite revertir un objeto a un estado previo mediante el uso del Memento.
   - Los estados almacenados pueden recuperarse de forma sencilla y confiable.

4. **_La Transparencia_**
   - El Memento es opaco para el Caretaker; este último no necesita saber qué contiene ni cómo funciona el Memento.
   - Solo el Originator sabe cómo guardar y restaurar su estado desde un Memento.
---

### Ventajas y Desventajas

| **Ventajas** | **Desventajas** |
|--------------|--------------|
| Preserva el encapsulamiento.    | Alto consumo de memoria     |
| Implementacion de deshacer y rehacer      | Sobrecarga en el rendimiento      |
| Separación de responsabilidades    |  Complejidad adicional  |
| Fácil de extender    | Manejo de estados complejos   |
| Reutilización de lógica    | No es adecuado para sistemas con estados dependientes   |

---

#### Ejemplo de Uso en Codigo

``
