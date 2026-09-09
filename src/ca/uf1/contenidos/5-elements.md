# 5. Elements d'un programa

## 5.1 Dades

Les dades són la base de qualsevol programa informàtic, utilitzades per a realitzar operacions i generar resultats.

Per a poder ser utilitzades per un programa el valor de la dada que volem utilitzar en el programa s'emmagatzema en la memòria.

Aquestes dades emmagatzemades poden ser de dos tipus **variables** o **constants** que posseeixen els següents atributs:

- **Nom**: Identificador de la dada.
- **Tipus**: Conjunt de valors que pot prendre.
- **Valor**: Valor assignat a la dada.

> ***Exemple:***
>
> Per a referenciar en un programa l'edat d'una persona.
>
> ```plaintext
> - Nom de la dada: edat
> - Tipus de dada: numèric
> - Valor de la dada: 30
> ```
>
> La dada amb nom `edat` té assignada la posició de memòria `0X0003`. En aquesta posició és on està guardat el valor d'edat en aquest cas `30`.
> ![Imatge de la dada edat guardada en memòria](/img/uf1/4.1.png)

### 5.1.1 Constants

Les constants són elements el valor dels quals roman invariable durant l'execució del programa. S'utilitzen per a representar valors específics que no canvien, facilitant la modificació i la comprensió del codi.

> ***Exemples:***
>
> Els correus de Google tenen el domini gmail.com
>
> ```plaintext
> - Nom de la dada: DOMINI_GMAIL
> - Tipus de dada: alfanumèric
> - Valor de la dada: "gmail.com"
> ```
>
> L'IVA a Espanya és 0.21
>
> ```plaintext
> - Nom de la dada: IVA
> - Tipus de dada: numèric
> - Valor de la dada: 0.21
> ```
>
> Una persona a Espanya és major d'edat als 18.
>
> ```plaintext
> - Nom de la dada: MAJOR_EDAT
> - Tipus de dada: numèric
> - Valor de la dada: 18
> ```

Les constants permeten que valors crucials, com taxes d'impostos, valors matemàtics o límits operacionals, siguen definits en un sol lloc. Això simplifica la seua actualització i evita errors.

### 5.1.2 Variables

Les variables són elements el valor dels quals pot canviar al llarg de l'execució del programa. Permeten emmagatzemar i manipular dades que poden canviar durant l'execució del programa.

> ***Exemples:***
>
> L'àrea d'un cercle canviarà depenent del radi d'aquest.
>
> ```plaintext
> - Nom de la dada: areaCercle
> - Tipus de dada: numèric
> - Valor de la dada: PI per radi al quadrat
> ```
>
> El total d'una factura canviarà depenent de la quantitat de productes i del preu del producte.
>
> ```plaintext
> - Nom de la dada: total
> - Tipus de dada: numèric
> - Valor de la dada: quantitat per preu
> ```

## 5.2 Expressions i operadors

### 5.2.1 Expressions

Una expressió és una combinació de valors, variables, i operadors que s'avaluen per a produir un nou valor. Poden ser simples, com constants o variables, o complexes, combinant operadors i altres expressions.

Quan s'assigna un valor directe, com en `edat ← 29`, s'està utilitzant una expressió senzilla. Les expressions també poden involucrar operacions, com en `edat ← edat + 1`, on `edat` és una variable que prèviament va rebre el valor 29 i ara s'ha incrementat el seu valor a 30.

Segons el resultat de cada expressió, es classifiquen en:

- **Numèriques**: Produeixen resultats numèrics.  
- **Alfanumèriques**: Produeixen resultats de tipus text.  
- **Booleanes o Lògiques**: Produeixen resultats Vertader o Fals.  

### 5.2.2 Operadors

Els operadors són símbols que indiquen una operació a realitzar entre operands.

Els operadors són fonamentals en les expressions, permetent realitzar càlculs, comparacions i manipulacions de dades.

Depenent del llenguatge de programació els operadors o la seua representació simbòlica poden variar.

En aquest cas s'utilitzarà pseudocodi per a representar els principals operadors.

A continuació es descriuen els tipus d'operadors més comuns:

- **Operadors d'Assignació:** `←` Serveix per a assignar un valor a una variable o constant (En la majoria de llenguatges s'usa el símbol `=`)
  > ***Exemple:***
  >
  > ```plaintext
  > edat ← 30
  > ```
  
  **Explicació**: S'assigna a la variable `edat` el valor `30`.

