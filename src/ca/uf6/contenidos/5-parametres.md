# 5. Paràmetres: pas per valor i per referència

En la majoria de llenguatges de programació existeixen dos modes generals d'enviar informació a una funció mitjançant paràmetres: el pas per valor i el pas per referència. És fonamental entendre'n la diferència perquè condiciona com es comporten les variables quan són modificades dins de la funció.

- **Pas per valor**: Quan un paràmetre s'envia per valor, el llenguatge crea una còpia del valor original i l'assigna a la variable local que rep la funció. D'aquesta manera, si dins de la funció es modifica aquesta variable local, no s'alterarà la variable externa amb què es va cridar. Normalment, s'utilitza en els tipus simples (primitius), com ara `int`, `double`, `boolean`, `char`, etc.

  :::: tabs
  === Java

  ::: tabs
  == Codi

  ```java
  public static void main(String[] args) { 
    int a = 10;
    System.out.println("Valor inicial de a: " + a); // a val 10 
    imprimeix_doble(a); // Se li passa el 10 a la funció 
    System.out.println("Valor final de a: " + a); // a continua valent 10
  }

  // El paràmetre ‘a' és independent de la ‘a' del main. Són variables diferents!
  public static void imprimeix_doble(int a) {
    // Es copia el valor 10 a aquesta nova ‘a'
    a = 2 * a; // Es duplica el valor de la ‘a' d'aquesta funció, no afecta fora
    System.out.println("Valor d'en la funció: " + a); // ‘a' val 20
  }
  ```

  == Eixida

  ```plaintext
  Valor inicial de a: 10
  Valor de a en la función: 20
  Valor final de a: 10
  ```

  :::
  ::::

- **Pas per referència**: Quan es passen estructures com llistes, vectors, objectes o altres entitats complexes a una funció, el que realment s'està passant és una referència a l'element original (no una còpia). Això vol dir que, si es modifica aquest paràmetre dins de la funció, també es modifica fora, ja que ambdós fan referència a la mateixa ubicació de memòria.

  :::: tabs
  === Java

  ::: tabs
  == Codi

  ```java
  // Summa x a tots els elements del vector v
  public static void summa_x_a el_vector(int v[], int x) { 
    for (int i = 0; i< v.length; i++)
    v[i] = v[i] + x;
  }

  public static void main(String[] args) { 
    int v[] = {0, 1, 2, 3};
    System.out.println("Vector abans: " + Arrays.toString(v)); 
    summa_x_a el_vector(v, 10);
    System.out.println("Vector després: " + Arrays.toString(v));
  }
  ```

  == Eixida

  ```plaintext
  Vector antes: [0, 1, 2, 3]
  Vector después: [10, 11, 12, 13]
  ```

  :::
  ::::

::: tip IMPORTANT

Com un paràmetre de tipus objecte és una referència a l'objecte String o Array que està fora d'ella,si se li assigna un altre objecte es perd la referència i ja no es pot accedir a l'objecte fora de la funció. Encara que Java permet fer-ho, no s'aconsella fer-ho.

::: tabs
== Java

```java
// Assignem a x un nou vector, per la qual cosa x deixarà d'apuntar al vector original.
// El vector original no canvia! Simplement ja no podem accedir a ell des de x
// perquè s'ha perdut la referència a aquest objecte.
public static void funcion1(int x[]) {
  x = new int[10]; // x apuntarà a un nou vector, l'original queda intacte
  // el que fem ací amb x no afectarà el vector original
}
// El mateix succeeix en aquest exemple, perdem la referència al String original
public static void funcion2(String x) {
  x = "Hola"; // x apuntarà a un nou String, l'original queda intacte
  // el que fem ací amb x no afectarà el String original
}
```

:::
