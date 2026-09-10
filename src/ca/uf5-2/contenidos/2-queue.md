# 2. La Cua (Queue)

Una **cua (Queue)** és una estructura de dades molt utilitzada en programació i present en quasi tots els llenguatges.  
El seu funcionament es basa en el principi **FIFO (First In, First Out)**, és a dir: **el primer element que entra és el primer que ix**.

## Concepte general
- Una **cua** és com una fila de persones esperant el seu torn: la primera que arriba és la primera que serà atesa.  
- Es pot usar per:
  - Gestionar peticions en ordre d’arribada.  
  - Emmagatzemar tasques pendents.  
  - Simular processos (per exemple, cua d’impressió o cua de missatges).  

## Operacions bàsiques (aplicables a qualsevol llenguatge)

| Operació | Descripció | 
|-----------|-------------|
| **enqueue / add / push** | Afig un element al final de la cua | 
| **dequeue / poll / remove** | Lleva i retorna el primer element | 
| **peek / front / first** | Mostra el primer element sense llevar-lo | 
| **isEmpty** | Comprova si la cua està buida | 

---

## Exemples

Podem crear una cua per a emmagatzemar els noms de persones que esperen:

::: tabs
== Java

```Java
Queue<String> cua = new LinkedList<>();
:::

Ací declarem una Queue de tipus String, que farà servir una LinkedList internament per a guardar els elements.

Per a afegir dades a la cua fem servir el mètode add:

::: tabs
``` Java
cua.add("Josep");
cua.add("Maria");
cua.add("Pere");
```
:::

Ara hem afegit a Josep, Maria i Pere a la cua, en eixe ordre.

Obtenir o traure un element de la cua (lleva i retorna el primer element):

::: tabs
== Java
``` Java
String primer = cua.poll(); // primer = "Josep"
```
:::

També podem mirar el primer element sense llevar-lo:

::: tabs
== Java

```Java
String seguent = cua.peek(); // seguent = "Maria"
```
:::

El exemple complet podria ser el següent:

::: tabs
== Java

```Java

// Importem les llibreries necessàries
import java.util.LinkedList;
import java.util.Queue;

public class ExempleQueue {
  public static void main(String[] args) {

    // Creem la cua
    Queue<String> cua = new LinkedList<>();

    // Afegim elements
    cua.add("Josep");
    cua.add("Maria");
    cua.add("Pere");

    // Consultem el primer sense llevar-lo
    System.out.println("Primer de la cua: " + cua.peek());

    // Traiem elements un per un
    while (!cua.isEmpty()) {
      String persona = cua.poll();
      System.out.println("Servint: " + persona);
    }

    // Comprovem si la cua està buida
    System.out.println("Cua buida? " + cua.isEmpty());
  }
}
```

:::
