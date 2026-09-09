# Exemples de recursivitat

## Càlcul de factorial

El factorial d'un nombre enter n, representat com a n!, es defineix com el producte de tots els nombres enters des d'1 fins a n. Per exemple: 5! = 1 x 2 x 3 x 4 x 5 = 120

:::: tabs
=== Java

::: tabs
== Versió iterativa

```java
public static int factorial(int n) {
    int factorial = 1;
    for(int i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial; 
}
```

== Versió recursiva

```java
public static int factorial(int n) {
    if (n == 1) {
        return 1; 
    } else {
        return n * factorial(n-1);
    }
}
```

:::
::::

**Solució iterativa:**

- S'usa un bucle for per a iterar des d'1 fins a n, calculant el producte en cada pas.

**Solució recursiva:**

- Cas base: Si n és igual a 1, es retorna 1 (el factorial d'1 és 1).
- Cas general: Es fa una anomenada recursiva calculant el factorial de n-1 i es multiplica eixe resultat per n.

    Per exemple, per a calcular 5! es té:
  1. factorial(4) crida a factorial(3)
  2. factorial(3) crida a factorial(2)
  3. factorial(2) crida a factorial(1) ---> retorna 1
  4. factorial(2) retorna 1 * 2 = 2
  5. factorial(3) retorna 2 * 3 = 6
  6. factorial(4) retorna 6 * 4 = 24
  7. factorial(5) retorna 24 * 5 = 120

## Serie de Fibonacci

La sèrie de Fibonacci comença amb els números 0 i 1, i cada número següent és la suma dels dos números anteriors. Per exemple: 0, 1, 1, 2, 3, 5, 8, 13, 21...

Formalment, es defineix com:  
F(0) = 0  
F(1) = 1  
F(n) = F(n-1) + F(n-2)

:::: tabs
=== Java

::: tabs
== Versió iterativa

```java
public static int fibonacci(int n) {
    if (n <= 1)
        return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int tmp = b;
        b = a + b; 
        a = tmp;
    }
    return b;
}
```

== Versió recursiva

```java
// Versió recursiva
public static int fibonacci(int n) {
    if (n <= 1) 
        return n;
    return fibonacci(n-1) + fibonacci(n-2); 
}
```

:::
::::

**Solució iterativa:**

- Inicialitza dues variables amb els valors 0 i 1.
- Usa un bucle per a anar calculant i desplaçant els valors.

**Solució recursiva:**

- Casos base: `F(0) = 0` i `F(1) = 1`
- Cas general: Suma els dos números anteriors cridant recursivament a la funció.

## Suma de dígits

Donat un nombre enter n, hem de calcular la suma dels seus dígits individuals.

Per exemple: si n = 5324, la suma dels seus dígits és 5 + 3 + 2 + 4 = 14.

:::: tabs
=== Java

::: tabs
== Versió iterativa

```java
public static int sumaDigits(int x) {
    int suma = 0;
    while (x > 0) {
        suma += x % 10;
        x /= 10;
    } 
    return suma;
}
```

== Versió recursiva

```java
// Versió recursiva
public static int sumaDigits(int x) {
    if (x < 10)
        return x;
    return x % 10 + sumaDigits(x / 10); 
}
```

:::
::::

**Solució iterativa:**

- Bucle while per a anar extraient i sumant cada dígit en cada iteració.
- Es divideix entre 10 en cada pas per a eliminar el dígit ja processat.

**Solució recursiva:**

- Case base: Si n < 10, es retorna n (un sol dígit).
- Cas general:
  1. S'extrau el dígit menys significatiu amb el mòdul (%)
  2. Es divideix entre 10 per a eliminar eixe dígit
  3. Se suma el dígit extret amb una anomenada recursiva a la resta del número

## Torres de Hanoi

El problema consisteix a moure n discos d'un pilar origen a un pilar destine, passant per un pilar auxiliar, subjecte a estes restriccions:

- Només es pot moure un disc alhora.
- Mai es pot col·locar un disc major sobre un menor.

:::: tabs
=== Java

::: tabs
== Solució iterativa

No te versió iterativa senzilla.

== Solució recursiva

```java
// Versió recursiva
public static void hanoi(int n, char origen, char aux, char desti) {
    if (n == 1) 
        mover(origen, desti); 
    else {
        hanoi(n-1, origen, desti, aux);
        mover(origen, desti); 
        hanoi(n-1, aux, origen, desti);
    }
}

```

:::
::::

**Solució recursiva:**

- Cas base: Si hi ha només 1 disc, es mou directament.
- Cas general:
  1. Moure n-1 discos de l'origen a l'auxiliar (recursivament)
  2. Moure el disc més gran al destí
  3. Moure els n-1 discos sobre ell, de l'auxiliar al destí (recursivament)