# Exercicis

## Exercicis - Estructures associatives

### Exercici H1

**a)** Demana una frase per teclat i emmagatzema cada paraula en un vector.  
**b)** Guarda cada paraula en una estructura associativa, on la clau siga la paraula i el valor siga el recompte.  
**c)** Mostra les paraules i el nombre de repeticions.  
**d)** Mostra quina paraula és la que més es repeteix.  
<!--
### Exercici H2

Construeix un traductor bàsic de paraules individuals.

**a)** Emmagatzema una llista de traduccions en una estructura clau-valor on la clau és una paraula en una llengua i el valor és la seua traducció en altra llengua. Afig, almenys, 5 elements clau-valor per teclat.  
**b)** Permet a l'usuari introduir una paraula i que el programa mostre la traducció. Si no està en el diccionari, ho indica.  
**c)** Permet afegir una nova traducció al diccionari durant l'execució del programa.  
**d)** Modifica el programa per a mostrar un menú que permetrà a l'usuari triar entre buscar una paraula al diccionari, afegir una nova paraula o acabar el programa.  
**e)** Afig una nova opció per a mostrar totes les paraules del diccionari.  

### Exercici H3

**a)** Permet afegir parelles "nom - número de telèfon" en una estructura clau-valor. Es podran afegir fins que l'usuari introduisca la cadena "fi" com a nom.  
**b)** Permet consultar el número de telèfon d'un nom donat.  
**c)** Permet esborrar un contacte donat el seu nom.  
**d)** Modifica el programa de forma que es mostre un menú que permeta triar a entre: afegir un nou contacte, esborrar-ne donat el nom i consultar el telèfon donat el nom.  

### Exercici H4

Un petit magatzem vol informatitzar el sistema de vendes i l'inventari. Cada producte es representa amb un nom, un preu unitari i una quantitat en estoc. A més, es vol dur un registre de quantes unitats s'han venut de cada producte.

**a)** Crea una estructura clau-valor on cada clau siga el nom d'un producte i el valor siga un vector amb el preu unitari i estoc.  
**b)** Emplena l'estructura amb 5 productes diferents, introduint per teclat tots els valors.  
**c)** Permet afegir un producte més, introduint per teclat el nom i el preu unitari, i amb estoc inicial de 100.  
**d)** Permet realitzar vendes: demana nom i quantitat, comprova si hi ha en estoc i actualitza els valors.  
**e)** Crea un menú que permeta a l'usuari triar entre afegir un producte, realitzar una venda o acabar el programa.  
**f)** Afig una nova opció al menú per a mostrar l'estat actual de l'estoc.  
-->

### Exercici H5

En una plataforma de valoració s'ha preparat un test de 10 preguntes. Cada pregunta pot rebre una puntuació de 1 a 5 estrelles per part dels usuaris. Volem un programa que acumule els resultats en una estructura clau-valor niada, i que ens permeta calcular estadístiques per a cada pregunta i en conjunt.

La estructura serà:

- Clau exterior: número de pregunta (1…10)
- Valor exterior: una altra estructura clau-valor on
  - Clau interior: puntuació (1…5)
  - Valor interior: recompte d'usuaris que han donat eixa puntuació

**a)** Declara i inicialitza l'estructura amb valors enters aleatoris.  
**b)** Permet a l'usuari demanar un número de pregunta, i mostrar un histograma de les puntuacions per a eixa pregunta. Per exemple:  

```plaintext
Pregunta 3:
1: **
2: *
3: ****
4: **
5: *
```

**c)** Fes que, a més de l'histograma, calcule la puntuació mitjana de la pregunta. Per exemple, per a la pregunta anterior:  

```plaintext
mitjana = (1 * n_resp1 + 2 * n_resp2 + ··· + 5 * n_resp5) / (n_resp1 + n_resp2 + ··· + n_resp5)

on n_respX és el número de respostes (asteriscs) de la pregunta X:
  n_resp1 = 2
  n_resp2 = 1
  n_resp3 = 4
  n_resp4 = 2
  n_resp5 = 1
```

