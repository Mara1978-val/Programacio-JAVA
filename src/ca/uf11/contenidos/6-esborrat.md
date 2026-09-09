# 10. Esborrat

Per a eliminar un registre d’un `ResultSet` modificable, només cal situar el cursor en la fila que volem esborrar i cridar al mètode:

- `deleteRow()`: elimina la fila actual del `ResultSet` i també el registre corresponent de la base de dades.

## Procés d’esborrat

Per a esborrar un registre mitjançant un `ResultSet`, cal seguir aquests passos:

1. Desplaçar el cursor fins a la fila que volem eliminar.
2. Cridar a `deleteRow()`.

## Exemple

El següent codi esborra el tercer registre de la taula `clients`:

```java
// Creem un Statement scrollable i modificable
Statement stmt = conn.createStatement(
    ResultSet.TYPE_SCROLL_SENSITIVE,
    ResultSet.CONCUR_UPDATABLE
);

// Executem un SELECT i obtenim la taula clients en un ResultSet
String sql = "SELECT * FROM clients";
ResultSet rs = stmt.executeQuery(sql);

// Desplacem el cursor al tercer registre
rs.absolute(3);

// Esborrem la fila actual
rs.deleteRow();
```

## Explicació

En aquest exemple:

- `rs.absolute(3);` situa el cursor en la tercera fila del `ResultSet`.
- `rs.deleteRow();` elimina aquesta fila del `ResultSet` i també de la base de dades.

## Observacions

Cal tindre en compte que:

- el `ResultSet` ha de ser **modificable**, és a dir, ha d’haver sigut creat amb `ResultSet.CONCUR_UPDATABLE`;
- el cursor ha d’estar situat en una fila vàlida abans de cridar a `deleteRow()`;
- si es produïx algun problema durant l’eliminació, es llançarà una `SQLException`.

