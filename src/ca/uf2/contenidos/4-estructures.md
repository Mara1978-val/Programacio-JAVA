# 4. Estructures de control

Fins ara, hem treballat amb algoritmes on les instruccions s'executen de manera seqüencial, és a dir, una darrere l'altra en un ordre específic. No obstant això, en molts casos, és necessari que el flux del programa puga canviar depenent de certes condicions. Per a gestionar aquest tipus de control, s'utilitzen les **estructures de control**.

Les estructures de control permeten modificar el flux d'execució d'un algoritme. Existeixen dos tipus principals d'estructures de control:

1. **Estructures Alternatives**: Permeten seleccionar diferents conjunts d'instruccions basades en una condició. Aquestes poden ser simples, dobles o múltiples.
2. **Estructures Repetitives**: Permeten executar instruccions repetidament. (Aquest tema es cobrirà en la pròxima unitat).

En aquesta unitat, ens enfocarem en les estructures alternatives.

## 4.1 Estructures Alternatives

Les estructures alternatives permeten que l'algoritme trie entre diferents camins d'execució depenent de si es compleix una condició determinada. Això és útil per a prendre decisions dins del programa i realitzar diferents accions basades en l'estat del sistema o les dades d'entrada.

### 4.1.1 Estructura Alternativa Simple

L'**estructura alternativa simple** s'utilitza quan hi ha una única condició que determina si s'han d'executar certes instruccions o no. Si la condició és vertadera, s'executen les instruccions associades. Si la condició és falsa, s'ometen.

