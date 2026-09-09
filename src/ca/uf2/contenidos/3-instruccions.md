# 3. Instruccions bàsiques

En el disseny d'algoritmes, les instruccions bàsiques són fonamentals per a estructurar com es processa la informació. Aquestes instruccions defineixen els elements clau que permeten que un algoritme funcione correctament.

Com s'ha vist en la UF1, els operadors poden variar depenent del llenguatge de programació. En aquest cas, els operadors que es representen en els diagrames de flux varien un poc respecte als de pseudocodi.

**Operadors en els diagrames de flux**:

- **Assignació**: `=`.
- **Concatenació** `+`.
- **Aritmètiques**: Suma `+`, resta `-`, multiplicació `*`, divisió `/`, mòdul `%`.
- **Relacionals**: Menor que `<`, menor o igual que `<=`, major que `>`, major o igual que `>=`, igual a `==`, diferent de `!=`.
- **Lògiques**: Negació `NOT`, conjunció `AND`, disjunció `OR`.

Recorda que els diagrames de flux utilitzen símbols específics com es va veure en el tema anterior. Alguns d'ells són els següents:

| ***Símbol***    | ***Funció***           |
|-----------------|------------------------|
| Òvals           | Inici i fi             |
| Rectangles      | Processos              |
| Paral·lelograms | Entrada/eixida         |
| Rombes          | Decisions              |
| Fletxes         | Indicar el flux        |

## 3.1 Instruccions d'inici i fi

Cada algoritme ha de tindre un punt d'**inici** i un punt de **fi** per a definir clarament el començament i el final del procés. Aquests punts són essencials per a assegurar que l'algoritme tinga un flux definit i siga fàcil de seguir.

- **INICI**: Marca el punt on l'algoritme comença a executar-se.
- **FI**: Indica el punt on l'algoritme acaba.

> ***Exemple: inici i fi***
>
> - **Dades d'entrada**: cap.
> - **Dada d'eixida**: cap.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
> FI
> ```
>
>== Diagrama de flux
>
> ```mermaid
>   graph TD
>     A((INICI)) --> B((Fİ))
>     classDef inici_fi fill:#ccc, color:#000;
>     class A,B inici_fi
> ```
>
>:::
> Aquest senzill exemple demostra com marcar els límits d'un algoritme, permetent que el flux d'execució siga clar i estructurat.

## 3.2 Instruccions de processament d'informació

Totes les accions que suposen una assignació d'un valor ja siga directe o a partir d'algun càlcul o modificació, es representen amb un **rectangle**.

Mentre que en pseudocodi s'utilitzava la fletxa `←` per a assignar un valor, en els diagrames de flux, s'utilitzarà l'igual `=`

> ***Exemple: conversió de quilòmetres a milles***
>
> - **Dades d'entrada**: Distància en quilòmetres (10).
> - **Dada d'eixida**: Distància en milles.
> - **Procediment**:
>
>:::tabs
> == Pseudocodi
>
> ```plaintext
> INICI
>   quilòmetres ← 10
>   milles ← quilòmetres * 0.621371
> FI
> ```
>
>== Diagrama de flux
>
> ```mermaid
>   graph TD
>     A((INICI)) --> B[quilòmetres = 10]
>     B --> C[milles = quilòmetres * 0.621371]
>     C --> D((Fİ))
>     classDef inici_fi fill:#ccc, color:#000;
>     classDef rectangle fill:#43BA43, color:white;
>     class A,D inici_fi
>     class B,C rectangle
> ```
>
>:::
>
> Aquest exemple il·lustra com es pot convertir una distància de quilòmetres a milles utilitzant una operació de multiplicació.

Si existeixen diversos elements consecutius del mateix tipus amb un flux lineal com en el següent exemple, es poden agrupar en un únic element.

> ***Exemple calcular el perímetre d'un triangle***
>
> - **Dades d'entrada**: Longituds dels costats del triangle (7, 5, 3).
> - **Dada d'eixida**: Perímetre del triangle.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
>   costat1 ← 7
>   costat2 ← 5
>   costat3 ← 3
>   perímetre ← costat1 + costat2 + costat3
> FI
> ```
>
>== Diagrama de flux (1)
>
> ```mermaid
>   graph TD
>     A((INICI)) --> B[costat1 = 7]
>     B --> C[costat2 = 5]
>     C --> D[costat3 = 3]
>     D --> E[perímetre = costat1 + costat2 + costat3]
>     E --> F((Fİ))
>     classDef inici_fi fill:#ccc, color:#000;
>     classDef rectangle fill:#43BA43, color:white;
>     class A,F inici_fi
>     class B,C,D,E rectangle
> ```
>
> ---
>
>== Diagrama de flux (2)
>
> ```mermaid
>   graph TD
>     A((INICI)) --> B[costat1 = 7 <br> costat2 = 5 <br> costat3 = 3 <br> perímetre = costat1 + costat2 + costat3]
>     B --> C((Fİ))
>     classDef inici_fi fill:#ccc, color:#000;
>     classDef rectangle fill:#43BA43, color:white;
>     class A,C inici_fi
>     class B rectangle
> ```
>
>:::
> Aquest exemple mostra com es realitza un càlcul simple utilitzant les longituds dels costats d'un triangle per a obtindre el seu perímetre.

