# 2. Elements bàsics

## 2.1. Comentaris

La majoria dels llenguatges de programació moderns suporten distints tipus de comentaris:

::: tabs
== Java

```java
// comentaris per a una sola línia
```

```java
/*
comentaris d'una o més línies
*/
```

```java
/** comentari de documentació, d'una o més línies */
```

:::

Els comentaris de documentació, col·locats immediatament abans d'una declaració (de variable o funció), indiquen que aqueix comentari ha de ser col·locat en la documentació que es genera automàticament quan s'utilitzen eines específiques de documentació. Aquest tipus de comentari el veurem més endavant.

## 2.2. Identificadors

Els identificadors nomenen variables, funcions, classes i objectes; qualsevol cosa que el programador o programadora necessite identificar o usar.

Regles per a la creació d'identificadors:

- **Molts llenguatges moderns fan distinció entre majúscules i minúscules**, per tant, noms o identificadors com var1, Var1 i VAR1 són diferents.
- Poden estar formats per qualsevol dels caràcters del codi Unicode, per tant, es poden declarar variables amb el nom: añoDeCreación, raïm, etc., encara que això sí, **el primer caràcter no** pot ser un **dígit numèric** i **no** poden utilitzar-se **espais en blanc ni símbols coincidents amb operadors**.
- La **longitud** màxima dels identificadors és pràcticament **il·limitada**.
- **No** pot ser una **paraula reservada del llenguatge ni** els valors lògics **true o false**.
- **No** poden ser **iguals a un altre identificador declarat** en el mateix àmbit.
- **IMPORTANT** → Per conveni:
  - Els **noms** de les **variables** i els **mètodes** haurien de començar per una **lletra minúscula** i els de les **classes per majúscula**.
  - Si l'identificador està format per **diverses paraules**, la **primera** s'escriu en **minúscules** (excepte per a les classes) i la **resta** de paraules es fa **començar per majúscula** (per exemple: añoDeCreación).
  - Aquestes **regles** no són obligatòries, però són **convenients** ja que ajuden al procés de codificació d'un programa, així com a la seua llegibilitat. És més senzill distingir entre classes i mètodes o variables.

>***Exemple: identificadors vàlids***
>
>- comptador  
>- suma  
>- edat  
>- souBrut
>- souNet
>- nom_usuari  
>- nom_Complet  
>- lletraDni
>
>I el seu ús seria, per exemple:
>
>::: tabs
>== Java
>
>```java
>int comptador; // crea variable de tipus int anomenada comptador 
>float sueldoNeto; // crea variable de tipus float anomenada sueldoNeto 
>char letraDni; // crea variable de tipus char anomenada letraDni
>```
>
>:::