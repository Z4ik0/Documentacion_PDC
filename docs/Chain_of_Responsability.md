---
sidebar_position: 2
---

# chain of responsability.

## Definición

Chain of Responsibility es un patrón de diseño de comportamiento que te permite pasar solicitudes a lo largo de una cadena de manejadores. Al recibir una solicitud, cada manejador decide si la procesa o si la pasa al siguiente manejador de la cadena.

El patrón de diseño cadena de responsabilidad es un patrón de comportamiento que evita acoplar el emisor de una petición a su receptor dando a más de un objeto la posibilidad de responder a una petición. Para ello, se encadenan los receptores y pasa la petición a través de la cadena hasta que es procesada por algún objeto. Este patrón es utilizado a menudo en el contexto de las interfaces gráficas de usuario donde un objeto puede estar compuesto de varios objetos (que generalmente heredan de una super clase "vista"). No se debe confundir con el patrón Composite (patrón de diseño) que se basa en un concepto similar.

![chain](https://refactoring.guru/images/patterns/content/chain-of-responsibility/chain-of-responsibility.png)


Básicamente, este patrón ayuda a encapsular acciones secuenciales sobre un objeto. Por ejemplo, en un sistema de pedidos donde hay que realizar una secuencia de pasos para una determinada acción. Un caso que se me ocurre es el de realizar un proceso de scoring sobre un pedido que puede partirse en distintos pasos.

![Chain of Responsability](https://refactoring.guru/images/patterns/diagrams/chain-of-responsibility/solution1-es.png?id=122092268f688aa2015b2f20dabafb89)

------------------- 
## Propósito
Permitir que una solicitud pase a través de una cadena de objetos receptores hasta que uno de ellos la maneje. Este patrón desacopla al emisor de la solicitud del receptor, promoviendo una estructura flexible y extensible para manejar diferentes tipos de solicitudes.

-----------------
## Caracteristicas principales.
1. Cadena de manejadores:
    * Cada objeto de la cadena conoce al siguiente en la secuencia, pero no al anterior.

2. Desacoplamiento:
    * Los objetos emisores de solicitudes no necesitan conocer los detalles de los receptores.

3. Flexibilidad:
    * Se pueden añadir nuevos manejadores a la cadena sin afectar a los demás.

![chain](https://refactoring.guru/images/patterns/diagrams/chain-of-responsibility/structure.png)

------------------------

## Ventajas y Desventajas.

| **Ventajas**                                   | **Desventajas**                                                                                     |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Desacoplamiento**: Los objetos no necesitan conocer los detalles de otros. | **Sobrecarga del mediador**: Puede convertirse en un "objeto Dios", dificultando su mantenimiento.  |
| **Extensibilidad**: Es fácil agregar nuevos objetos al sistema.              | **Complejidad creciente**: La lógica del mediador se complica con más objetos y reglas de interacción. |
| **Reutilización**: Los objetos individuales son más reutilizables.           | **Dependencia del mediador**: Toda interacción depende del mediador, lo que puede ser un punto de fallo. |
| **Flexibilidad**: Centraliza la lógica de interacción, simplificándola.      | **Menor flexibilidad directa**: Los objetos no pueden interactuar directamente aunque sea más eficiente. |
| **Responsabilidad centralizada**: Facilita la coordinación entre objetos.    | **Riesgo de sobrecarga**: Si el mediador maneja demasiada lógica, puede complicar el sistema.         |


-------
## Ejemplo de implementación:
El primer paso siempre es identificar al handler, implementando una clase abstracta con los métodos que requiera para el caso de uso. En mi caso aplicar el filtro y un método que identifique si ese handler debe ser ejecutado en función de los filtros activos por el usuario. A continuación la clase abstracta AbstractFilterHandler implementada:

**Código de implementación:**
~~~ 
class AbstractFilterHandler {
  constructor() {}
applyFilter() {
    this._WARNING("applyFilter(elements, filters)");
  }
canIHandle() {
    this._WARNING("canIHandle(elements, filters)");
  }
_WARNING(fName = "unknown method") {
    console.warn('WARNING! Function "' + fName + '" is not overridden in ' + this.constructor.name);
  }
}
export default AbstractFilterHandler;
~~~

Una vez tenemos la clase abstracta debemos de implantar cada manejador específico. Para este artículo vamos a mostrar el ejemplo del manejador que filtra aquellos elementos que incluyen ciertos modelos:

~~~
import AbstractFilterHandler from "./filter";
class ModelsFilterHandler extends AbstractFilterHandler {
  applyFilter(elements, filters) {
    return elements.filter(a => filters.models.includes(a.model.slug));
  }
canIHandle(filters) {
    return filters.models && filters.models.length > 0;
  }
}
export default ModelsFilterHandler;
~~~
Como vemos en la implementación, en el método canIHandle() indicamos que el handler solo se invocará cuando en los filtros contengan modelos. Por otro lado el método applyFilter() implementa la acción realizada sobre los elementos.

El siguiente paso es el de construir la cadena que se encarga de ejecutar el filtrado sobre los elementos y dar de alta los manejadores específicos. Para ello hemos creado la clase FilterChain:

~~~
import * as Handlers from "./filters";
 
class FilterChain {
  constructor(elements, filters) {
    this.elements = elements;
    this.filters = filters;
    this.handlers = [];
  }
 
  /**
   *
   * @param {AbstractFilterHandler} filter
   */
  addHandler(handler) {
    this.handlers.push(handler);
  }
 
  applyFilters() {
    let elements = this.elements;
    this.handlers.forEach(handler => {
      if (handler.canIHandle(this.filters)) {
        elements = handler.applyFilter(elements, this.filters);
      }
    });
 
    return elements;
  }
}
export default FilterChain;
~~~

Como vemos, esta clase se encarga de recibir los elementos sobre los que se realizan la acción, el contexto de los filtros activos por el usuario y los manejadores que deben de ejecutarse. El método applyFilters() será el punto de entrada para la ejecución de la cadena.

Para ejecutar el patrón en nuestro código simplemente tenemos que dar de alta el Chain y sus Handlers y llamar al método applyFilters:

~~~
let chain = new FilterChain(elements, filters);
chain.addHandler(new Handlers.ModelsFilterHandler());
chain.addHandler(new Handlers.OrderByPriceFilterHandler());
let result = handler.applyFilters(elements, filters);
~~~
Con estos sencillos pasos, hemos abstraído cada lógica de filtrado/ordenando en una clase distinta, evitando un código acoplado y sin una responsabilidad clara.

-----------

## Analogía:
Acabas de comprar e instalar una nueva pieza de hardware en tu computadora. Como eres un fanático de la informática, la computadora tiene varios sistemas operativos instalados. Intentas arrancarlos todos para ver si soportan el hardware. Windows detecta y habilita el hardware automáticamente. Sin embargo, tu querido Linux se niega a funcionar con el nuevo hardware. Ligeramente esperanzado, decides llamar al número de teléfono de soporte técnico escrito en la caja.

Lo primero que oyes es la voz robótica del contestador automático. Te sugiere nueve soluciones populares a varios problemas, pero ninguna de ellas es relevante a tu caso. Después de un rato, el robot te conecta con un operador humano.

![chain](https://refactoring.guru/images/patterns/content/chain-of-responsibility/chain-of-responsibility-comic-1-es.png)

Por desgracia, el operador tampoco consigue sugerirte nada específico. Se dedica a recitar largos pasajes del manual, negándose a escuchar tus comentarios. Cuando escuchas por enésima vez la frase “¿has intentado apagar y encender la computadora?”, exiges que te pasen con un ingeniero de verdad.

Por fin, el operador pasa tu llamada a unos de los ingenieros, que probablemente ansiaba una conversación humana desde hacía tiempo, sentado en la solitaria sala del servidor del oscuro sótano de un edificio de oficinas. El ingeniero te indica dónde descargar los drivers adecuados para tu nuevo hardware y cómo instalarlos en Linux. Por fin, ¡la solución! Acabas la llamada dando saltos de alegría.