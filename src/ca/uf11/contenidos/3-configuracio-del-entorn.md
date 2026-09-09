# Guia de preparació de l'entorn per a començar amb bases de dades en Java

## Objectiu

Abans de començar a programar la connexió a bases de dades en Java, has de preparar correctament el teu entorn de treball.

En esta guia faràs el següent:

- Instal·lar **XAMPP**
- Activar els servicis necessaris
- Instal·lar extensions en **Visual Studio Code**
- Crear un projecte Java **sense build tools**
- Descarregar el connector de MySQL des de l’aula virtual
- Afegir l’arxiu `.jar` a la carpeta `lib` del projecte

---

## 1. Instal·lar XAMPP

XAMPP ens proporciona el servidor de base de dades que utilitzarem en classe.

### Passos

1. Entra en la web oficial de **XAMPP**.
2. Descarrega la versió adequada per al teu sistema operatiu.
3. Executa l’instal·lador.
4. Instal·la XAMPP amb la configuració per defecte.

### Recomanació

Si et pregunta la carpeta d’instal·lació, utilitza una ruta senzilla, per exemple:

```text
C:\xampp
```

> En alguns equips Windows pot demanar permisos d’administrador.

---

## 2. Activar els servicis de XAMPP

Una vegada instal·lat XAMPP:

1. Obri el **XAMPP Control Panel**.
2. Prem el botó **Start** en:
   - **Apache**
   - **MySQL**

Quan estiguen correctament iniciats, apareixeran en verd.

### Servicis que has de tindre actius

- **Apache**
- **MySQL**

> Encara que per a bases de dades el servici realment important és **MySQL**, en classe deixarem activats els dos.

### Comprovació

Si tot ha anat bé:

- MySQL apareixerà com a iniciat
- No ha de mostrar errors en roig
- El port de MySQL normalment serà el **3306**

---

## 3. Instal·lar Visual Studio Code

Si encara no el tens instal·lat:

1. Descarrega **Visual Studio Code**
2. Instal·la’l normalment
3. Obri’l

---

## 4. Instal·lar les extensions necessàries en VS Code

Per a este tema utilitzarem dos extensions:

- **MySQL**
- **MySQL Syntax**

### Com instal·lar-les

1. Obri **Visual Studio Code**
2. Ves a l’apartat d’**Extensions**
3. Busca i instal·la estes dos extensions:

#### Extensió 1: MySQL

Busca:

```text
MySQL
```

i instal·la-la.

#### Extensió 2: MySQL Syntax

Busca:

```text
MySQL Syntax
```

i instal·la-la també.

> És important instal·lar **les dos**.

### Comprovació

Quan estiguen instal·lades, han d’aparéixer com a **Installed** en VS Code.

---

## 5. Crear el projecte Java

En este mòdul **no usem Maven ni cap altra ferramenta de gestió**.

Per tant, el projecte es crea **com sempre**, és a dir:

- **Projecte Java**
- **Sense build tools**
- **No build tools**

### Passos generals

1. Obri VS Code
2. Crea un projecte Java nou
3. Quan pregunte el tipus de projecte, selecciona:

```text
No build tools
```

4. Posa el nom que indique el professorat
5. Tria una carpeta on guardar el projecte

### Important

Recorda:

- **No usem Maven**
- **No usem Gradle**
- **No usem cap ferramenta de gestió**
- El projecte ha de quedar creat com un projecte Java normal

---

## 6. Comprovar l’estructura del projecte

El teu projecte hauria de tindre una estructura pareguda a esta:

```text
ElMeuProjecteBD/
├── src/
└── lib/
```

Si la carpeta `lib` no existix, crea-la tu manualment.

### Com crear la carpeta `lib`

1. Fes clic dret sobre el projecte
2. Selecciona **New Folder**
3. Escriu:

```text
lib
```

---

## 7. Descarregar el connector de MySQL des de l’aula virtual

Perquè Java puga connectar-se a MySQL, necessites l’arxiu del connector JDBC.

