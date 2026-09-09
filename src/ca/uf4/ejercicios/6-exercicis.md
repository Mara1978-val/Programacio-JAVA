# Exercicis

## Exercicis - Nivell bàsic

### Exercici 1

**a)** Escriu un programa que, donat un nombre N introduït per teclat, mostre per pantalla tots els nombres de l'1 fins a N.  
**b)** Modifica'l perquè només mostre els nombres parells.  
**c)** Modifica'l perquè no mostre ni el 16 ni els múltiples de 3.

### Exercici 2

**a)** Crea un programa que vaja demanant números fins que es llija un 0.  
**b)** Afig una variable que comptabilitze quants números s'han llegit.  
**c)** Mostra quants d'eixos han sigut positius.  
**d)** Mostra la mitjana de tots els números llegits (sense comptar el 0 final).

### Exercici 3

**a)** Escriu un programa que calcule i mostre el factorial d'un número N, introduït per teclat.  
**b)** Permet que es torne a demanar el valor de N fins que siga un número positiu.  
**c)** Afig una funcionalitat que mostre la seqüència de multiplicacions que es fan.

## Exercicis - Nivell mitjà

### Exercici 4

Un grup d'amics ha fet un torneig i vol enregistrar les puntuacions.

**a)** El programa demana el nom i puntuació de 4 jugadors i mostra qui ha aconseguit la puntuació més alta.  
**b)** Mostra la mitjana de les puntuacions.  
**c)** Si hi ha alguna puntuació inferior a 5, mostra "Cal millorar" per a eixos jugadors.

### Exercici 5

En un centre d'atenció telefònica volen saber quants clients han valorat negativament el servei.

**a)** Escriu un programa que llig per teclat 10 valoracions numèriques (−5 a +5) i indique si hi ha hagut algun negatiu.  
**b)** Modifica'l perquè també compte i mostre quants són positius, quants negatius i quants neutres (valoració de 0).  
**c)** Afig un missatge en cas que tots siguen positius: "Excel·lent!"  
**d)** Si algun és −5, afegir "Revisió urgent necessària".  

### Exercici 6

Volem controlar les despeses mensuals d'una casa.

**a)** El programa ha de demanar tres despeses (llum, aigua i menjar) i mostrar el total mensual.  
**b)** S'amplia el programa per a demanar també una quarta despesa opcional (altres), i mostrar-la només si és major que 0.  
**c)** S'amplia el programa per mostrar un resum amb percentatges de cada despesa sobre el total.  

## Exercicis - Nivell avançat

### Exercici 7

En una biblioteca universitària volen digitalitzar el sistema de control de préstecs. Cada llibre té un codi, un títol i una data de devolució prevista. El programa ha de gestionar la llista de préstecs oberts i calcular possibles recàrrecs per retràs.

**a)** Demana a l'usuari el codi i el títol d'un llibre, i la data de devolució prevista (dia, mes, any). Mostra-ho tot per pantalla.  
**b)** Afig la data d'avui i calcula si el llibre està endarrerit (data avui > data devolució). Mostra per pantalla tant si està endarrerit com si no.  

- Considera que un mes té 30 dies, i un any té 365 dies.
- Comprova en ordre: any, mes, dia.

**c)** Si hi ha retràs, calcula el nombre de dies de retard i mostra un recàrrec de 0,50 € per dia.  
**d)** Permet introduir diversos préstecs fins que l'usuari escriga "fi", i acumula el total de recàrrecs.  
**e)** Al final, mostra un resum: nombre de llibres prestat­s, llibres endarrerits i recàrrecs totals.

::: tip NOTA:
Per a comparar un String amb la cadena "fi", usa la següent instrucció:  
`cadena.equals("fi")`  
Aquesta expressió retorna `true` si el valor de cadena és igual a "fi", i `false` en cas contrari. No és correcte usar la doble igualtat `==` per motius que es voran més endavant.
:::

### Exercici 8

Un departament acadèmic vol un programa que calcule la nota final d'un alumne tenint en compte exàmens, pràctiques i treballs. Cada tipus té un pes diferent: exàmens 50 %, pràctiques 30 % i treballs 20 %. A més, si algun dels tres components està per sota de 4, l'alumne suspendrà automàticament.

**a)** Demana les tres notes (0–10) i calcula la nota ponderada simple.  
**b)** Afig la comprovació: si alguna nota < 4, mostra "Suspens automàtic".  
**c)** Si no hi ha suspens automàtic, mostra "Aprovat" o "Excel·lent" si la nota final ≥ 9.  
**d)** Permet repetir el càlcul per a diversos alumnes fins que l'usuari introduïsca "fi".  
**e)** Al final, mostra quants alumnes han aprovat, han suspés per nota baixa i quants han obtingut Excel·lent.

