# 9. Inserció

Per a inserir nous registres mitjançant un `ResultSet` modificable, s’utilitzen principalment aquests dos mètodes:

- `moveToInsertRow()`: desplaça el cursor a la **fila d’inserció**. Aquesta és una fila especial del `ResultSet` que no correspon a cap registre real de la consulta, sinó que s’utilitza per a preparar un nou registre. Una vegada situats en aquesta fila, cal assignar valors als camps mitjançant els mètodes `updateXXX()`.
- `insertRow()`: inserix en el `ResultSet` la fila d’inserció com un nou registre i, al mateix temps, realitza la inserció en la base de dades.

## Procés d’inserció

Per a afegir un nou registre a través d’un `ResultSet`, cal seguir aquests passos:

1. Cridar a `moveToInsertRow()` per a situar-se en la fila d’inserció.
2. Assignar valors a les columnes necessàries amb els mètodes `updateXXX()`.
3. Cridar a `insertRow()` per a inserir definitivament el nou registre.

## Exemple

El següent codi inserix un nou registre en la taula `clients`. Suposarem que `conn` és un objecte `Connection` creat prèviament:

```java
// Creem un Statement scrollable i modificable
Statement stmt = conn.createStatement(
    ResultSet.TYPE_SCROLL_SENSITIVE,
    ResultSet.CONCUR_UPDATABLE
);

// Executem un SELECT i obtenim la taula clients en un ResultSet
String sql = "SELECT * FROM clients";
ResultSet rs = stmt.executeQuery(sql);

// Creem un nou registre i l'inserim
rs.moveToInsertRow();
rs.updateString(2, "Killy Lopez");
rs.updateString(3, "Wall Street 3674");
rs.insertRow();
```

En aquest exemple:

- `moveToInsertRow()` situa el cursor en la fila d’inserció.
- `updateString(2, "Killy Lopez")` assigna un valor a la segona columna.
- `updateString(3, "Wall Street 3674")` assigna un valor a la tercera columna.
- `insertRow()` inserix el nou registre tant en el `ResultSet` com en la base de dades.

## Valors no establits

Les columnes a les quals no se’ls haja assignat cap valor mitjançant `updateXXX()` quedaran amb valor `NULL`.

Si alguna d’aquestes columnes està definida en la base de dades com a **no nul·la** (`NOT NULL`), en intentar fer la inserció es produirà una `SQLException`.

Per això, abans de cridar a `insertRow()`, cal assegurar-se d’haver assignat valors a tots els camps obligatoris.

## Tornar a la fila actual

Després d’haver utilitzat la fila d’inserció, és possible tornar a la fila en què es trobava el cursor abans de cridar a `moveToInsertRow()`. Per a fer-ho, s’utilitza el mètode:

```java
rs.moveToCurrentRow();
```

Aquest mètode només té sentit després d’haver cridat prèviament a `moveToInsertRow()`.


