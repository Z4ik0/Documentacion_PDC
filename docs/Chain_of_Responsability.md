# chain of responsability

## Definición

Chain of Responsibility es un patrón de diseño de comportamiento que te permite pasar solicitudes a lo largo de una cadena de manejadores. Al recibir una solicitud, cada manejador decide si la procesa o si la pasa al siguiente manejador de la cadena.

El patrón de diseño cadena de responsabilidad es un patrón de comportamiento que evita acoplar el emisor de una petición a su receptor dando a más de un objeto la posibilidad de responder a una petición. Para ello, se encadenan los receptores y pasa la petición a través de la cadena hasta que es procesada por algún objeto. Este patrón es utilizado a menudo en el contexto de las interfaces gráficas de usuario donde un objeto puede estar compuesto de varios objetos (que generalmente heredan de una super clase "vista"). No se debe confundir con el patrón Composite (patrón de diseño) que se basa en un concepto similar.

---------------------
## ¿Cómo traducimos esta definición?

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

------------------------
## Ventajas.
| **Ventaja**                                  | **Descripción**                                                                 |
|----------------------------------------------|---------------------------------------------------------------------------------|
| **Desacoplamiento**                          | El emisor de la solicitud no necesita conocer los detalles de los manejadores.  |
| **Extensibilidad**                           | Es fácil agregar nuevos manejadores sin modificar la estructura existente.      |
| **Reutilización**                            | Los manejadores pueden ser reutilizados en diferentes cadenas o sistemas.       |
| **Flexibilidad en el manejo de solicitudes** | La solicitud puede ser manejada por uno o más manejadores dependiendo de la lógica. |
| **Responsabilidad distribuida**              | Divide la responsabilidad entre varios objetos en lugar de asignarla a uno solo.|

## Desventajas.
| **Desventaja**                     | **Descripción**                                                                                              |
|------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **Dificultad para depurar**        | Es complicado rastrear qué manejador procesó una solicitud en cadenas largas o complejas.                    |
| **Posible bajo rendimiento**       | Si la cadena es muy extensa, se pueden generar múltiples llamadas innecesarias antes de procesar la solicitud.|
| **Orden estricto**                 | El orden de los manejadores afecta el comportamiento, lo que puede llevar a errores si no se define correctamente. |
| **Falta de garantía de manejo**    | No hay certeza de que la solicitud será procesada si ningún manejador es capaz de hacerlo.                   |


-------
## implementación:
El primer paso siempre es identificar al handler, implementando una clase abstracta con los métodos que requiera para el caso de uso. En mi caso aplicar el filtro y un método que identifique si ese handler debe ser ejecutado en función de los filtros activos por el usuario. A continuación la clase abstracta AbstractFilterHandler implementada:

------------------
## Código de implementación:
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
Imagina una línea de atención al cliente en una empresa. Si un cliente tiene una consulta, empieza hablando con el primer agente disponible. Si el primer agente no puede resolver el problema, lo deriva al siguiente agente. Este proceso continúa hasta que alguien pueda resolver la consulta, o hasta que el cliente se quede sin opciones.
Propósito: En este patrón, una solicitud se pasa de un objeto a otro en una cadena, y cada uno de ellos decide si puede manejarla o pasarla al siguiente.