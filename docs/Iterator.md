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
## Analogía. 
Planeas visitar Roma por unos días y ver todas sus atracciones y puntos de interés. Pero, una vez allí, podrías perder mucho tiempo dando vueltas, incapaz de encontrar siquiera el Coliseo.

En lugar de eso, podrías comprar una aplicación de guía virtual para tu smartphone y utilizarla para moverte. Es buena y barata y puedes quedarte en sitios interesantes todo el tiempo que quieras.

![imagen](https://refactoring.guru/images/patterns/content/iterator/iterator-comic-1-es.png?id=0ceb64477a16210f039bc8c9650029c3)

Una tercera alternativa sería dedicar parte del presupuesto del viaje a contratar un guía local que conozca la ciudad como la palma de su mano. El guía podría adaptar la visita a tus gustos, mostrarte las atracciones y contarte un montón de emocionantes historias. Eso sería más divertido pero, lamentablemente, también más caro.

Todas estas opciones —las direcciones aleatorias en tu cabeza, el navegador del smartphone o el guía humano—, actúan como iteradores sobre la amplia colección de visitas y atracciones de Roma.

----------- 
## Ejemplo de implementación.

En este ejemplo, el patrón Iterator se utiliza para recorrer un tipo especial de colección que encapsula el acceso al grafo social de Facebook. La colección proporciona varios iteradores que recorren perfiles de distintas formas.
![imagen](https://refactoring.guru/images/patterns/diagrams/iterator/example.png?id=f2a24ef3787bf80ed450709240506ff2)

El iterador ‘amigos’ puede utilizarse para recorrer los amigos de un perfil dado. El iterador ‘colegas’ hace lo mismo, excepto que omite amigos que no trabajen en la misma empresa que la persona objetivo. Ambos iteradores implementan una interfaz común que permite a los clientes extraer perfiles sin profundizar en los detalles de la implementación, como la autenticación y el envío de solicitudes REST.

El código cliente no está acoplado a clases concretas porque sólo trabaja con colecciones e iteradores a través de interfaces. Si decides conectar tu aplicación a una nueva red social, sólo necesitas proporcionar nuevas clases de colección e iteradoras, sin cambiar el código existente.

## Código de implementación.
~~~ 
// La interfaz de colección debe declarar un método fábrica para
// producir iteradores. Puedes declarar varios métodos si hay
// distintos tipos de iteración disponibles en tu programa.

interface SocialNetwork is
    method createFriendsIterator(profileId):ProfileIterator
    method createCoworkersIterator(profileId):ProfileIterator
~~~
~~~
// Cada colección concreta está acoplada a un grupo de clases
// iteradoras concretas que devuelve, pero el cliente no lo
// está, ya que la firma de estos métodos devuelve interfaces
// iteradoras.
class Facebook implements SocialNetwork is
    // ... El grueso del código de la colección debe ir aquí ...
    // Código de creación del iterador.
    method createFriendsIterator(profileId) is
        return new FacebookIterator(this, profileId, "friends")
    method createCoworkersIterator(profileId) is
        return new FacebookIterator(this, profileId, "coworkers")
~~~
~~~
// La interfaz común a todos los iteradores.
interface ProfileIterator is
    method getNext():Profile
    method hasMore():bool
~~~
~~~
// La clase iteradora concreta.
class FacebookIterator implements ProfileIterator is
    // El iterador necesita una referencia a la colección que
    // recorre.
    private field facebook: Facebook
    private field profileId, type: string

    // Un objeto iterador recorre la colección
    // independientemente de otro iterador, por eso debe
    // almacenar el estado de iteración.
    private field currentPosition
    private field cache: array of Profile
    constructor FacebookIterator(facebook, profileId, type) is
        this.facebook = facebook
        this.profileId = profileId
        this.type = type

    private method lazyInit() is
        if (cache == null)
            cache = facebook.socialGraphRequest(profileId, type)
~~~
~~~
    // Cada clase iteradora concreta tiene su propia
    // implementación de la interfaz iteradora común.
    method getNext() is
        if (hasMore())
            result = cache[currentPosition]
            currentPosition++
            return result

    method hasMore() is
        lazyInit()
        return currentPosition < cache.length
~~~
~~~
// Aquí tienes otro truco útil: puedes pasar un iterador a una
// clase cliente en lugar de darle acceso a una colección
// completa. De esta forma, no expones la colección al cliente.
//
// Y hay otra ventaja: puedes cambiar la forma en la que el
// cliente trabaja con la colección durante el tiempo de
// ejecución pasándole un iterador diferente. Esto es posible
// porque el código cliente no está acoplado a clases iteradoras
// concretas.
class SocialSpammer is
    method send(iterator: ProfileIterator, message: string) is
        while (iterator.hasMore())
            profile = iterator.getNext()
            System.sendEmail(profile.getEmail(), message)
~~~
~~~
// La clase Aplicación configura colecciones e iteradores y
// después los pasa al código cliente.
class Application is
    field network: SocialNetwork
    field spammer: SocialSpammer

    method config() is
        if working with Facebook
            this.network = new Facebook()
        if working with LinkedIn
            this.network = new LinkedIn()
        this.spammer = new SocialSpammer()

    method sendSpamToFriends(profile) is
        iterator = network.createFriendsIterator(profile.getId())
        spammer.send(iterator, "Very important message")

    method sendSpamToCoworkers(profile) is
        iterator = network.createCoworkersIterator(profile.getId())
        spammer.send(iterator, "Very important message")
~~~

