# 5. Depuració (Debugging)

## 5.1. Conceptes de Depuració

La depuració és el procés d'identificar i corregir errors en el codi. Els IDEs ofereixen eines sofisticades per a facilitar aquesta tasca:

**Punts de ruptura (Breakpoints)**: Marques que paren l'execució en línies específiques del codi.

**Execució pas a pas**: Permet avançar línia per línia per a observar el comportament del programa.

**Inspecció de variables**: Visualització dels valors de variables en temps d'execució.

**Pila de crides (Call Stack)**: Mostra la seqüència de funcions que han portat al punt actual.

## 5.2. Tipus de Punts de Ruptura

Els IDEs solen oferir diferents tipus de breakpoints:

- **Punts de ruptura de línia**: S'activen quan s'arriba a una línia específica
- **Punts de ruptura condicionals**: Només s'activen quan es compleix una condició
- **Punts de ruptura d'excepció**: S'activen quan es produeix una excepció específica
- **Punts de ruptura de mètode**: S'activen en entrar o eixir d'un mètode

## 5.3. Controls de Depuració

Durant una sessió de depuració, els controls típics inclouen:

**Continue**: Continua l'execució fins al següent breakpoint o final del programa.

**Step Over**: Executa la línia actual sense entrar dins de les funcions cridadas.

**Step Into**: Entra dins de les funcions cridadas per a depurar-les.

**Step Out**: Surt de la funció actual i torna al context anterior.

**Run to Cursor**: Executa fins a la posició actual del cursor.

::: tabs
== Java

// Exemple de depuració:
public static void main(String[] args) {
    int a = 10;           // Breakpoint aquí
    int b = 5;            // Step Over per a inspeccionar 'a'
    int resultat = suma(a, b);    // Step Into per a entrar en suma()
    System.out.println("Resultat: " + resultat);
}

public static int suma(int x, int y) {
    return x + y;         // Inspeccionar x i y aquí
}
:::

## 5.4. Inspecció de Variables i Expressions

Los IDEs permeten:

- **Visualitzar variables locals** i els seus valors actuals
- **Afegir expressions de vigilància** per a monitoritzar valors específics
- **Modificar valors** de variables durant la depuració per a provar scenarios
- **Avaluar expressions** dinàmicament en el context actual

## 5.5. Concepte de Refactoring

El refactoring és el procés de reestructurar el codi existent sense canviar el seu comportament extern. Els objectius principals són:

- **Millorar la llegibilitat** del codi
- **Eliminar duplicació** i codi redundant
- **Simplificar l'estructura** complexa
- **Millorar el rendiment** sense afectar la funcionalitat
- **Facilitar el manteniment** futur

## 5.6. Eines de Refactoring

Els IDEs moderns ofereixen eines automatitzades per a refactoring:

**Rename**: Canvia el nom d'una variable, mètode o classe en tot el projecte.

**Extract Method**: Converteix un bloc de codi en un mètode separat.

**Extract Variable**: Crea una variable per a una expressió complexa.

**Inline**: Substitueix l'ús d'una variable o mètode pel seu contingut.

**Move**: Mou classes o mètodes a un altre paquet o classe.

## 5.7. Anàlisi de Qualitat del Codi

Els IDEs poden integrar eines d'anàlisi estàtic que detecten:

- **Problemes de rendiment** potencials
- **Vulnerabilitats de seguretat** comunes
- **Violacions d'estàndards** de codificació
- **Codi mort** no utilitzat
- **Complexitat excessiva** en funcions