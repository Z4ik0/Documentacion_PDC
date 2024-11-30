## Definición
El patrón Estrategia (Strategy) es un patrón de diseño para el desarrollo de software. Se clasifica como patrón de comportamiento porque determina cómo se debe realizar el intercambio de mensajes entre diferentes objetos para resolver una tarea. El patrón estrategia permite mantener un conjunto de algoritmos de entre los cuales el objeto cliente puede elegir aquel que le conviene e intercambiarlo dinámicamente según sus necesidades.

## Proposito
**Strategy** es un patrón de diseño de comportamiento que te permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.

![Strategy_image](https://refactoring.guru/images/patterns/content/strategy/strategy.png?id=379bfba335380500375881a3da6507e0)

## Caracteristicas principales

* **Encapsulamiento de algoritmos:** 

Cada estrategia (algoritmo) se implementa en una clase separada que sigue una misma interfaz común.
Esto facilita agregar nuevas estrategias sin modificar el código existente.


* **Intercambiabilidad:**

Los algoritmos pueden intercambiarse dinámicamente en tiempo de ejecución.
Esto se logra al asignar un objeto de estrategia diferente al contexto que las utiliza.


* **Separación del comportamiento y el contexto:**

El contexto (la clase principal) delega la ejecución del comportamiento a una estrategia específica.
Esto reduce la complejidad del contexto y lo hace más fácil de mantener.


* **Uso de composición sobre herencia:**

En lugar de usar herencia para modificar o agregar comportamientos, Strategy usa la composición, delegando el comportamiento a un objeto de estrategia.


* **Cumple con el Principio Abierto-Cerrado:**

Las estrategias nuevas se pueden agregar extendiendo el sistema, sin necesidad de modificar el código del contexto.


* **Fomenta la cohesión:**

Cada estrategia tiene un propósito bien definido, lo que mejora la claridad y la modularidad del código.


## Ventajas y Desventajas

Ventajas | Desventajas
---------- | ------------
Permite agregar nuevas estrategias sin modificar el código cliente.| Puede aumentar la complejidad si se crean demasiadas estrategias.
Promueve el cumplimiento del principio SOLID, especialmente el abierto/cerrado.| Requiere que el cliente tenga conocimiento de las estrategias disponibles.
Facilita pruebas unitarias al permitir el uso de estrategias independientes.| Puede implicar una sobrecarga de memoria y procesamiento al manejar muchas instancias de estrategias.
Permite elegir la estrategia en tiempo de ejecución.|Si no se implementa correctamente, puede ser confuso para desarrolladores nuevos en el proyecto.

## Ejemplo de codigo en Python 
```python
from abc import ABC, abstractmethod

# Interfaz de estrategia
class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

# Estrategias concretas
class CreditCardPayment(PaymentStrategy):
    def pay(self, amount):
        return f"Paid {amount} using Credit Card."

class PayPalPayment(PaymentStrategy):
    def pay(self, amount):
        return f"Paid {amount} using PayPal."

class BitcoinPayment(PaymentStrategy):
    def pay(self, amount):
        return f"Paid {amount} using Bitcoin."

# Contexto que utiliza las estrategias
class ShoppingCart:
    def __init__(self, payment_strategy: PaymentStrategy):
        self.payment_strategy = payment_strategy

    def checkout(self, amount):
        return self.payment_strategy.pay(amount)

# Uso del patrón
cart1 = ShoppingCart(CreditCardPayment())
print(cart1.checkout(100))  # Output: Paid 100 using Credit Card.

cart2 = ShoppingCart(PayPalPayment())
print(cart2.checkout(250))  # Output: Paid 250 using PayPal.

cart3 = ShoppingCart(BitcoinPayment())
print(cart3.checkout(500))  # Output: Paid 500 using Bitcoin.

```

## Analogía
Imagina que tienes que llegar al aeropuerto. Puedes tomar el autobús, pedir un taxi o ir en bicicleta. Éstas son tus estrategias de transporte. Puedes elegir una de las estrategias, dependiendo de factores como el presupuesto o los límites de tiempo.

![imagen de analogía: Strategy](https://refactoring.guru/images/patterns/content/strategy/strategy-comic-1-es.png?id=1cf442d8c2d5d78f214499bb72dfdc72)