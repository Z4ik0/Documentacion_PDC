---
sidebar_position: 6
---

# Memento

---
## Definicion

_Es un patrón de diseño de comportamiento que permite almacenar el estado interno de un objeto en un contenedor independiente llamado memento, este contenedor encapsula los detalles del estado sin exponer la implementación interna del objeto original_

![Memento](https://refactoring.guru/images/patterns/content/memento/memento-es.png?id=425d7fafd404116e99e93c3d8a04ec89)

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

## Ventajas y Desventajas

| **Ventajas** | **Desventajas** |
|--------------|--------------|
| Preserva el encapsulamiento.    | Alto consumo de memoria     |
| Implementacion de deshacer y rehacer      | Sobrecarga en el rendimiento      |
| Separación de responsabilidades    |  Complejidad adicional  |
| Fácil de extender    | Manejo de estados complejos   |
| Reutilización de lógica    | No es adecuado para sistemas con estados dependientes   |
| No afecta la estructura del objeto    | Problemas de sincronización   |

---

## Ejemplo de Uso en Codigo

Aqui se implementa el Patrón Memento para guardar y restaurar el estado de un objeto, la clase Memento almacena de forma inmutable el estado del editor de texto, la clase TextEditor permite modificar el contenido (setContent), guardar el estado actual en un Memento con save y restaurarlo con restore, en el programa principal, el editor guarda el contenido inicial "Hola, mundo" lo modifica a "Texto modificado" y luego lo restaura al estado guardado, este patrón es útil para implementar funcionalidades como "deshacer" sin exponer los detalles internos del objeto.

``` java
class Memento {
    private final String state;
    Memento(String state) { this.state = state; }
    String getState() { return state; }
}

class TextEditor {
    private String content;
    void setContent(String content) { this.content = content; }
    String getContent() { return content; }
    Memento save() { return new Memento(content); }
    void restore(Memento m) { content = m.getState(); }
}

public class Main {
    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        Memento saved;

        editor.setContent("Hola, mundo.");
        System.out.println("Estado actual: " + editor.getContent());

        saved = editor.save();

        editor.setContent("Texto modificado.");
        System.out.println("Estado modificado: " + editor.getContent());

        editor.restore(saved); 
        System.out.println("Estado restaurado: " + editor.getContent());
    }
}
```
---

## Analogia

Un escritor trabaja en su libro y, de vez en cuando, hace fotocopias de lo que ha escrito hasta ese momento, estas fotocopias capturan exactamente el estado del libro en un punto específico, si en algún momento no le gusta cómo avanza la historia, puede regresar a una fotocopia anterior y continuar desde allí.

- Permite guardar el estado de un objeto en un momento dado y restaurarlo más adelante, sin que se revelen los detalles internos del objeto.