> ***Exemple: Aplicació de descompte en una botiga***
>
> Imaginem un programa que determina si una persona pot rebre un descompte en una botiga. Si la persona té una targeta de fidelitat, s'aplica un descompte del 10% en la compra. Si no té la targeta, no s'aplica cap descompte.
>
> - **Dades d'entrada**: Informació sobre el cost total de la compra i si el client té una targeta de fidelitat.
> - **Dada d'eixida**: Cost total aplicant o no el descompte.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
>   ESCRIURE "Doneu-me el cost total de la compra:".
>   LLEGIR total.
>   ESCRIURE "Teniu una targeta de fidelitat? Sí (S), No (N):".
>   LLEGIR resposta.
>   Si resposta = "S":
>     - total ← total - (total * 0,1).
>   FI SI
>   ESCRIURE total.
> FI
> ```
>
>== Diagrama de flux
>
>```mermaid
>graph TD
>    A((Inici)) --> B[/ESCRIURE "Doneu-me el cost total de la compra:"/]
>    B --> C[/LLEGIR total/]
>    C --> D[/"ESCRIURE 'Teniu una targeta de fidelitat? Sí (S), No (N):'"/]
>    D --> E[/LLEGIR resposta/]
>    E --> F{resposta = 'S'?}
>    F -- Sí --> G["total = total - (total * 0,1)"]
>    F -- No --> I
>    G --> I[/ESCRIURE total/]
>    I --> J((Fi))
>
>    classDef romboide fill:#188CC4, color:white;
>    classDef rombo fill:#A08DB1, color:white;
>    classDef rectangle fill:#43BA43, color:white;
>    classDef inici_fi fill:#ccc, color:#000;
>    class B,C,D,E,I romboide
>    class G,H rectangle
>    class F,K rombo
>    class A,J inici_fi
>```
>
>:::
> Aquest exemple mostra com una estructura alternativa simple pot usar-se per a decidir si s'aplica un descompte basat en una condició específica.

### 4.1.2 Estructura Alternativa Doble

L'**estructura alternativa doble** permet executar diferents conjunts d'instruccions basades en si una condició és vertadera o falsa. És una forma més avançada de l'estructura simple, ja que permet manejar dos escenaris oposats.

> ***Exemple: Aplicació de descompte en una botiga***
>
> Imaginem un programa que determina quin descompte pot rebre una persona en una botiga en rebaixes. Si la persona té una targeta de fidelitat, s'aplica un descompte del 20% en la compra. Si no té la targeta, s'aplicarà un descompte del 10%.
>
> - **Dades d'entrada**: Informació sobre el cost total de la compra i si el client té una targeta de fidelitat.
> - **Dada d'eixida**: Cost total aplicant o no el descompte.
> - **Procediment**:
>
>::: tabs
>==Pseudocodi
>
> ```plaintext
> INICI
>   ESCRIURE "Doneu-me el cost total de la compra:".
>   LLEGIR total.
>   ESCRIURE "Teniu una targeta de fidelitat? Sí (S), No (N):".
>   LLEGIR resposta.
>   SI resposta = "S":
>     - total ← total - (total * 0,2).
>   SINÓ:
>     - total ← total - (total * 0,1).
>   FI SI
>   ESCRIURE total.
> FI
> ```
>
>== Diagrama de flux
>
>```mermaid
>graph TD
>    A((Inici)) --> B[/ESCRIURE "Doneu-me el cost total de la compra:"/]
>    B --> C[/LLEGIR total/]
>    C --> D[/"ESCRIURE 'Teniu una targeta de fidelitat? Sí (S), No (N):'"/]
>    D --> E[/LLEGIR resposta/]
>    E --> F{resposta = 'S'?}
>    F -- Sí --> G["total = total - (total * 0,2)"]
>    F -- No --> H["total = total - (total * 0,1)"]
>    G --> I[/ESCRIURE total/]
>    H --> I
>    I --> J((Fi))
>
>    classDef romboide fill:#188CC4, color:white;
>    classDef rombo fill:#A08DB1, color:white;
>    classDef rectangle fill:#43BA43, color:white;
>    classDef inici_fi fill:#ccc, color:#000;
>    class B,C,D,E,I romboide
>    class G,H rectangle
>    class F,K rombo
>    class A,J inici_fi
>```
>
>:::
> Aquest exemple il·lustra com una estructura alternativa doble pot manejar dos escenaris diferents basats en una condició.

### 4.1.3 Concatenació de sentències condicionals

En moltes ocasions és possible trobar-nos amb algoritmes que compten amb múltiples condicions consecutives.

> ***Exemple: classificació d'empleats***
>
> Imaginem un programa que classifica el nivell d'un empleat basat en tres puntuacions d'avaluació anual. Depenent del rang de la puntuació, l'empleat pot ser classificat com a "Satisfactori", "Bo" o "Excel·lent".
>
> - **Dades d'entrada**: Puntuacions d'avaluació de l'empleat.
> - **Dada d'eixida**: Classificació de l'empleat.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
>   ESCRIURE "Doneu-me la puntuació 1:".
>   LLEGIR p1.
>   ESCRIURE "Doneu-me la puntuació 2:".
>   LLEGIR p2.
>   ESCRIURE "Doneu-me la puntuació 3:".
>   LLEGIR p3.
>   puntuació ← p1 + p2 + p3
>   Si la puntuació és >= 90:
>     - ESCRIURE  "Excel·lent".
>   Si la puntuació està entre 70 i 89:
>     - ESCRIURE  "Bo".
>   Si la puntuació és < 70:
>     - ESCRIURE  "Satisfactori".
>   Si la puntuació no coincideix amb cap dels rangs esperats:
>     - ESCRIURE  "Puntuació no vàlida".
> FI
> ```
>
>== Diagrama de flux
>
>```mermaid
>graph TD
>    A((INICI)) --> B[/ESCRIURE "Doneu-me la puntuació 1:"/]
>    B --> C[/LLEGIR p1/]
>    C --> D[/ESCRIURE "Doneu-me la puntuació 2:"/]
>    D --> E[/LLEGIR p2/]
>    E --> F[/ESCRIURE "Doneu-me la puntuació 3:"/]
>    F --> G[/LLEGIR p3/]
>    G --> H[puntuació = p1 + p2 + p3]
>    H --> I{puntuació >= 90?}
>    I -- Sí --> J[/ESCRIURE "Excel·lent"/]
>    I -- No --> K{puntuació entre 70 i 89?}
>    K -- Sí --> L[/ESCRIURE "Bo"/]
>    K -- No --> M{puntuació < 70?}
>    M -- Sí --> N[/ESCRIURE "Satisfactori"/]
>    M -- No --> O[/ESCRIURE "Puntuació no vàlida"/]
>    J --> P((FI))
>    L --> P
>    N --> P
>    O --> P
>
>    classDef romboide fill:#188CC4, color:white;
>    classDef rombo fill:#A08DB1, color:white; 
>    classDef rectangle fill:#43BA43, color:white; 
>    classDef inici_fi fill:#ccc, color:#000;
>
>    class A,P inici_fi;
>    class B,C,D,E,F,G,J,L,N,O romboide;
>    class H rectangle;
>    class I,K,M rombo;
>```
>
>:::
> Aquest exemple demostra com manejar diversos escenaris basats en diferents rangs de valors.

### 4.1.4 Estructura Alternativa Múltiple

L'**estructura alternativa múltiple** permet que s'executen diferents conjunts d'instruccions basades en el valor d'una expressió, no sols en una condició booleana. Cada valor específic de l'expressió té un conjunt d'instruccions associat.

