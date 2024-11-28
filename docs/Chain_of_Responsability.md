# chain of responsability

## Definición

Chain of Responsibility es un patrón de diseño de comportamiento que te permite pasar solicitudes a lo largo de una cadena de manejadores. Al recibir una solicitud, cada manejador decide si la procesa o si la pasa al siguiente manejador de la cadena.

El patrón de diseño cadena de responsabilidad es un patrón de comportamiento que evita acoplar el emisor de una petición a su receptor dando a más de un objeto la posibilidad de responder a una petición. Para ello, se encadenan los receptores y pasa la petición a través de la cadena hasta que es procesada por algún objeto. Este patrón es utilizado a menudo en el contexto de las interfaces gráficas de usuario donde un objeto puede estar compuesto de varios objetos (que generalmente heredan de una super clase "vista"). No se debe confundir con el patrón Composite (patrón de diseño) que se basa en un concepto similar.

---------------------

## ¿Cómo traducimos esta definición?
Básicamente, este patrón ayuda a encapsular acciones secuenciales sobre un objeto. Por ejemplo, en un sistema de pedidos donde hay que realizar una secuencia de pasos para una determinada acción. Un caso que se me ocurre es el de realizar un proceso de scoring sobre un pedido que puede partirse en distintos pasos.

------------------- 
![Chain of Responsability](https://refactoring.guru/images/patterns/diagrams/chain-of-responsibility/solution1-es.png?id=122092268f688aa2015b2f20dabafb89)

------------------- 

# Caracteristicas principales.

1. Cadena de manejadores:
    * Cada objeto de la cadena conoce al siguiente en la secuencia, pero no al anterior.

2. Desacoplamiento:
    * Los objetos emisores de solicitudes no necesitan conocer los detalles de los receptores.

3. Flexibilidad:
    * Se pueden añadir nuevos manejadores a la cadena sin afectar a los demás.

# implementación:
El primer paso siempre es identificar al handler, implementando una clase abstracta con los métodos que requiera para el caso de uso. En mi caso aplicar el filtro y un método que identifique si ese handler debe ser ejecutado en función de los filtros activos por el usuario. A continuación la clase abstracta AbstractFilterHandler implementada:
