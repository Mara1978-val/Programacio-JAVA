# Exemples

## Exemple 1

Creació d'una base de dades senzilla de prova utilitzant sentències SQL.

**CONNEXIÓ A LA BASE DE DADES**

Seguint els passos de l'apartat 4 de la teoria, crea una connexió nova.

**CREACIÓ DE LA BASE DE DADES**

Anem a crear una base de dades nova utilitzant sentències SQL.

Per a executar una ordre sobre la base de dades, cal fer clic dret sobre la connexió i seleccionar l'opció `Execute Command...`.

S'obrirà un panell en l'editor central on podrem introduir sentències SQL i, després, fer clic en la icona `Run SQL`.

```sql
CREATE DATABASE prova;
```

**CONNEXIÓ A LA NOVA BASE DE DADES**

Per a evitar haver d'introduir en cada execució la identificació de la base de dades amb què treballem (`USE prova;`), configurarem una nova connexió.

- Fem clic dret en `MySQL (Connector/J driver)` → `Connect Using...`
- S'obrirà la finestra **New Connection Wizard** i, en el camp **Database**, posarem el nom de la nostra base de dades: `prova`.

Apareixerà una nova connexió.

**CREACIÓ D'UNA TAULA**

- Seleccionem la connexió `jdbc:mysql://localhost:3306/prova...`
- Fem clic dret sobre ella → `Execute Command`
- S'obrirà un panell en l'editor central on podrem introduir sentències SQL i, després, fer clic en la icona `Run SQL`.

```sql
CREATE TABLE venedors ( 
id int NOT NULL auto_increment, 
nom varchar(50) NOT NULL default '', 
data_ingres date NOT NULL default '0000-00-00', 
salari float NOT NULL default '0', 
PRIMARY KEY (id) ); 
```

**Nota:** Depenent de com estiga configurada la nostra instal·lació, podem trobar problemes en declarar el valor per defecte del camp de tipus `date` i assignar-li `0000-00-00`. Si és així i no volem modificar els paràmetres de la instal·lació, simplement eliminarem el text *default '0000-00-00'*. 

**EXECUCIÓ DE SENTÈNCIES SQL**

- Seguint els passos del punt anterior per a obrir una altra finestra, o bé directament substituint el text en la que ja tenim oberta, introduirem les instruccions següents.
- Inserim una fila. Introduïm la sentència SQL i després fem clic en la icona `Run SQL`.

```sql
INSERT INTO venedors
VALUES (1, 'Pedro Gil', '2017-04-11', 15000);  
```

- Consultem el contingut de la taula. Introduïm la sentència SQL i després fem clic en la icona `Run SQL`.

```sql
SELECT * FROM venedors
```

**PRÀCTICA**

- Inserix més dades en la taula i consulta-les.
- Crea una altra taula, per exemple de productes, amb diversos camps. Inserix algunes dades i consulta-les.

## Exemple 2

Importació d'una base de dades i execució de consultes.

**NOTA IMPORTANT:** L'objectiu d'aquesta pràctica és aprendre a importar una base de dades i fer algunes consultes bàsiques. El material aportat en l'última part de l'exemple és molt més ampli i comprén una part relacionada amb bases de dades i el llenguatge SQL amb la finalitat que pugueu practicar o ampliar coneixements si vos interessa. És a dir, el material aportat en aquesta última part és material d'ajuda, no contingut avaluable.

**IMPORTACIÓ DE LA BD `uf12_empresa.sql`**

Partirem del fet que ja tenim XAMPP arrancat i la connexió general a bases de dades connectada.

- Executarem la instrucció:

```sql
CREATE DATABASE uf12_empresa;
```

Veurem que dins de la connexió ja ens apareix la nostra base de dades.

- Fem clic dret en `MySQL (Connector/J driver)` → `Connect Using...`
- S'obrirà la finestra **New Connection Wizard** i, en el camp **Database**, posarem el nom de la nostra base de dades: `uf12_empresa`.

Apareixerà una nova connexió.

- Anem al nostre navegador i introduïm en l'URL la paraula `localhost` (o bé l'adreça IP `127.0.0.1`).
- Se'ns obrirà la pantalla de XAMPP i, en el menú de capçalera, farem clic en `phpMyAdmin`.
- En la nova finestra ens situarem sobre la nostra base de dades i polsarem el botó `Importar`.

<p align="center">
  <img :src="$withBase('/img/uf11/exemple2_1.png')" alt="Pantalla d'importació en phpMyAdmin" width="600"><br>
  <sub>Figura 1. Selecció de l'opció d'importació en phpMyAdmin.</sub>
</p>

- Cercarem la base de dades `uf12_empresa.sql`, que prèviament ens haurem descarregat des d'Aules al nostre ordinador.

<p align="center">
  <img :src="$withBase('/img/uf11/exemple2_2.png')" alt="Selecció del fitxer SQL" width="600"><br>
  <sub>Figura 2. Selecció del fitxer `uf12_empresa.sql`.</sub>
</p>

- Una vegada seleccionada, ens desplaçarem al final de la pantalla i polsarem el botó `Importar`.
- Podrem veure que s'ha incorporat un conjunt de taules a la nostra base de dades, les quals ja tenen tots els registres creats.

<p align="center">
  <img :src="$withBase('/img/uf11/exemple2_3.png')" alt="Resultat de la importació de la base de dades" width="600"><br>
  <sub>Figura 3. Taules incorporades després de la importació.</sub>
</p>

- Tornem a NetBeans per a verificar que ja tenim la base de dades carregada. Si no apareixen les taules, simplement haurem de fer clic dret sobre la base de dades i seleccionar `Refresh`.

<p align="center">
  <img :src="$withBase('/img/uf11/exemple2_4.png')" alt="Actualització de la connexió en NetBeans" width="600"><br>
  <sub>Figura 4. Actualització de la connexió per a visualitzar les taules.</sub>
</p>

**MODEL DE LA BASE DE DADES `uf12_empresa`**

La base de dades està formada per cinc taules, i cada una emmagatzema informació referent a un tipus particular important. El diagrama de la base de dades es pot veure a la figura següent.

<p align="center">
  <img :src="$withBase('/img/uf11/exemple2_5.png')" alt="Model de la base de dades uf12_empresa" width="600"><br>
  <sub>Figura 5. Model relacional de la base de dades `uf12_empresa`.</sub>
</p>

La taula **OFICINES** emmagatzema dades sobre cadascuna de les cinc oficines de vendes, incloent la ciutat on està localitzada l'oficina, la regió de vendes a què pertany, etc.

La taula **CLIENTS** emmagatzema dades sobre cada client, com ara el nom de l'empresa, el límit de crèdit i el venedor que atén el client.

La taula **REPVENTES** emmagatzema el número d'empleat, el nom, l'edat, les vendes anuals fins ara i altres dades referents a cada venedor.

La taula **PRODUCTES** emmagatzema dades sobre cada producte disponible per a venda, com ara el fabricant, el número del producte, la descripció i el preu.

La taula **COMANDES** porta el compte de cada comanda remesa per un client, identificant el venedor que va acceptar la comanda, el producte sol·licitat, la quantitat i l'import de la comanda, etc. Per simplicitat, cada comanda afecta un sol producte.

**EXECUCIÓ DE CONSULTES**

L'aprenentatge de SQL no forma part del contingut del nostre mòdul. No obstant això, hem inclòs aquest arxiu, que conté una àmplia varietat de consultes `SELECT` sobre la base de dades que hem creat, amb la finalitat que pugueu practicar o ampliar coneixements. És a dir, es tracta de material d'ajuda, no de contingut avaluable.

En la plataforma Aules trobarem l'arxiu `uf12_empresa-SQL.txt`, que conté un joc de consultes on hi ha una àmplia varietat d'instruccions `SELECT` amb tots els paràmetres que es poden utilitzar amb aquesta sentència.