> ***Exemple: Premi de carrera***
>
> Imaginem un programa que premia a un corredor depenent del lloc obtingut en la carrera. El premi s'obté a partir del 5è lloc i es premia amb 10.000€ al 5è, 12.000€ al 4t, 15.000€ al 3r, 17.500€ al 2n i 20.000€ al 1r. La resta de posicions no obtenen premi per la qual cosa obtindran 0€.
>
> - **Dades d'entrada**: Posició en la carrera.
> - **Dada d'eixida**: Premi obtingut.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
>   ESCRIURE "Doneu-me la posició:".
>   LLEGIR posició.
>   switch (posició):
>     cas 1:
>       premi ← 20000.
>     cas 2:
>       premi ← 17500.
>     cas 3:
>       premi ← 15000.
>     cas 4:
>       premi ← 12000.
>     cas 5:
>       premi ← 10000.
>     default:
>       premi ← 0.
>   ESCRIURE "El premi obtingut és: " & premi.
> FI
> ```
>
>== Diagrama de flux
>
>```mermaid
>   graph TD
>       A((INICI)) --> B[/ESCRIURE "Doneu-me la posició:"/]
>       B --> C[/LLEGIR posició/]
>       C --> D{posició?}
>       D -- 1 --> E[premi = 20000]
>       D -- 2 --> F[premi = 17500]
>       D -- 3 --> G[premi = 15000]
>       D -- 4 --> H[premi = 12000]
>       D -- 5 --> I[premi = 10000]
>       D -- altre --> J[premi = 0]
>       E --> K[/ESCRIURE "El premi obtingut és: " + premi/]
>       F --> K
>       G --> K
>       H --> K
>       I --> K
>       J --> K
>       K --> L((FI))
>   
>       classDef romboide fill:#188CC4, color:white;
>       classDef rombo fill:#A08DB1, color:white; 
>       classDef rectangle fill:#43BA43, color:white; 
>       classDef inici_fi fill:#ccc, color:#000;
>   
>       class A,L inici_fi;
>       class B,C,K romboide;
>       class E,F,G,H,I,J rectangle;
>       class D rombo;
>```
>
>:::
> Aquest exemple demostra com una estructura alternativa múltiple pot manejar diversos escenaris basats en diferents valors concrets.

## 4.2 Estructures Repetitives

Les estructures repetitives o bucles permeten repetir una seqüència d'instruccions múltiples vegades fins que es complisca una condició determinada. Això és extremadament útil per a tasques que necessiten ser executades repetidament, com processar elements d'una llista, realitzar càlculs fins a aconseguir un resultat desitjat, o interactuar amb l'usuari de manera contínua.

### 4.2.1 Estructura Mentre (WHILE)

L'estructura **Mentre** (WHILE) s'utilitza per a repetir un bloc d'instruccions mentre es complisca una condició específica. La condició s'avalua abans de cada iteració del bucle, per la qual cosa si la condició mai es torna falsa, el bucle pot continuar indefinidament, la qual cosa es denomina bucle infinit.

```plaintext
MENTRE Condició
    Instrucció 1
    Instrucció 2
    ...
    Instrucció N
FI MENTRE
```

> ***Exemple: compte enrere***
>
> Suposem que volem comptar cap avall des d'un nombre donat fins a arribar a 0. L'algoritme s'executarà mentre el nombre siga major que 0.
>
> - **Dades d'entrada**: Nombre de segons.
> - **Dada d'eixida**: Seqüència de nombres en compte enrere.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
>   ESCRIURE "Introduïu nombre de segons:".
>   LLEGIR segons.
>   MENTRE segons >= 0:
>     - ESCRIURE segons
>     - segons ← segons - 1.
>   FI MENTRE
> FI
> ```
>
>== Diagrama de flux
>
>```mermaid
>graph TD
>    A((INICI)) --> B[/ESCRIURE "Introduïu nombre de segons:"/]
>    B --> C[/LLEGIR segons/]
>    C --> D{segons >= 0?}
>    D -- Sí --> E[/ESCRIURE segons/]
>    E --> F[segons = segons - 1]
>    F --> D
>    D -- No --> G((FI))
>
>    classDef romboide fill:#188CC4, color:white;
>    classDef rombo fill:#A08DB1, color:white; 
>    classDef rectangle fill:#43BA43, color:white; 
>    classDef inici_fi fill:#ccc, color:#000;
>
>    class A,G inici_fi;
>    class B,C,E romboide;
>    class F rectangle;
>    class D rombo;
>
>```
>
>:::
> Aquest exemple mostra com es pot utilitzar un bucle WHILE per a realitzar un compte enrere des d'un nombre donat fins a arribar a 0.

