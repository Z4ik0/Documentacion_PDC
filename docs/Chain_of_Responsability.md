# chain of responsability

## Definición

Chain of Responsibility es un patrón de diseño de comportamiento que te permite pasar solicitudes a lo largo de una cadena de manejadores. Al recibir una solicitud, cada manejador decide si la procesa o si la pasa al siguiente manejador de la cadena.

El patrón de diseño cadena de responsabilidad es un patrón de comportamiento que evita acoplar el emisor de una petición a su receptor dando a más de un objeto la posibilidad de responder a una petición. Para ello, se encadenan los receptores y pasa la petición a través de la cadena hasta que es procesada por algún objeto. Este patrón es utilizado a menudo en el contexto de las interfaces gráficas de usuario donde un objeto puede estar compuesto de varios objetos (que generalmente heredan de una super clase "vista"). No se debe confundir con el patrón Composite (patrón de diseño) que se basa en un concepto similar.

# Caracteristicas principales.

1. Cadena de manejadores:
    * Cada objeto de la cadena conoce al siguiente en la secuencia, pero no al anterior.

2. Desacoplamiento:
    * Los objetos emisores de solicitudes no necesitan conocer los detalles de los receptores.
    
3. Flexibilidad:
    * Se pueden añadir nuevos manejadores a la cadena sin afectar a los demás.