## 3.3 Instruccions d'Entrada i Eixida d'Informació

L'entrada i eixida d'informació són essencials per a la interacció amb l'usuari. L'entrada es refereix a les dades que l'usuari proporciona al sistema, mentre que l'eixida és la informació que el sistema retorna a l'usuari.

**Dispositius comuns**:

- **Entrada**: Teclat, ratolí, micròfon.
- **Eixida**: Pantalla, impressora, altaveus.

En pseudocodi l'entrada i eixida es representen mitjançant les paraules **LLEGIR** i **ESCRIURE**, mentre que en els diagrames de flux es representa fent ús de **paral·lelograms**.

Aquests exemples mostren com es maneja l'entrada i eixida de dades per a permetre que els programes interactuen amb els usuaris i proporcionen resultats útils.

> ***Exemple: conversió d'hores a minuts***
>
> - **Dades d'entrada**: Nombre d'hores.
> - **Dada d'eixida**: Nombre de minuts.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
>   ESCRIURE "Introduïu el nombre d'hores:".
>   LLEGIR hores.
>   minuts ← hores * 60.
>   ESCRIURE minuts.
> FI
> ```
>
>== Diagrama de flux
>
> ```mermaid
>   graph TD
>     A((INICI)) --> B[/ESCRIURE "Introduïu el nombre d'hores:"/]
>     B --> C[/LLEGIR hores/]
>     C --> D[minuts = hores * 60]
>     D --> E[/"ESCRIURE minuts"/]
>     E --> F((Fİ))
>     classDef inici_fi fill:#ccc, color:#000;
>     classDef rectangle fill:#43BA43, color:white;
>     classDef romboide fill:#188CC4, color:white;
>     class A,F inici_fi
>     class D rectangle
>     class B,C,E romboide
> ```
>
>:::
> Aquest exemple il·lustra com es pot convertir una unitat de temps (hores) a una altra (minuts) utilitzant operacions d'entrada, processament i eixida.

> ***Exemple: càlcul de l'àrea d'un triangle***
>
> - **Dades d'entrada**: Base i altura del triangle.
> - **Dada d'eixida**: Àrea del triangle.
> - **Procediment**:
>
>::: tabs
>== Pseudocodi
>
> ```plaintext
> INICI
>   ESCRIURE "Introduïu la base del triangle:".
>   LLEGIR base.
>   ESCRIURE "Introduïu l'altura del triangle:".
>   LLEGIR altura.
>   area ← base * altura / 2.
>   ESCRIURE area.
> FI
> ```
>
>== Diagrama de flux
>
> ```mermaid
>   graph TD
>     A((INICI)) --> B[/ESCRIURE "Introduïu la base del triangle:"/]
>     B --> C[/LLEGIR base/]
>     C --> D[/ESCRIURE "Introduïu l'altura del triangle:"/]
>     D --> E[/LLEGIR altura/]
>     E --> F[area = base * altura / 2]
>     F --> G[/ESCRIURE area/]
>     G --> H((Fİ))
>     classDef inici_fi fill:#ccc, color:#000;
>     classDef rectangle fill:#43BA43, color:white;
>     classDef romboide fill:#188CC4, color:white;
>     class A,H inici_fi
>     class F rectangle
>     class B,C,D,E,G romboide
> ```
>
>:::
> Aquest exemple demostra com es poden utilitzar instruccions d'entrada per a obtindre dades de l'usuari i d'eixida per a mostrar el resultat del càlcul.

::: tip Conceptes clau per recordar
- **Inici i fi**: Marquen els límits d'un algoritme.
- **Processament**: Assignació de valors i càlculs.
- **Entrada i eixida**: Interacció amb l'usuari mitjançant dispositius d'entrada i eixida.
- **Dispositius d'entrada i eixida**: Teclat, ratolí, pantalla, impressora.
- **Paral·lelograms**: S'utilitzen per a representar operacions d'entrada i eixida en diagrames de flux.
:::