### Exercici 9

Una empresa de serveis vol automatitzar la facturació mensual en funció de l'ús i aplicar trams de tarifes i un IVA específic. El cost per unitat varia segons consums:

- Fins a 100 unitats: 0,10 €
- De 101 a 500: 0,08 €
- Més de 500: 0,05 €

A més, s'aplica un IVA del 21 %.

**a)** Demana el consum mensual (unitats) i calcula el cost base sense IVA.  
**b)** Aplica l'IVA i mostra el total amb IVA inclòs.  
**c)** Afig un descompte del 5 % si el consum supera les 1000 unitats (sobre el total amb IVA).  
**d)** Permet facturar per a diversos clients fins que l'usuari introduïsca "fi", i acumula el total facturat.  
**e)** Mostra un resum: nombre de factures, ingressos bruts, total d'IVA i total de descomptes aplicats.

### Exercici 10

Una botiga de mobles en línia necessita un programa per processar comandes i controlar l'inventari. Tenen un catàleg de productes amb codi (1, 2 o 3), nom, preu i estoc disponible. Quan l'usuari fa una comanda, cal restar unitats i calcular el total.

**a)** Carrega un inventari inicial de tres productes (taules, cadires i armaris) amb estoc inicial de 100 cadascun, i mostra'n la llista.  
**b)** Permet fer una comanda: l'usuari introdueix codi de producte i quantitat; si no hi ha estoc suficient, mostra "Estoc insuficient". Si el codi no correspon a ningun producte, mostra "Codi incorrecte".  
**c)** Permet a l'usuari fer tantes comandes com vulga, fins que el codi introduït siga 0. En cada comanda es descompten les unitats corresponents de l'inventari.  
**d)** Si, en fer una comanda, algun producte no té suficient unitats a l'inventari, mostrarà un missatge per pantalla.  
**e)** Després de la comanda, mostra quins productes han quedat amb estoc 0.  
**f)** Al final escriu un informe del valor total venut i productes esgotats.


<!--
---

## Exercicis - Nivell bàsic

1. Realitza un programa que mostre per pantalla els 20 primers nombres naturals (1, 2, 3... 20).
2. Realitza un programa que mostre els nombres parells compresos entre l'1 i el 200. Per a això utilitza un comptador i suma de 2 en 2.
3. Realitza un programa que mostre els nombres parells compresos entre l'1 i el 200. Aquesta vegada utilitza un comptador sumant d'1 en 1.
4. Realitza un programa que mostre els números des de l'1 fins a un número N que s'introduirà per teclat.

## Exercicis - Nivell mitjà

