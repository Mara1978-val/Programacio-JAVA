# 8 Mofificació

## Modificació de dades amb un `ResultSet`

Per a poder modificar les dades contingudes en un `ResultSet`, aquest ha de ser **modificable**. Per això, en crear l’objecte `Statement`, cal indicar que volem un `ResultSet` actualitzable utilitzant la constant `ResultSet.CONCUR_UPDATABLE`.

Per exemple:

```java
Statement stmt = conn.createStatement(
    ResultSet.TYPE_SCROLL_SENSITIVE,
    ResultSet.CONCUR_UPDATABLE
);
```

Açò crea un `Statement` que genera un `ResultSet` desplaçable i modificable.

## Mètodes `updateXXX()`

Per a canviar els valors d’un registre existent s’utilitzen els mètodes `updateXXX()` de la interfície `ResultSet`. Igual que ocorre amb els mètodes `getXXX()`, les `XXX` indiquen el tipus de dada amb què treballem:

- `updateString()`
- `updateInt()`
- `updateDouble()`
- `updateDate()`
- etc.

A diferència dels mètodes `getXXX()`, els mètodes `updateXXX()` necessiten **dos arguments**:

1. La columna que volem modificar, indicada pel seu **nom** o pel seu **número de columna**.
2. El nou valor que volem emmagatzemar en aquesta columna.

Per exemple, si volem modificar el camp `edat` i assignar-li el valor `28`, podem fer-ho així:

```java
rs.updateInt("edat", 28);
```

També es pot fer indicant la posició de la columna. Si `edat` és la segona columna:

```java
rs.updateInt(2, 28);
```

Aquests mètodes són de tipus `void`, és a dir, **no retornen cap valor**. Si es produeix algun error, es llançarà una `SQLException`.

## Aplicació dels canvis amb `updateRow()`

Els mètodes `updateXXX()` només preparen la modificació sobre la fila actual del `ResultSet`, però **els canvis no s’apliquen definitivament a la base de dades fins que es crida al mètode `updateRow()`**.

```java
rs.updateRow();
```

Aquest mètode també és de tipus `void`. En executar-lo, el controlador JDBC s’encarrega de generar i executar les sentències SQL necessàries per a actualitzar la base de dades.

## Procés per a modificar una fila

En resum, per a modificar un registre d’un `ResultSet`, cal seguir aquests passos:

1. Situar el cursor en la fila que volem modificar.
2. Cridar als mètodes `updateXXX()` necessaris.
3. Cridar a `updateRow()` per a guardar els canvis en la base de dades.

## Cancel·lació de canvis

És important tindre en compte que `updateRow()` s’ha de cridar **abans de moure el cursor a una altra fila**. Si el cursor es desplaça abans d’executar aquest mètode, els canvis pendents es perdran.

Si volem descartar les modificacions fetes sobre la fila actual abans de guardar-les, podem utilitzar:

```java
rs.cancelRowUpdates();
```

Aquest mètode anul·la tots els canvis pendents de la fila actual. Ara bé, si ja s’ha executat `updateRow()`, `cancelRowUpdates()` ja no tindrà cap efecte.

## Exemple

El següent exemple modifica el camp `direccio` de l’últim registre d’un `ResultSet` obtingut a partir d’una consulta sobre la taula `clients`:

```java
// Creem un Statement scrollable i modificable
Statement stmt = conn.createStatement(
    ResultSet.TYPE_SCROLL_SENSITIVE,
    ResultSet.CONCUR_UPDATABLE
);

// Executem un SELECT i obtenim les dades de la taula clients
String sql = "SELECT * FROM clients";
ResultSet rs = stmt.executeQuery(sql);

// Anem a l'últim registre, el modifiquem i actualitzem la base de dades
rs.last();
rs.updateString("direccio", "C/ Pepe Ciges, 3");
rs.updateRow();
```

En aquest cas:

- `rs.last();` situa el cursor en l’última fila del `ResultSet`.
- `rs.updateString("direccio", "C/ Pepe Ciges, 3");` prepara el canvi del camp `direccio`.
- `rs.updateRow();` guarda definitivament la modificació en la base de dades.
