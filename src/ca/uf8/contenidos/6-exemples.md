
## Exemple complet: El videojoc

### Classe abstracta (base comuna)

```java
public abstract class Personatge {

    protected String nom;
    protected int vida;
    protected int atacFisic;
    protected int poderMagic;

    // Constructor
    public Personatge(String nom, int vida, int atacFisic, int poderMagic) {
        this.nom = nom;
        this.vida = vida;
        this.atacFisic = atacFisic;
        this.poderMagic = poderMagic;
    }

    public void mostrarEstat() {
        System.out.println(nom + " [Vida: " + vida + " | Atac: " + atacFisic + " | Màgia: " + poderMagic + "]");
    }

    public void rebreDany(int dany) {
        vida -= dany;
    }

    // MÈTODE ABSTRACTE: Cada classe defineix com millora
    public abstract void pujarNivell();
}

```
Per què és abstracta?

- No té sentit crear un `Personatge` genèric
- Té sentit compartir atributs i mètodes comuns
- Serveix com a base de la jerarquia

### 2. Interfície (capacitat)
```java
public interface Atacant {
    void atacar();
}

```

*Idea clau*

Açò no és una jerarquia, és una habilitat.  
Una classe pot atacar, però no necessàriament és un atacant com a tipus base.

### 3. Interfície buida

```java
public interface Volador {
}


```
Funció

- No defineix mètodes
- Serveix per a marcar una propietat
- Es comprova amb `instanceof`

### 4. Classes concretes

🗡️ Guerrer (pot atacar)

```java
public class Guerrer extends Personatge implements Atacant {

    public Guerrer(String nom) {
        super(nom, 100, 30, 5); // Molt físic, poca màgia
    }

    @Override
    public void atacar() {
        System.out.println(nom + " clava l'espasa fent " + atacFisic + " de dany!");
    }

    @Override
    public void pujarNivell() {
        System.out.println(">>> " + nom + " puja de nivell! (+20 Vida, +10 Atac)");
        this.vida += 20;
        this.atacFisic += 10;
        this.poderMagic += 1; // La màgia puja molt poc
    }
}

```
🏹 Arquer (pot atacar i volar)

```java
public class Arquer extends Personatge implements Atacant, Volador {

    public Arquer(String nom) {
        super(nom, 80, 20, 10); // Equilibrat
    }

    @Override
    public void atacar() {
        System.out.println(nom + " dispara fletxa fent " + atacFisic + " de dany!");
    }

    @Override
    public void pujarNivell() {
        System.out.println(">>> " + nom + " puja de nivell! (+10 Vida, +5 Atac, +5 Màgia)");
        this.vida += 10;
        this.atacFisic += 5;
        this.poderMagic += 5;
    }
}

```
✨ Sanador (NO pot atacar)

```java
public class Sanador extends Personatge {

    public Sanador(String nom) {
        super(nom, 90, 5, 40); // Molta màgia
    }

    public void curar() {
        System.out.println(nom + " cura un aliat usant " + poderMagic + " punts de màgia.");
    }

    @Override
    public void pujarNivell() {
        System.out.println(">>> " + nom + " puja de nivell! (+15 Vida, +15 Màgia)");
        this.vida += 15;
        this.atacFisic += 2; // L'atac físic gairebé no puja
        this.poderMagic += 15;
    }
}

```
Punt clau (molt important)

- `Sanador` **NO** implementa `Atacant`
- No tots els `Personatge` ataquen
- Evitem jerarquies falses


### 5. Classe Final (El final de la cadena)

Hi ha casos on una classe està tan especialitzada que no volem que ningú puga crear "subtipus" d'ella. En el nostre joc, un **Boss** (cap final) podria ser un bon exemple: la seua lògica és tan específica i tancada que permetre l'herència podria causar errors o comportaments no desitjats.

> [!NOTE]
> Pensa en una classe `final` com un producte acabat que no permet modificacions posteriors mitjançant l'herència.

### Exemple de codi en Java

```java

public final class BossFinal extends Personatge implements Atacant {
    
    private String habilitatEspecial;

    public BossFinal(String nom, String habilitat) {
        super(nom, 500, 50, 50);
        this.habilitatEspecial = habilitat;
    }

    @Override
    public void atacar() {
        System.out.println(nom + " utilitza " + habilitatEspecial);
    }

    @Override
    public void pujarNivell() {
        System.out.println(">>> EL BOSS ES FA MÉS FORT! (+100 a tot)");
        this.vida += 100;
        this.atacFisic += 100;
        this.poderMagic += 100;
    }
}
```

### 6. Ús en el joc (polimorfisme + `instanceof`)

```java
import java.util.ArrayList;

public class Joc {
    public static void main(String[] args) {

        ArrayList<Personatge> equip = new ArrayList<>();
        Personatge tor= new Guerrer("Thor");
        Personatge legolas= new Arquer("Legolas");
        Personatge elrond= new Sanador("Elrond");
        Personatge boss= new BossFinal("Sauron", "Anell Únic");
        equip.add(tor);
        equip.add(legolas);
        equip.add(elrond);
        equip.add(boss);

        for (Personatge p : equip) {
            
            // 1. Mètodes comuns (heretats de Personatge)
            p.mostrarEstat();
            p.pujarNivell(); 

            // 2. Mètodes específics (requereixen instanceof)
            
            // Si implementa la interfície Atacant, pot atacar
            if (p instanceof Atacant) {
                // Fem "càsting" per tractar-lo com a Atacant
                Atacant atacant = (Atacant) p; 
                atacant.atacar();
            }

            // Si és un Sanador (classe específica), pot curar
            if (p instanceof Sanador) {
                Sanador metge = (Sanador) p;
                metge.curar();
            }

            // Si implementa la interfície Volador
            if (p instanceof Volador) {
                System.out.println("  [Info] Aquest personatge es mou volant.");
            }

            System.out.println("--------------------");
        }
    }
}

```
