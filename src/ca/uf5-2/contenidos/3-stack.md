# 3. La Pila (Stack)

Una **pila (Stack)** és una estructura de dades comuna en programació que emmagatzema els elements seguint l’ordre **LIFO (Last In, First Out)**, és a dir, **l’últim que entra és el primer que ix**.

## Concepte general
- Una **pila** funciona com una pila de plats: sempre es posa un damunt de l’altre, i només pots traure l’últim que has posat.  
- És molt útil per:
  - Desfer accions (com “Ctrl + Z” en un editor).  
  - Recórrer estructures recursives.  
  - Guardar passos o estats temporals.  

## Operacions bàsiques (aplicables a qualsevol llenguatge)

| Operació | Descripció | 
|-----------|-------------|
| **push** | Afig un element al final (cima) de la pila | 
| **pop** | Lleva i retorna l’últim element | 
| **peek / top** | Mostra l’últim element sense llevar-lo |
| **isEmpty** | Comprova si la pila està buida | 

---

## Exemples

Podem crear una pila per a emmagatzemar números:

::: tabs
== Java

```java
Stack<Integer> pila = new Stack<>();
```

:::

Ací declarem una Stack d’enters (Integer).

Per a afegir dades a la pila fem servir el mètode push:

::: tabs 
== Java

``` Java
pila.push(10);
pila.push(20);
pila.push(30);
```
:::

Ara la pila conté els elements [10, 20, 30], on 30 és l’últim que hem afegit.

Traem un element: lleva i retorna l’últim afegit:

::: tabs 
== Java

  ``` Java
  int ultim = pila.pop(); // ultim = 30
  ```

:::

També podem mirar l’últim element sense llevar-lo:

::: tabs 
== Java

  ``` Java
  int cima = pila.peek(); // cima = 20
  ```
:::

El exemple complet podria ser el següent:

::: tabs 
== Java

  ``` Java
  // Importem la llibreria per a poder utilitzar Stack
  import java.util.Stack;

  public class ExempleStack {
    public static void main(String[] args) {

      // Creem la pila
      Stack<Integer> pila = new Stack<>();

      // Afegim elements
      pila.push(10);
      pila.push(20);
      pila.push(30);

      // Consultem l’últim sense llevar-lo
      System.out.println("Últim element (cima): " + pila.peek());

      // Traiem els elements un per un
      while (!pila.isEmpty()) {
        int valor = pila.pop();
        System.out.println("Traent: " + valor);
      }

      // Comprovem si la pila està buida
      System.out.println("Pila buida? " + pila.isEmpty());
    }
  }
  ```
:::