## Definición

El patrón Template Method es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en una clase base, delegando la implementación de ciertos pasos a subclases. Esto permite que las subclases personalicen partes del algoritmo sin cambiar su estructura general.

![Patron Template Method](https://refactoring.guru/images/patterns/diagrams/template-method/structure.png)

## Propósito

El propósito de Template Method es reutilizar el código común y definir los pasos esenciales de un algoritmo en una clase base, dejando que las subclases implementen los detalles específicos. Esto asegura consistencia en el flujo del algoritmo mientras permite flexibilidad en los detalles.

![Patron Template Method](https://refactoring.guru/images/patterns/content/template-method/template-method.png)

## Características principales

* **Definición de un esqueleto fijo:**

    El patrón establece una estructura inmutable para el algoritmo en la clase base. Esto asegura que todas las subclases sigan un flujo lógico uniforme. La clase base proporciona un método principal (el método plantilla) que ejecuta los pasos del algoritmo en un orden predefinido.

* **Métodos abstractos o sobrescribibles:**

    El patrón utiliza una combinación de:

    * Métodos abstractos: Son definidos en la clase base, pero su implementación está delegada a las subclases. Esto permite que las subclases personalicen esos pasos específicos del algoritmo.

    * Métodos concretos (opcional): Pueden estar completamente implementados en la clase base y ser reutilizados por las subclases, evitando duplicación de código.

* **Inmutabilidad del flujo:**

    El flujo del algoritmo en el método plantilla no puede ser modificado por las subclases. Esto garantiza que la estructura general permanezca consistente, incluso si los detalles varían. Esto asegura que el comportamiento principal no se vea afectado por errores o malas prácticas en las subclases.

* **Promueve reutilización de código:**

    El patrón ayuda a centralizar la lógica común en la clase base, eliminando redundancias entre subclases. Esto reduce la duplicación de código y facilita el mantenimiento, ya que los cambios en la lógica general se realizan únicamente en la clase base.

* **Flexibilidad en los detalles:**

    Aunque la estructura es fija, el patrón permite personalización en los pasos individuales mediante las subclases. Esto lo hace ideal para situaciones donde se desea uniformidad en el flujo general, pero los detalles de cada paso pueden variar según el caso.

* **Uso de métodos opcionales (hooks):**

    El patrón puede incluir hooks o métodos opcionales en la clase base. Los hooks son métodos vacíos o con una implementación predeterminada que las subclases pueden sobrescribir para agregar comportamiento adicional, pero no están obligadas a hacerlo.

## Ventajas y Desventajas 

Venajas | Desventajas
-------- | -----------
Permite reutilizar el código común en la clase base.| Puede volverse rígido si el algoritmo necesita cambios frecuentes en su estructura general.
Facilita la extensión del comportamiento mediante subclases.| Obliga a que las subclases dependan de la clase base, creando acoplamiento.
Simplifica el mantenimiento al centralizar el flujo del algoritmo.| Puede ser difícil de entender si hay demasiadas subclases con diferentes implementaciones.
Garantiza un flujo uniforme para todas las subclases.| El abuso del patrón puede llevar a jerarquías de clases innecesariamente complejas.

## Ejemplo de código en Python
```python
from abc import ABC, abstractmethod

# Clase base que define el método plantilla
class Game(ABC):
    def play(self):
        self.initialize()
        self.start_play()
        self.end_play()

    @abstractmethod
    def initialize(self):
        pass

    @abstractmethod
    def start_play(self):
        pass

    @abstractmethod
    def end_play(self):
        pass

# Subclase concreta 1
class Football(Game):
    def initialize(self):
        print("Football Game Initialized. Ready to start.")
    
    def start_play(self):
        print("Football Game Started. Enjoy the game!")
    
    def end_play(self):
        print("Football Game Finished.")

# Subclase concreta 2
class Chess(Game):
    def initialize(self):
        print("Chess Game Initialized. Get your mind ready.")
    
    def start_play(self):
        print("Chess Game Started. Good luck!")
    
    def end_play(self):
        print("Chess Game Finished.")

# Uso del patrón
game1 = Football()
game1.play()

print("\n")

game2 = Chess()
game2.play()
```

