# 7. Constants de classe i objecte

Els membres d'una classe (mètodes i atributs) poden tindre diferents combinacions de comportament pel que fa a la seua constància i visibilitat compartida entre instàncies. Aquestes combinacions determinen com s'inicialitzen i com s'utilitzen durant el temps de vida del programa:

- **Membres de classe**: són atributs o funcions que **pertanyen a la classe en si, i no a una instància concreta**. El seu valor és comú a totes les instàncies i pot accedir-s'hi sense necessitat de crear cap objecte. Són útils per a informació compartida o funcionalitats globals dins la classe.
- **Membres de classe constants**: combinen ambdues característiques. Representen **valors globals i invariables dins la classe**, sovint utilitzats com a constants simbòliques.
- **Membres d'instància**: són **atributs propis de cada objecte**, i poden canviar lliurement al llarg de l'execució.
- **Membres d'instància constants**: són valors que, **una vegada inicialitzats, no poden canviar**. Poden tindre un valor diferent per a cada objecte.

::: warning ATENCIÓ
L'ús extensiu de membres de classe (compartits per tots els objectes) pot generar dependències globals i dificultats a l'hora de depurar o mantindre el codi, ja que es contradiu el principi d'encapsulació i independència entre objectes.
:::

::: tabs
== Java

Els membres constants es defineixen a Java a través de la paraula reservada `final`, mentre que els membres de classe es defineixen mitjançant la paraula reservada `static`. D'aquesta manera, si considerem que els membres són atributs, tenim quatre possibles combinacions a Java per a indicar si un atribut és constant:

- **Membres de classe**: `static`
- **Membres de classe constants**: `static final`
- **Membres d'instància**: sense *static* ni *final*
- **Membres d'instància constants**: `final`

:::