### Arxiu que has de descarregar

Has d’entrar en l’**aula virtual** i descarregar este arxiu:

```text
mysql-connector-j-9.6.0.jar
```

### Passos

1. Entra en l’**aula virtual**
2. Busca el recurs o material on està pujat l’arxiu
3. Descarrega:

```text
mysql-connector-j-9.6.0.jar
```

4. Guarda l’arxiu en una ubicació fàcil de trobar, per exemple en **Descàrregues**

> Descarrega’l des de l’aula virtual, no cal buscar-lo en altres pàgines.

---

## 8. Afegir l’arxiu `.jar` a la carpeta `lib`

Una vegada descarregat l’arxiu, has de copiar-lo dins de la carpeta `lib` del teu projecte.

### Passos

1. Localitza l’arxiu descarregat:

```text
mysql-connector-j-9.6.0.jar
```

2. Copia’l
3. Apega’l dins de la carpeta `lib` del teu projecte

L’estructura quedarà així:

```text
ElMeuProjecteBD/
├── src/
└── lib/
    └── mysql-connector-j-9.6.0.jar
```

---

## 9. Comprovar que el projecte reconeix la llibreria

Després de copiar el `.jar` en `lib`, Visual Studio Code hauria de reconéixer-lo.

### Què has de revisar

En el projecte sol aparéixer una secció pareguda a:

```text
Referenced Libraries
```

Dins hauria de veure’s l’arxiu `.jar` afegit.

### Si no apareix

Si no s’actualitza automàticament:

1. Tanca i torna a obrir VS Code
2. Comprova que l’arxiu està realment dins de `lib`
3. Revisa que el nom siga exactament:

```text
mysql-connector-j-9.6.0.jar
```

---

## 10. Què has de tindre preparat abans de començar a programar

Abans de fer exercicis de connexió a bases de dades, has de comprovar tot açò:

- [ ] XAMPP està instal·lat
- [ ] Apache està iniciat
- [ ] MySQL està iniciat
- [ ] VS Code està instal·lat
- [ ] L’extensió **MySQL** està instal·lada
- [ ] L’extensió **MySQL Syntax** està instal·lada
- [ ] El projecte Java està creat amb **No build tools**
- [ ] Existix la carpeta `lib`
- [ ] Has descarregat `mysql-connector-j-9.6.0.jar` des de l’aula virtual
- [ ] Has copiat el `.jar` dins de `lib`
- [ ] La llibreria apareix en **Referenced Libraries**

---

## 11. Errors freqüents

### Error 1: He creat el projecte amb Maven o Gradle

Solució: elimina eixe projecte i torna a crear-lo seleccionant:

```text
No build tools
```

### Error 2: No tinc carpeta `lib`

Solució: crea-la manualment dins del projecte.

### Error 3: El `.jar` no apareix en el projecte

Solució:

- comprova que està dins de `lib`
- revisa el nom de l’arxiu
- reinicia VS Code

### Error 4: MySQL no arranca en XAMPP

Possibles causes:

- un altre programa està utilitzant el port
- falta executar XAMPP com a administrador
- la instal·lació no s’ha fet correctament

### Error 5: He descarregat un connector diferent

Solució: assegura’t d’utilitzar exactament este arxiu:

```text
mysql-connector-j-9.6.0.jar
```

---

## 12. Resum final

Per a començar este tema correctament has de:

1. Instal·lar **XAMPP**
2. Iniciar **Apache** i **MySQL**
3. Instal·lar en VS Code les extensions:
   - **MySQL**
   - **MySQL Syntax**
4. Crear el projecte Java **sense build tools**
5. Descarregar des de l’aula virtual l’arxiu:

```text
mysql-connector-j-9.6.0.jar
```

6. Copiar eixe arxiu dins de la carpeta:

```text
lib
```

Quan tingues tot açò preparat, ja podràs començar a programar la connexió entre Java i la base de dades.
