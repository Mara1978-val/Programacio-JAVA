# Exercici: Conjectura de Collatz

## ✅ Enunciat
La **Conjectura de Collatz** diu:
> Comença amb qualsevol número positiu. Si és parell, divideix per 2; si és imparell, multiplica per 3 i suma 1. Repetix fins arribar a 1.

**Objectiu:**  
- Mostrar la seqüència completa des del número inicial fins a 1.
- Comptar quants passos fa per arribar a 1.

**Bucles a utilitzar:**  
- `while` → per repetir fins arribar a 1.
- `for` → per provar diversos números (opcional, per a alumnes avançats).

---

## ✅ Passos a seguir
1. Demana a l’usuari un **número positiu** (validar amb `while`).
2. Guarda el nombre inicial en una variable.
3. Mostra un missatge: *"Seqüència de Collatz per al nombre X:"*.
4. Utilitza un **bucle `while`**:
   - Si el número és parell → divideix per 2.
   - Si és imparell → multiplica per 3 i suma 1.
   - Mostra cada valor de la seqüència.
   - Incrementa un comptador de passos.
5. Quan arribes a 1, mostra:
   - La seqüència completa.
   - El número total de passos.


---


## ✅ Exemple d’execució
>
>  Introdueix un nombre positiu: 6
> 
>  Seqüència de Collatz per al nombre 6:
> 
>  6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
>
>   Nombre total de passos: 8
