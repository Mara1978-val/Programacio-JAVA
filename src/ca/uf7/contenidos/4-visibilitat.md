# 4. Tipus d'accés als membres d'una classe (visibilitat)

Els membres d'una classe (atributs i mètodes, és a dir, les seues variables i funcions) poden tindre diferents nivells d'accés, segons el llenguatge de programació. Habitualment, es distingeix entre:

- **Public**: Pot accedir-s'hi des de qualsevol altre codi (classe, mòdul o fitxer) que importe o visibilitze la classe.
- **Privat**: Només pot accedir-s'hi des del mateix cos de la classe; ningú fora d'ella no pot llegir ni modificar aqueixos membres.
- **Protegit**: Pot accedir-s'hi la pròpia classe i també les subclasses (o classes derivades) que hereten d'ella.
- **Paquet**: Els membres marcats amb aquest nivell només són accessibles per codi dins del mateix paquet, mòdul o directori (depèn de com organitze el llenguatge els espais de noms).

La sintaxi concreta per a cada nivell d'accés és la següent:

::: tabs
== Java

- `public`
- `protected`
- `private`
- (paquet sense qualificació)

:::

La idea és restringir l'accés a les dades internes d'una classe per tal de mantenir la seua **encapsulació**. D'aquesta manera, es defineix una **interfície pública** (els membres marcats com a public) que permet a altres components interactuar amb la classe sense conéixer-ne els detalls interns, i es mantenen com a private tots els atributs i mètodes que no han de ser exposats directament.

Per a mantenir l'encapsulació, és recomanable:

- Marcar com a publics únicament aquells mètodes i atributs que formen part de l'interfície que vols exposar.
- Marcar com a privades (o equivalent) totes les dades internes i mètodes auxiliars que no han de ser accedits directament per codi extern.
- Marcar com a protegit només quan cal que una classe derivada puga accedir a algunes dades o funcionalitats concretes de la classe base, sense fer-les públiques a tot arreu.

D'aquesta manera, el codi extern només podrà interactuar amb la classe a través de la seua interfície pública, i es minimitza el risc d'alterar l'estat intern dels objectes per error.
