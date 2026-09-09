# Exercicis

## Exercicis - Nivell bàsic

### Exercici 1

**a)** Escriu un programa que imprimisca l'àrea d'un quadrat de costat 5.  
**b)** Modifica'l perquè el costat del quadrat s'introduïsca per teclat i es mostre l'àrea corresponent.  
**c)** Afig-hi el càlcul i la mostra del perímetre del mateix quadrat.  

### Exercici 2

**a)** Escriu un programa que llig dos nombres i només mostre la seua suma.  
**b)** Ampli­a'l perquè també mostre la resta dels dos nombres.  
**c)** Afig-hi el producte i la divisió, mostrant cada resultat amb un missatge clar.  
**d)** Afig que, en cas de dividir per zero, no farà l'operació i mostrarà un missatge indicant de l'error.  

### Exercici 3

**a)** Escriu un programa que demane l'edat per teclat i, si l'usuari és major d'edat (≥18), mostre "Ets major d'edat".  
**b)** Modifica'l perquè, en cas contrari, mostre "Ets menor d'edat".  
**c)** Afig-hi una comprovació addicional: si l'edat introduïda és negativa, que mostre "Error: edat invàlida".  

## Exercicis - Nivell mitjà

### Exercici 4

En el departament de secretaria t'han demanat un programa per convertir notes numèriques en valoracions alfabètiques.

**a)** El programa llig una nota (0–10) i escriu la corresponent valoració:

- 0–2: Molt deficient
- 3–4: Insuficient
- 5–6: Bé
- 7–8: Notable
- 9–10: Excel·lent

**b)** Si la nota està fora de l'interval 0–10, ha de mostrar "Error: nota invàlida".  
**c)** Afig una felicitació addicional: si la qualificació és exactament 10, també mostrarà "Felicitats! Tens matrícula d'honor!".  

### Exercici 5

**a)** Escriu un programa que llig les hores treballades i la tarifa per hora, i calcule el salari brut (sense hores extres).  
**b)** Amplia-lo perquè les hores que passen de 35 es paguen a 1,5 × tarifa.  
**c)** Afig-hi el càlcul d'impostos segons trams:  

- Primeros 500 €: 0 %
- Següents 400 €: 25 %
- Resta: 45 %

**d)** Finalment, imprimeix nom, salari brut, total d'impostos i salari net, amb missatges clars.  

## Exercicis - Nivell avançat

### Exercici 6

Una botiga ven banderes personalitzades de la màxima qualitat i ens ha demanat fer un configurador que calcule el preu segons alt i ample. El preu base d'una bandera és d'un cèntim d'euro el centímetre quadrat. Si la volem amb un escut brodat, el preu s'incrementa en 2,50 € independentment de l'escut. Les despeses d'enviament són 3,25€. L'IVA ja està inclòs a totes les tarifes.

*Exemple*:

```plaintext
Introduïu l'alçada de la bandera en cm: 20
Ara introduïu l'amplada: 35  
Vol escut brodat? (s/n): n  
Gràcies. Aquí teniu el desglossament de la vostra compra.  
Bandera de 700 cm2: 7,00 €  
Sense escut: 0,00 €  
Despeses d'enviament: 3,25 €  
Total: 10,25 €  
```

### Exercici 7

Una pastisseria ens ha demanat fer un programa que faça pressupostos de pastissos. El programa preguntarà primer de quin sabor vol l'usuari el pastís: poma, maduixa o xocolata. El pastís de poma val 18 euros i el de maduixa 16. En cas de seleccionar el pastís de xocolata, el programa ha de preguntar a més si la xocolata és negra o blanca; la primera opció val 14 euros i la segona 15. Finalment, es pregunta si s'hi afegeix nata i si es personalitza amb un nom; la nata suma 2,50 i l'escriptura del nom 2,75.

*Exemple*:

```plaintext
Trieu un sabor (poma, maduixa o xocolata): xocolata
Quin tipus de xocolata voleu? (negre o blanc): negre
Vol nata? (si o no): si
Voleu posar-hi un nom? (si o no): no
Pastís de xocolata negra: 14,00 €
Amb nata: 2,50 €
Total: 16,50 €
```

### Exercici 8

Implementa el joc pedra, paper y tisora. Primer, l'usuari 1 introdueix la seua jugada y després l'usuari 2.

*Exemple 1*:

```plaintext
Torn del jugador 1 (introdueix pedra, paper o tisora): paper
Torn del jugador 2 (introdueix pedra, paper o tisora): paper
Empat
```

*Exemple 2*:

```plaintext
Torn del jugador 1 (introdueix pedra, paper o tisora): paper
Torn del jugador 2 (introdueix pedra, paper o tisora): tisora
Guanya el jugador 2
```

*Exemple 3*:

```plaintext
Torn del jugador 1 (introdueix pedra, paper o tisora): pedra
Torn del jugador 2 (introdueix pedra, paper o tisora): tisora
Guanya el jugador 1
```

### Exercici 9

Una empresa de missatgeria vol automatitzar el càlcul del preu d'enviaments de paquets segons el pes i la destinació. El programa demanarà primer el pes del paquet en kg.

- Si el pes és inferior a 1 kg, el preu base és de 3 €.
- Si el pes està entre 1 i 5 kg (inclosos), el preu base és de 5 €.
- Si el pes supera els 5 kg, el preu base és de 10 €.

Després, es pregunta si el destí és nacional o internacional:

- En cas d'enviament internacional, s'aplica un suplement de 7,50 €.
- Si l'enviament és nacional, no hi ha cap suplement.

Finalment, es mostra el desglossament del preu total.

*Exemple*:

```plaintext
Introdueix el pes del paquet (en kg): 2.5  
És un enviament internacional? (s/n): s  
Preu base per 2.5 kg: 5,00 €  
Suplement per enviament internacional: 7,50 €  
Total: 12,50 €  
```

### Exercici 10

Una cafeteria et demana que programes un sistema per fer tiquets de comanda per esmorzars. Cada client pot triar una beguda (cafè, te o xocolata) i una pasta (croissant, ensaïmada o magdalena).

Preus de les begudes:

- Cafè: 1,20 €
- Te: 1,00 €
- Xocolata: 1,50 €

Preus de les pastes:

- Croissant: 1,10 €
- Ensaïmada: 1,40 €
- Magdalena: 0,90 €

El programa també pregunta si es vol per emportar o per consumir al local.

Si és per emportar, s'aplica un recàrrec de 0,25 € pel got i el recipient.

*Exemple*:

```plaintext
Tria una beguda (cafè, te o xocolata): xocolata  
Tria una pasta (croissant, ensaïmada o magdalena): ensaïmada  
Vols per emportar? (s/n): s  
Beguda (xocolata): 1,50 €  
Pasta (ensaïmada): 1,40 €  
Recàrrec per emportar: 0,25 €  
Total: 3,15 €  
```