## 4.2.2 Estructura Fins (DO-WHILE)

L'estructura **Fins** (DO-WHILE) garanteix que el bloc d'instruccions s'execute almenys una vegada abans d'avaluar la condició. La condició es revisa després de l'execució del bloc, cosa que assegura que el bloc s'execute almenys una vegada encara que la condició siga falsa en la primera avaluació.

```plaintext
REPETIR
    Instrucció 1
    Instrucció 2
    ...
    Instrucció N
MENTRE Condició
```

> ***Exemple: sol·licitar número positiu***
>
> Imaginem un programa que sol·licita a l'usuari introduir un número positiu. El programa ha de continuar demanant un número fins que l'usuari introduïsca un número positiu.
>
> - **Dades d'entrada**: Números introduïts per l'usuari.
> - **Dada d'eixida**: Número positiu introduït.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
>   REPETIR
>      - ESCRIURE "Introduïx un número positiu:".
>      - LLEGIR numero.
>   MENTRE numero <= 0
>   ESCRIURE "El teu número positiu és: " & numero
> FI
> ```
>
>== Diagrama de flux
>
>```mermaid
>graph TD
>    A((INICI)) --> B[/ESCRIURE "Introduïx un número positiu:"/]
>    B --> C[/LLEGIR numero/]
>    C --> D{numero <= 0?}
>    D -- Sí --> B
>    D -- No --> E[/ESCRIURE "El teu número positiu és: " + numero/]
>    E --> F((FI))
>
>    classDef romboide fill:#188CC4, color:white;
>    classDef rombo fill:#A08DB1, color:white; 
>    classDef rectangle fill:#43BA43, color:white; 
>    classDef inici_fi fill:#ccc, color:#000;
>
>    class A,F inici_fi;
>    class B,C,E romboide;
>    class D rombo;
>
>```
>
>:::
> Aquest exemple il·lustra com es pot utilitzar un bucle DO-WHILE per assegurar que l'usuari introduïsca un número positiu, repetint la sol·licitud fins que es complisca la condició.

## 4.2.3 Estructura Per a (FOR)

L'estructura **Per a** (FOR) s'usa quan es coneix de bestreta el nombre d'iteracions que s'han de realitzar. Aquesta estructura és útil per a repetir un bloc d'instruccions un nombre específic de vegades, amb una variable comptadora que s'actualitza en cada iteració.

**Característiques del bucle FOR**:

1. La variable comptadora s'inicialitza amb un valor inicial.
2. La condició del bucle s'avalua comparant la variable comptadora amb un valor final.
3. En cada iteració, la variable comptadora s'incrementa en un valor específic.

```plaintext
PER A Var_Comp DE ValorInicial A ValorFinal AMB INCREMENT = n
    Instrucció 1
    Instrucció 2
    ...
    Instrucció N
FI PER A
```

> ***Exemple: imprimir números del 1 al 5***
>
> Suposem que volem imprimir els números de l'1 al 5. Utilitzem un bucle FOR per iterar des de l'1 fins al 5.
>
> - **Dades d'entrada**: Cap.
> - **Dada d'eixida**: Números de l'1 al 5.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
>   PER A i DE 1 A 5 AMB INCREMENT = 1
>     - ESCRIURE i
>   FI PER A
> FI
> ```
>
>
>== Diagrama de flux
>
>```mermaid
> graph TD
>     A((INICI)) --> B[i = 1]
>     B --> C{i <= 5?}
>     C -- Sí --> D[/ESCRIURE i/]
>     D --> E[i = i + 1]
>     E --> C
>     C -- No --> F((FI))
> 
>     classDef romboide fill:#188CC4, color:white;
>     classDef rombo fill:#A08DB1, color:white; 
>     classDef rectangle fill:#43BA43, color:white; 
>     classDef inici_fi fill:#ccc, color:#000;
> 
>     class A,F inici_fi;
>     class D romboide;
>     class B,E rectangle;
>     class C rombo;
>```
>
>:::
>
> **Explicació**:
>
> 1. S'inicialitza la variable `i` en 1.
> 2. S'imprimeix el valor de `i`.
> 3. S'incrementa `i` en 1 i el procés es repeteix fins que `i` siga 6.
>
> Aquest exemple demostra com es pot utilitzar un bucle FOR per imprimir una seqüència de números, en aquest cas, de l'1 al 5.