- **Operadors Aritmètics:** `+`, `-`, `*`, `/`, `MOD` Serveixen per a realitzar càlculs matemàtics.
  > ***Exemple:***
  >
  > ```plaintext
  > total ← preu * quantitat
  > ```
  
  **Explicació**: S'assigna a la variable `total` el valor del resultat de l'operació aritmètica de multiplicació dels valors de les variables `preu` i `quantitat`.

- **Operadors de Concatenació:** `&` Serveixen per a unir textos.
  > ***Exemple:***
  >
  > ```plaintext
  > missatge ← "Hola " & nom
  > ```
  
  **Explicació**: S'assigna a la variable `missatge` el valor del resultat de l'operació que concatena la paraula `Hola` amb el valor de la variable `nom`.
  
- **Operadors de Comparació:** `=`, `<>` (en alguns lleguatges '!'), `<`, `>`, `<=`, `>=` Serveixen per a comparar condicions i sempre retornen V (Vertader) o F (Fals).
  > ***Exemple:***
  >
  > ```plaintext
  > esValid ← edat ≥ 18
  > ```
  
  **Explicació**: S'assigna a la variable `esValid` el valor del resultat de l'operació de comparació que verifica si el valor de la variable `edat` és major o igual a `18`. Si és així retornarà V, en cas contrari retornarà F.

  > ***Exemple:***
  >
  > ```plaintext
  > color ← !blanc
  > ```
  
  **Explicació**: S'assigna a la variable `color` el valor del resultat de l'operació de negar la variable `color`. Qualsevol color retornarà V, i el blanc retornarà F.

- **Operadors Lògics:** `I`, `O`, `NO` Serveixen per a unir múltiples operadors condicionals. Per a conéixer el resultat dels operadors lògics es poden utilitzar les seues taules de veritat.

#### Taula de veritat

Les taules de veritat serveixen per a obtindre el valor de les operacions lògiques.

Cada operador lògic actua de manera diferent segons el valor o valors dels resultats de les operacions de comparació.

Al valor, resultat de cada operació de comparació, el cridarem **"Entrada"**

- **NO (Negació)**: Canvia el valor de l'entrada al seu oposat.

  | Entrada | NO Entrada |
  | ------- | ---------- |
  | V       | F          |
  | F       | V          |

  > ***Exemple:***
  >
  > ```plaintext
  > esValid ← NO(edat ≥ 18)
  > ```
  
  **Explicació**: S'assigna a la variable `esValid` el valor **contrari** al del resultat de l'operació de comparació que verifica si el valor de la variable `edat` és major o igual a `18`. Si l'edat és major o igual a `18` retornarà F, en cas contrari retornarà V.

- **O (Disjunció)**: Requereix que es complisca alguna de les entrades per a retornar vertader.

  | Entrada A | Entrada B | A O B |
  | --------- | --------- | ----- |
  | V         | V         | V     |
  | V         | F         | V     |
  | F         | V         | V     |
  | F         | F         | F     |

  > ***Exemple:***
  >
  > ```plaintext
  > esValid ← (edat ≥ 18) O (edat < 65)
  > ```
  
  **Explicació**:
  
  1. Es verifica el valor del resultat de l'operació de comparació que verifica si el valor de la variable `edat` és major o igual a `18` (Entrada A).
  2. Després es verifica el valor del resultat de l'operació de comparació que verifica si el valor de la variable `edat` és menor que `65` (Entrada B).
  3. Si el valor d'alguna de les dues entrades (A o B) és V, el valor de l'operació O serà V i s'assignarà a `esValid`.
  4. Si el valor de les dues entrades (A i B) és F, el valor de l'operació O serà F i s'assignarà a `esValid`.

- **I (Conjunció)**: Requereix que es complisquen totes les entrades per a retornar vertader.

  | Entrada A | Entrada B | A I B |
  | --------- | --------- | ----- |
  | V         | V         | V     |
  | V         | F         | F     |
  | F         | V         | F     |
  | F         | F         | F     |
  
  > ***Exemple:***
  >
  > ```plaintext
  > esValid ← (edat ≥ 18) I (ciutat = "València")
  > ```
  
  **Explicació**:
  
  1. Es verifica el valor del resultat de l'operació de comparació que verifica si el valor de la variable `edat` és major o igual a `18` (Entrada A).
  2. Després es verifica el valor del resultat de l'operació de comparació que verifica si el valor de la variable `ciutat` és `València` (Entrada B).
  3. Si el valor d'alguna de les dues entrades (A o B) és F, el valor de l'operació I serà F i s'assignarà a `esValid`.
  4. Si el valor de les dues entrades (A i B) és V, el valor de l'operació I serà V i s'assignarà a `esValid`.

