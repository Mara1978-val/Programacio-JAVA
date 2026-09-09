# 1. Introducció

La funció principal de qualsevol aplicació informàtica és la **manipulació i transformació de dades**. Aquestes dades poden representar conceptes molt diversos segons el context: notes d'estudiants, registres meteorològics, cites d'un calendari, etc. Les possibilitats són infinites. Per a dur a terme aquestes operacions, el programa sol emmagatzemar la informació en variables dins de la memòria i aplicar‐hi tant operadors bàsics com mètodes especialitzats.

El problema és que les variables només tenen **vigència** mentre l'aplicació s'executa: quan el programa finalitza, totes les dades es perden. Açò pot ser acceptable quan treballem amb dades literals o amb entrades interactives puntuals, però esdevé inviable si cada sessió haguérem de reintroduir, per exemple, les notes de centenars d'estudiants.

Per tant, sovint cal **persistir** la informació en algun mitjà extern. de manera que es mantinga disponible entre diferents execucions o fins i tot després d'apagar l'ordinador.

La forma més senzilla d'aconseguir-ho és aprofitar el **sistema d'arxius** del sistema operatiu. Gràcies a ell, podem escriure i llegir fitxers en formats senzills (text, CSV, JSON, XML…) o en formats binaris, sense preocupar‐nos del suport físic (disc dur, unitat USB, memòria externa, etc.).

A més del maneig de fitxers i directoris, un altre recurs molt útil és la **serialització d'objectes**, que permet convertir objectes de la memòria en una seqüència de bytes i tornar‐los a reconstruir més endavant. D'aquesta manera, podem guardar l'estat complet d'una instància i recuperar‐la de forma íntegra en una nova execució.

En aquesta unitat didàctica veurem:

- Operacions bàsiques sobre el sistema d'arxius: creació, lectura, escriptura i eliminació de fitxers i directoris.
- Formats de dades textuals i binaris per a emmagatzemar informació.
- Tècniques de serialització d'objectes per a fer persistència de l'estat de les nostres instàncies.

Amb aquests mecanismes podrem dissenyar aplicacions que guarden i recuperen dades de manera eficient i segura, garantint la **persistència** i la **continuïtat** de la informació tractada.