## 4.3 Elements auxiliars

Els **elements auxiliars** són variables que compleixen funcions específiques dins d'un programa. S'utilitzen freqüentment per a realitzar tasques com comptar o acumular valors.

L'ús d'elements auxiliars com comptadors, acumuladors i interruptors pot facilitar el seguiment i control de l'estat dins dels bucles, permetent realitzar càlculs acumulatius, controlar el nombre d'iteracions i gestionar condicions de manera més estructurada.

### 4.3.1 Comptadors

Un **comptador** és una variable que s'utilitza per comptar el nombre de vegades que es repeteix una acció. Normalment s'inicialitza a zero i s'incrementa en cada iteració.

### 4.3.2 Acumuladors

Un **acumulador** és una variable que s'utilitza per sumar (o multiplicar) un conjunt de valors. S'inicialitza en 0 per a sumes i en 1 per a multiplicacions.

### 4.3.3 Interruptors

Un **interruptor** és una variable booleana que s'utilitza per realitzar certes accions mentre el seu valor siga veritable o fals.

### 4.3.4 Exemple

En el següent exemple es pot veure l'ús dels diferents elements auxiliars descrits anteriorment:

> ***Exemple: Introduir dades d'estudiants i calcular la seua mitjana.***
>
> Suposem que volem dissenyar un algoritme que permeta a l'usuari introduir les notes d'un estudiant i calcular la mitjana d'aquestes notes fins que l'usuari decidisca acabar.
>
> - **Dades d'entrada**: Notes introduïdes per l'usuari.
> - **Dada d'eixida**: Mitjana de les notes.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
>   acumulador = 0
>   comptador = 0
>   REPETIR
>      - ESCRIURE "Introduïx una nota:".
>      - LLEGIR nota
>      - acumulador ← acumulador + nota
>      - comptador ← comptador + 1
>      - ESCRIURE "¿Introduir més notes? (s/n)"
>      - LLEGIR seguir
>   MENTRE (seguir = "s") o (seguir = "S")
>   SI comptador > 0
>      - mitjana ← acumulador / comptador
>      - ESCRIURE "La mitjana és: " & mitjana
>   SI NO
>      - ESCRIURE "No es van introduir notes."
>   FI SI
> FI
> ```
>
>== Diagrama de flux
>
>```mermaid
> graph TD
>     A((INICI)) --> B[acumulador = 0]
>     B --> C[comptador = 0]
>     C --> D[/ESCRIURE "Introduïx una nota:"/]
>     D --> E[/LLEGIR nota/]
>     E --> F[acumulador = acumulador + nota]
>     F --> G[comptador = comptador + 1]
>     G --> H[/"ESCRIURE '¿Introduir més notes? (s/n)'"/]
>     H --> I[/LLEGIR seguir/]
>     I --> J{seguir és 's' o 'S'?}
>     J -- Sí --> D
>     J -- No --> K{comptador > 0?}
>     K -- Sí --> L[mitjana = acumulador / comptador]
>     L --> M[/ESCRIURE "La mitjana és: " + mitjana/]
>     M --> N((FI))
>     K -- No --> O[/ESCRIURE "No es van introduir notes."/]
>     O --> N
> 
>     classDef romboide fill:#188CC4, color:white;
>     classDef rombo fill:#A08DB1, color:white; 
>     classDef rectangle fill:#43BA43, color:white; 
>     classDef inici_fi fill:#ccc, color:#000;
> 
>     class A,N inici_fi;
>     class D,E,H,I,M,O romboide;
>     class B,C,F,G,L rectangle;
>     class J,K rombo;
>```
>
>:::
>
> - Aquest exemple demostra com es pot utilitzar un comptador per portar un registre del nombre de vegades que s'ha complit la condició desitjada, d'aquesta manera podrà calcular la mitjana de notes.
> - A més, compta amb un acumulador que anirà sumant les notes de l'alumne concret.
> - Finalment, la variable seguir funcionarà com a interruptor per parar d'introduir notes i continuar amb el programa.

::: tip Conceptes clau per recordar
- Les **estructures de control** permeten modificar el flux d'execució d'un algoritme.
- Les **estructures alternatives** permeten prendre decisions dins del programa i executar diferents accions basades en l'estat del sistema o les dades d'entrada.
- Les **estructures repetitives** permeten repetir un bloc d'instruccions múltiples vegades fins que es complisca una condició determinada.
- Els **elements auxiliars** com comptadors, acumuladors i interruptors faciliten el seguiment i control de l'estat dins dels bucles.
:::