### 5.2.3 Prioritat i direccionament d'operadors

Quan en una expressió apareixen moltes operacions diferents és necessari en quin ordre cal realitzar les operacions per a aconseguir el resultat correcte.

La següent taula mostra la prioritat i el direccionament en l'avaluació d'operadors:

| Operador                      | Prioritat     | Direccionament   |
| ----------------------------- | ------------- | ---------------- |
| Parèntesi `()`                | Molt Alta     | Intern primer    |
| Potència `^`                  | Alta          | Dreta a Esquerra |
| Multiplicació i Divisió `* /` | Mitjana       | Esquerra a Dreta |
| Suma i Resta `+ -`            | Mitjana       | Esquerra a Dreta |
| Concatenació `&`              | Mitjana-Baixa | Esquerra a Dreta |
| Relacionals `< <= > >= = <>`  | Baixa         | Esquerra a Dreta |
| Negació `NO`                  | Baixa         | Dreta a Esquerra |
| Conjunció `I`                 | Molt Baixa    | Esquerra a Dreta |
| Disjunció `O`                 | Molt Baixa    | Esquerra a Dreta |
| Assignació `←`                | Molt Baixa    | Dreta a Esquerra |

> ***Exemple:***
>
> ```plaintext
> resultat ← (3 + 5) * 2 ^ 3 / (4 - 1) & " text " & (5 > 3 I NO (4 = 5) O 6 <= 10)
> ```
>
> **Explicació del càlcul del resultat**:
>
> 1. Parèntesi ():
>    - (3 + 5) resulta en 8.
>    - (4 - 1) resulta en 3.
>    - (5 > 3 I NO (4 = 5) O 6 <= 10) és una expressió lògica que s'avaluarà més tard.
>
>     ```plaintext
>     resultat ← 8 * 2 ^ 3 / 3 & " text " & (5 > 3 I NO (4 = 5) O 6 <= 10)
>     ```
>
> 2. Potència ^:
>    - 2 ^ 3 resulta en 8.
>
>     ```plaintext
>     resultat ← 8 * 8 / 3 & " text " & (5 > 3 I NO (4 = 5) O 6 <= 10)
>     ```
>
> 3. Multiplicació i Divisió * /:
>    - 8 * 8 resulta en 64.
>    - 64 / 3 resulta en 21.33 (arrodonit a dos decimals).
>
>     ```plaintext
>     resultat ← 21.33 & " text " & (5 > 3 I NO (4 = 5) O 6 <= 10)
>     ```
>
> 4. Concatenació &:
>    - 21.33 & " text " resulta en "21.33 text ".
>
>     ```plaintext
>     resultat ← "21.33 text " & (5 > 3 I NO (4 = 5) O 6 <= 10)
>     ```
>
> 5. Relacionals < <= > >= = <>:
>    - 5 > 3 és Vertader.
>    - 4 = 5 és Fals.
>    - 6 <= 10 és Vertader.
>
>     ```plaintext
>     resultat ← "21.33 text " & (Vertader I NO Fals O Vertader)
>     ```
>
> 6. Negació NO:
>    - NO Fals és Vertader.
>
>     ```plaintext
>     resultat ← "21.33 text " & (Vertader I Vertader O Vertader)
>     ```
>
> 7. Conjunció I:
>    - Vertader I Vertader és Vertader.
>
>     ```plaintext
>     resultat ← "21.33 text " & (Vertader O Vertader)
>     ```
>
> 8. Disjunció O:
>    - Vertader O Vertader és Vertader.
>
>     ```plaintext
>     resultat ← "21.33 text " & Vertader
>     ```
>
> 9. Concatenació Final:
>    - "21.33 text " & Vertader resulta en "21.33 text Vertader".
>
>     ```plaintext
>     resultat ← "21.33 text Vertader"
>     ```
>
> 10. Assignació ←:
>
> - resultat ara conté el valor alfanumèric "21.33 text Vertader".

::: tip Conceptes clau per recordar
- **Dades**: Són la base de qualsevol programa, emmagatzemades en memòria.
- **Variables**: Dades que poden canviar durant l'execució del programa.
- **Constants**: Dades que romanen invariables durant l'execució del programa.
- **Expressions**: Combinacions de valors, variables i operadors que s'avaluen per a produir un nou valor.
- **Operadors**: Són símbols que indiquen una operació a realitzar entre operands.
- **Prioritat i direccionament d'operadors**: Determinen l'ordre en què s'avaluen les operacions en una expressió.
:::