5. Realitza un programa que llija un número positiu N i calcule i visualitze la seua factorial N!
Sent el factorial:
0! = 1  
1! = 1  
2! = 2 *1  
3! = 3* 2*1  
N! = N* (N-1) *(N-2)........* 3 *2* 1  
6. Realitza un programa que llija 10 números no nuls i després mostre un missatge de si ha llegit algun número negatiu o no.
7. Realitza un programa que llija 10 números no nuls i després mostre un missatge indicant quants són positius i quants negatius.
8. Realitza un programa que llija una seqüència de números no nuls fins que s'introduïsca un 0, i després mostre si ha llegit algun número negatiu quants positius i quants negatius.
9. Realitza un programa que calcule i escriga la suma i el producte dels 10 primers nombres naturals.
10. Realitza un programa que llija una seqüència de notes (amb valors que van de 0 a 10) que acaba amb el valor -1 i ens diu si va haver-hi o no alguna nota amb valor 10.
11. Realitza un programa que sume independentment els parells i els imparells dels números compresos entre 100 i 200, i després mostre per pantalla totes dues sumes.
12. Realitza un programa que calcule el valor A elevat a B (A^B) sense fer ús de l'operador de potència (^), sent A i B valors introduïts per teclat, i després mostre el resultat per pantalla.
13. Realitza un programa on l'usuari "pensa" un número de l'1 al 100 i l'ordinador intenta endevinar-lo. És a dir, l'ordinador anirà proposant números una vegada i una altra fins a endevinar-lo (l'usuari haurà d'indicar-li a l'ordinador si és major, menor o igual al número que ha pensat).
14. Realitza un programa que donada una quantitat d'euros que l'usuari introdueix per teclat (múltiple de 5 €) mostrarà els bitllets de cada tipus que seran necessaris per a aconseguir aquesta quantitat (utilitzant bitllets de 500, 200, 100, 50, 20, 10 i 5). Cal indicar el mínim de bitllets possible. Per exemple, si l'usuari introdueix 145 el programa indicarà que serà necessari 1 bitllet de 100 €, 2 bitllets de 20 € i 1 bitllet de 5 € (no serà vàlid per exemple 29 bitllets de 5, que encara que sume 145 € no és el mínim nombre de bitllets possible).

## Exercicis - Nivell avançat

15. Realitza un programa que compte els múltiples de 3 des del 1 fins a un número que introduïm per teclat.
    - Exemple:

```plaintext
Dona'm un número: 13
Nombre de múltiples de 3: 4
```

16. Realitza un programa en java que demane un nombre primer (en castellà "número primo") positiu i ens diga si és primer o no.

```plaintext
Dis-me un número
És primer
```

17. Realitza un programa que llija i accepte únicament aquells números que siguen majors que l'últim donat, es a dir, l'anterior introudït. La introducció de números finalitza amb la introducció d'un 0. Al final es mostrarà:

     - El total de números introduïts, exclòs el 0.
     - El total de números fallats

```plaintext
Dis-me un número inicial: 20
Dis-me un número: 21
Dis-me un número: 8
Error, és menor.
Dis-me un número: 15
Dis-me un número: 10
Error, és menor.
Dis-me un número: 0
Total de números introduïts: 5
Número d'errors: 2
```

18.  Realitza un programa per a calcular la suma dels quadrats dels 5 primers nombres naturals.
19. Realitza un programa que lija un número i a continuació escriga el caràcter "*" tantes vegades com el valor numèric llegit. En aquells casos en què el valor llegit no siga positiu s'haurà d'escriure un únic asterisc.

```plaintext
Dis-me un número: 8
* * * * * * * *
```

20. Realitza un programa que demane un número enter N entre 0 i 20 i després mostre per pantalla els números des d'1 fins a N, un en cada línia, repetint cada número tantes vegades com el seu valor.

```plaintext
Dis-me un número: 5
1
22
333
4444
55555
```

21. Realitza un programa que demane dos números enters A i B, sent B major que A. Després visualitze els números des d'A fins a B i indique quants d'aquestos són parells.

```plaintext
Dis-me un número: 5
Dis-me un número major que l'anterior: 11
5 6 7 8 9 10 11
La quantitat de parells són: 3
```

22. Realitza un programa que demane un número i construïsca per pantalla la seua piràmide.

```plaintext
Dis-me un número per a realitzar la seua piràmide: 6
     *     
    ***
   *****
  *******
 *********
***********
```

## Exercicis d'ampliació

23. Escriu un programa que llija un número n d'un digit i imprimisca una piràmide de números amb n files com la següent.

Exemple:

```plaintext
   1   
  121
 12321
1234321
```

24. Escriu un programa que, donat un número enter positiu, ens diga quants són i quant sumen els dígits parells que conté. Els dígits parells es mostraran ordenadament d'esquerra a dreta. Per a fer-ho utilitzarem el tipus long en lloc de l'int per poder admetre números grans.

Exemple:

```plaintext
Introdueix un número enter positiu: 94026782
Dígits parells: 4 0 2 6 8 2
Suma dels dígits parells és: 22
```

25. Escriu un programa que diga si un número introduït per teclat és o no capicua. Els números capicua es lligen igual cap endavant i cap endarrere. El programa acceptarà números de qualsevol longitud dins del permesos en el tipus de dades long.

Exemple:

```plaintext
Introdueix un número enter positiu: 2019102
El 2019102 es capicua.
```

26. Realitza un programa que calcule el màxim, mínim i mitjana d'una sèrie de nombres enters positius introduïts per teclat. El programa acabarà quan l'usuari introduïsca un nombre primer. Aquest darrer número no es tindrà en compte per als càlculs. El programa ha d'indicar també quants números ha introduït l'usuari (sense comptar el número primer que serveix per eixir).

Exemple:

```plaintext
Introdueix números enters positius. Per finalitzar, introdueix un número primer:
Introdueix número: 6
Introdueix número: 8
Introdueix número: 15
Introdueix número: 12
Introdueix número: 23
Has introduït 4 números no primers.
Màxim: 15
Mínim: 6
Mitjana: 10.25
```

27. Implementa el joc pedra, paper i tisora. Primer, l'usuari introdueix la seva jugada i després l'ordinador genera a l'atzar una de les opcions. Si l'usuari introduïu una opció incorrecta, el programa haurà de mostrar un missatge de error.

-->