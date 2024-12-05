---
sidebar_position: 8
---

# State

---
### Definicion

_Es un patrón de diseño de comportamiento que permite a un objeto cambiar su comportamiento cuando su estado interno cambia, este patrón se utiliza para encapsular los estados específicos de un objeto en clases separadas._

![State](https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns-articles%2Fstate-sequence.png&w=3840&q=75)

---

### Proposito

1. **_Permitir a un objeto alterar su comportamiento_**
   - Cuando su estado interno cambie, parecera como si el objeto cambiara su clase.
   - Permite a un objeto alterar su comportamiento cuando su estado interno cambia.

---

### Caracteristicas

1. **_Encapsulación de estados_**
   - Cada estado se modela como una clase independiente, lo que facilita la organización y el mantenimiento del código.
   

2. **_Cambio dinámico_**
   - El objeto principal delega su comportamiento actual al objeto que representa su estado actual.

3. **_Elimina estructuras condicionales_**
   - Reemplaza bloques de código con múltiples condicionales (if, switch) que evalúan el estado con clases específicas que implementan el comportamiento correspondiente.

4. **_Separación de Responsabilidades_**
   - Cada clase de estado es responsable de un comportamiento específico, lo que hace que el diseño sea más limpio y siga el principio de responsabilidad única.
---

### Ventajas y Desventajas

| **Ventajas** | **Desventajas** |
|--------------|--------------|
| Elimina condicionales complejos   | Aumenta el número de clases   |
| Cumple con el principio abierto/cerrado       | Mayor complejidad inicial  |
| Cambio dinámico de comportamiento    | Puede ser innecesario para sistemas simples |
| Facilidad para gestionar transiciones complejas    | Sobrecarga de memoria   |
| Promueve el principio de responsabilidad única    | Curva de aprendizaje   |

---

## Ejemplo de Uso en Codigo

Se utiliza el Patrón State para simular un semáforo, define una clase abstracta State que sirve como interfaz para los estados RedState, YellowState, GreenState, cada estado implementa un método handle que realiza una acción como imprimir un mensaje y cambia el estado al siguiente.

La clase TrafficLight representa el semáforo, mantiene el estado actual y delega el comportamiento al estado correspondiente. Al iniciar en RedState, un bucle cambia los estados cíclicamente rojo a amarillo a verde a rojo, este enfoque organiza el código y elimina los condicionales complejos y facilita el agregar nuevos estados.



```python
from abc import ABC, abstractmethod

class State(ABC):
    @abstractmethod
    def handle(self, context):
        pass

class RedState(State):
    def handle(self, context):
        print("Semáforo en ROJO. Detente.")
        context.set_state(YellowState())

class YellowState(State):
    def handle(self, context):
        print("Semáforo en AMARILLO. Prepárate.")
        context.set_state(GreenState())

class GreenState(State):
    def handle(self, context):
        print("Semáforo en VERDE. Avanza.")
        context.set_state(RedState())

class TrafficLight:
    def __init__(self, initial_state):
        self._state = initial_state

    def set_state(self, state):
        self._state = state

    def request(self):
        self._state.handle(self)

if __name__ == "__main__":
    initial_state = RedState()
    traffic_light = TrafficLight(initial_state)

    for _ in range(6):  
        traffic_light.request()
```
---

## Analogia

En un videojuego, un personaje puede cambiar entre diferentes modos, normal, invisible y enojado, en el modo normal, camina en el modo invisible, atraviesa enemigos sin ser visto y en el modo enojado, ataca con más fuerza.

 - El jugador solo selecciona el modo, y el personaje ajusta automáticamente su comportamiento según el estado en el que se encuentra.
 - El comportamiento de un objeto cambia dinámicamente en función de su estado actual.




