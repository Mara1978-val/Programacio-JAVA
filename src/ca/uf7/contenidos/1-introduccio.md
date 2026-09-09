# 1. Introducció

La Programació Orientada a Objectes (POO) fa que els problemes siguen més senzills, en permetre dividir el problema. Aquesta divisió es fa en objectes, de manera que cada objecte funcione de forma totalment independent.

>[!IMPORTANT] <strong>IMPORTANT!</strong>
>
>- Un **objecte** és un element del programa que posseeix les seues pròpies dades i el seu propi funcionament.
>
>- Una **classe** descriu un grup d'objectes que contenen una informació similar (atributs) i un comportament comú (mètodes).

>[!WARNING] <strong>ATENCIÓ!</strong>
>
>Abans de poder utilitzar un objecte, s'ha de definir la seua classe. La classe és la definició d'una mena d'objecte.

En definir una classe el que es fa és indicar com funciona un determinat tipus d'objectes. Després, a partir de la classe, podrem crear objectes d'aqueixa classe.

Les propietats de la POO són la següents:

- **Encapsulament**. Una classe es compon tant de variables (atributs) com de funcions i procediments (mètodes). De fet no es poden definir variables (ni funcions) fora d'una classe (és a dir no hi ha variables globals).
- **Abstracció**. Cal crear versions simplificades dels objectes i classes del mon real. També s'estableixen zones ocultes en definir la classes (zona privada) que només són utilitzades per aquesta classe i per alguna classe relacionada. Hi ha zones pública (anomenada també interfície de la classe) que poden ser utilitzades per qualsevol part del codi.
- **Polimorfisme**. Cada mètode d'una classe pot tindre diverses definicions diferents. En el cas del joc parxís: partida.començar(4) comença una partida per a quatre jugadors, partida.començar(roig, blau) comença una partida de dos jugadors per als colors roig i blau; aquestes són dues formes diferents d'emprar el mètode començar, que és polimòrfic.
- **Herència**. Una classe es pot definir a partir d'una altra ja existent. D'aquesta forma, la nova classe pot heretar propietats (atributs i mètodes) de l'altra.
