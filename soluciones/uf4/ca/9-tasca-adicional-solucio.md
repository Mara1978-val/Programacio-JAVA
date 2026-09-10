# Exercici: Conjectura de Collatz

## ✅ Enunciat
La **Conjectura de Collatz** diu:
> Comença amb qualsevol numero positiu. Si és parell, divideix per 2; si és imparell, multiplica per 3 i suma 1. Repetix fins arribar a 1.

**Objectiu:**  
- Mostrar la seqüència completa des del numero inicial fins a 1.
- Comptar quants passos fa per arribar a 1.

**Bucles a utilitzar:**  
- `while` → per repetir fins arribar a 1.
- `for` → per provar diversos numeros (opcional, per a alumnes avançats).

---

## ✅ Passos a seguir
1. Demana a l’usuari un **numero positiu** (validar amb `while`).
2. Guarda el numero inicial en una variable.
3. Mostra un missatge: *"Seqüència de Collatz per al numero X:"*.
4. Utilitza un **bucle `while`**:
   - Si el numero és parell → divideix per 2.
   - Si és imparell → multiplica per 3 i suma 1.
   - Mostra cada valor de la seqüència.
   - Incrementa un comptador de passos.
5. Quan arribes a 1, mostra:
   - La seqüència completa.
   - El numero total de passos.


---

## ✅ Solució en Java

```java
import java.util.Scanner;

public class Collatz {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num;

        // ✅ 1. Demanar un numero positiu
        do {
            System.out.print("Introdueix un numero positiu: ");
            num = sc.nextInt();
            if (num <= 0) {
                System.out.println("El numero ha de ser positiu. Torna-ho a intentar.");
            }
        } while (num <= 0);

        // ✅ 2. Guardar el numero inicial
        int inicial = num;
        int passos = 0;

       // ✅ 3.Mostra
        System.out.println("\nSeqüència de Collatz per al numero " + inicial + ":");

        // ✅ 4. Mostrar la seqüència amb while
        while (num != 1) {
            System.out.print(num + " → ");
            if (num % 2 == 0) {
                num = num / 2;
            } else {
                num = num * 3 + 1;
            }
            passos++;
        }
        System.out.println("1"); // Últim valor

        // ✅ 5. Mostrar el numero total de passos
        System.out.println("\nNumero total de passos: " + passos);
    }
}   
 
``

       
```