## Exercicis - Cues

### Exercici Q1

**a)** Demana una sèrie de noms per teclat i guarda’ls en una cua.  
**b)** Mostra per pantalla la cua sencera.  
**c)** Simula l’atenció d’una fila de clients traent-los un per un de la cua (amb `poll`).  
**d)** Mostra un missatge cada vegada que atens un client i quan la cua està buida.  

---
<!--
### Exercici Q2

Es vol simular un sistema d’impressió en una oficina.

**a)** Cada treball enviat a imprimir s’ha d’afegir a una cua amb el seu nom i número de pàgines.  
**b)** Mentre la cua tinga elements, es van traient (amb `poll`) i mostrant com s’imprimeixen.  
**c)** Mostra el total de pàgines impreses al final.  
**d)** Afig una opció per a cancel·lar tots els treballs (buidar la cua).  

---

### Exercici Q3

En un supermercat, volem gestionar una cua de clients.

**a)** Cada client té un nom i un import de compra.  
**b)** Cada vegada que s’atén un client, es mostra el seu nom i l’import.  
**c)** Calcula la mitjana de diners gastats per client.  
**d)** Mostra el client que ha fet la compra més gran.  

---

### Exercici Q4

Volem simular una cua de processos d’un sistema operatiu.

**a)** Cada procés té un identificador i un temps d’execució (en segons).  
**b)** Els processos s’introduïxen en la cua per ordre d’arribada.  
**c)** Mentre hi haja processos, es van traient i es mostra: “Executant procés X durant Y segons”.  
**d)** Mostra al final el temps total d’execució del sistema.  

---
-->
### Exercici Q5

Es vol simular una cua d’autobusos en una estació.

**a)** Cada autobús s’identifica pel seu número de línia.  
**b)** Els autobusos arriben i s’afegeixen a la cua.  
**c)** Cada vegada que un autobús ix, es lleva de la cua.  
**d)** Mostra la situació actual de la cua després de cada eixida.  
**e)** Afig una opció per a veure quin és el pròxim autobús que eixirà (`peek`).  

---

## Exercicis - Piles

### Exercici S1

**a)** Demana una frase per teclat i guarda cada paraula en una pila.  
**b)** Mostra la frase en ordre invers traient les paraules una a una amb `pop`.  
**c)** Mostra la frase original i la invertida.  
<!--
---

### Exercici S2

Volem comprovar si una paraula és un **palíndrom** (es llig igual de davant cap arrere).

**a)** Llig una paraula i guarda cada lletra en una pila.  
**b)** Trau les lletres de la pila i reconstrueix la paraula al revés.  
**c)** Comprova si la paraula original i la invertida són iguals.  
**d)** Mostra un missatge indicant si és palíndrom o no.  

---

### Exercici S3

Volem simular el funcionament del botó “Desfer” d’un editor de text.

**a)** Cada vegada que l’usuari escriu una paraula, s’afig a una pila.  
**b)** Si l’usuari escriu “desfer”, s’elimina (pop) l’última paraula.  
**c)** Mostra el text actual després de cada acció.  
**d)** El programa acaba quan s’escriu “fi”.  

---

### Exercici S4

Volem comprovar si els parèntesis d’una expressió matemàtica estan ben tancats.

**a)** Llig una expressió (per exemple: `(2+3)*(4-(1+1))`).  
**b)** Usa una pila per a guardar els parèntesis d’obertura `(`.  
**c)** Cada vegada que trobes un `)`, trau un element de la pila.  
**d)** Al final, si la pila està buida, els parèntesis estan ben equilibrats.  


---
-->
### Exercici S5

Es vol simular una pila d’objectes en un magatzem.

**a)** Cada objecte té un nom i un pes.  
**b)** Els objectes s’apilen amb `push`.  
**c)** Quan es descarrega el magatzem, s’extrau amb `pop`.  
**d)** Mostra el nom i el pes de cada objecte mentre es descarrega.  
**e)** Calcula el pes total de tots els objectes descarregats. 
