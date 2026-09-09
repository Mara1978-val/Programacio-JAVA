# 3. Tipus de dades

En els llenguatges de programació existeixen dos tipus principals de dades:

- ***Tipus de dades simples***: Ens permeten crear variables que emmagatzemen un sol valor. Per exemple per a un comptador, edat, preu, etc. Són els que més utilitzarem ara com ara.
- ***Tipus de dades compostes***: Estructures de dades més complexes que permeten emmagatzemar moltes dades (vectors, objectes, etc.). Les veurem en futures unitats.

Els tipus de dades simples més comuns són:

- Per a nombres enters: diferents precisions (8, 16, 32, 64 bits)
- Per a nombres reals: precisió simple i doble
- Per a caràcters: representació de text individual
- Per a valors lògics: verdader o fals

::: tabs
== Java

| Tipus   | Descripció                                     | Memòria ocupada | Rang de valors permesos                         |
|---------|------------------------------------------------|-----------------|-------------------------------------------------|
| byte    | Nombre enter d'1 byte                          | 1 byte          | -128 … 127                                      |
| short   | Nombre enter curt                              | 2 bytes         | -32768 … 32767                                  |
| int     | Nombre enter                                   | 4 bytes         | -2147483648 … 2147483647                        |
| long    | Nombre enter llarg                             | 8 bytes         | -9223372036854775808 … 9223372036854775807      |
| float   | Nombre real amb coma flotant de precisió simple| 32 bits         | ±3,4\*10⁻³⁸ … ±3,4\*10³⁸                        |
| double  | Nombre real amb coma flotant de precisió doble | 64 bits         | ±1,7\*10⁻³⁰⁸ … ±1,7\*10³⁰⁸                      |
| char    | Un sol caràcter                                | 2 bytes         |                                                 |
| boolean | Valor lògic                                    | 1 bit           | true o false                                    |

:::

::: tip **IMPORTANT!**

Alguns llenguatges de programació **no realitzen comprovació dels rangs**. És a dir, si a una variable amb el valor màxim se li suma 1, sorprenentment el resultat pot ser el valor mínim negatiu (no produeix un error de tipus desbordament, sinó que **es comporta de manera cíclica**).

:::

Existeix un **<u>tipus de dada composta</u>** anomenada **cadena de text** o **string** que convé conéixer ja que permet representar text. Més endavant veurem com s'utilitza.