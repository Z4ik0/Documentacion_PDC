# Iterator.

## Definición.
Iterator es un patrón de diseño de comportamiento que te permite recorrer elementos de una colección sin exponer su representación subyacente (lista, pila, árbol, etc.).
El patrón Iterator permite recorrer los elementos de una colección de objetos sin exponer la estructura interna de la colección.

## Propósito: 
El patrón Iterator permite recorrer una colección (como un álbum de fotos) sin exponer cómo está organizada internamente.

![Imagen del patron Iterator.](https://refactoring.guru/images/patterns/content/iterator/iterator-es.png?id=79d47b82a1e72adaaa70d8e1a3b10a4e)

-------
## Características principales:
1. Permite iterar sobre una colección de objetos sin exponer su estructura interna.

2. Facilita el acceso a los elementos de manera secuencial.

3. El mismo código de iteración se puede usar para diferentes colecciones.
---------
La idea central del patrón Iterator es extraer el comportamiento de recorrido de una colección y colocarlo en un objeto independiente llamado iterador.

![Diagrama de Iterator](https://refactoring.guru/images/patterns/diagrams/iterator/solution1.png?id=2f5fbcce6099d8ea09b2fbb83e3e7059)

Además de implementar el propio algoritmo, un objeto iterador encapsula todos los detalles del recorrido, como la posición actual y cuántos elementos quedan hasta el final. Debido a esto, varios iteradores pueden recorrer la misma colección al mismo tiempo, independientemente los unos de los otros.

Normalmente, los iteradores aportan un método principal para extraer elementos de la colección. El cliente puede continuar ejecutando este método hasta que no devuelva nada, lo que significa que el iterador ha recorrido todos los elementos.

Todos los iteradores deben implementar la misma interfaz. Esto hace que el código cliente sea compatible con cualquier tipo de colección o cualquier algoritmo de recorrido, siempre y cuando exista un iterador adecuado. Si necesitas una forma particular de recorrer una colección, creas una nueva clase iteradora sin tener que cambiar la colección o el cliente.

---------
## Ventajas.

| **Ventaja**                          | **Descripción**                                                                                      |
|--------------------------------------|------------------------------------------------------------------------------------------------------|
| **Abstracción del recorrido**        | Permite recorrer una colección sin exponer su estructura interna.                                   |
| **Compatibilidad con diferentes colecciones** | Facilita trabajar con diferentes tipos de colecciones de manera uniforme.                          |
| **Simplificación del código cliente**| Reduce la complejidad del código que interactúa con las colecciones.                                |
| **Separación de responsabilidades** | Separa la lógica de iteración de la colección misma, promoviendo un diseño más limpio.              |
| **Reutilización**                    | Los iteradores pueden ser reutilizados en diferentes contextos sin modificar la colección.          |

## Desventajas.

| **Desventaja**                     | **Descripción**                                                                                              |
|------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **Sobrecarga de objetos**          | Puede aumentar la cantidad de objetos en memoria al crear instancias de iteradores.                         |
| **Complejidad en iteradores complejos** | La implementación de iteradores para estructuras de datos complejas puede ser difícil.                     |
| **Falta de control bidireccional** | Algunos iteradores básicos no permiten navegar hacia atrás en la colección.                                |
| **Dependencia de la colección**    | Aunque el iterador abstrae el recorrido, sigue dependiendo de la estructura de la colección para funcionar. |
-----------
## Analogia. 
Planeas visitar Roma por unos días y ver todas sus atracciones y puntos de interés. Pero, una vez allí, podrías perder mucho tiempo dando vueltas, incapaz de encontrar siquiera el Coliseo.

En lugar de eso, podrías comprar una aplicación de guía virtual para tu smartphone y utilizarla para moverte. Es buena y barata y puedes quedarte en sitios interesantes todo el tiempo que quieras.

![imagen](https://refactoring.guru/images/patterns/content/iterator/iterator-comic-1-es.png?id=0ceb64477a16210f039bc8c9650029c3)

Una tercera alternativa sería dedicar parte del presupuesto del viaje a contratar un guía local que conozca la ciudad como la palma de su mano. El guía podría adaptar la visita a tus gustos, mostrarte las atracciones y contarte un montón de emocionantes historias. Eso sería más divertido pero, lamentablemente, también más caro.

Todas estas opciones —las direcciones aleatorias en tu cabeza, el navegador del smartphone o el guía humano—, actúan como iteradores sobre la amplia colección de visitas y atracciones de Roma.
