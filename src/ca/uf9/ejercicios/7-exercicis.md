# 8. Exercicis 
A continuació trobarás els exercicis del tema, son una ampliació del tema anterior.
> Referència: [Exercicis UT8](https://ggpro-java.github.io/UF8-Lri7M8sjq0xxs9rFSJME/ca/7-exercicis.html)


## Exercicis - Nivell bàsic

## Exercici 1: El Repte de la Flota Intermodal - Validació de dades

L'empresa de transport **Trans-Java S.A.** vol assegurar que les dades introduïdes a la seua flota de màquines (camions, motos i cotxes) siguen totalment fiables abans de registrar cap actiu.

- **Excepció Pròpia:**  
  Crea una excepció anomenada `MatriculaInvalidaException` heretant de la classe `Exception`.

- **Validació en el Constructor:**  
  El constructor haurà de comprovar que la matrícula assignada a qualsevol actiu tinga un format vàlid (per exemple, exactament 7 caràcters).  
  Si el format no és correcte, s'haurà de llançar la `MatriculaInvalidaException`.

- **Gestió d'errors (`try-catch`):**  
  Al programa principal on es llista tota la flota de manera unificada, simula la creació d'actius dins de blocs `try-catch`.  
  Si algun vehicle llança l'error, s'ha de capturar i mostrar per pantalla, permetent que el programa continue amb la resta de la flota.

---

## Exercici 2: Sistema de Control d'Actius "ByteMaster" - Seguretat en el Rendiment

El motor de gestió per a l'inventari de **ByteMaster** funciona de manera polimòrfica, però forçar les capacitats del hardware comporta riscos.

- **Excepció Pròpia:**  
  Defineix una nova excepció anomenada `SobreescalfamentException`.

- **Modificació de Contractes (`throws`):**  
  A la interfície d'Alt Rendiment, indica explícitament que l'habilitat de fer `overclock` pot llançar (`throws`) l'excepció `SobreescalfamentException`.

- **Lògica de llançament:**  
  A l'hora d'executar l’`overclock` en les CPU o GPU, si el consum elèctric del dispositiu supera un límit segur (com per exemple els 600W dels 700W màxims possibles), el mètode ha de llançar l'excepció indicant el perill.

- **Bloc `finally`:**  
  Al motor de processament polimòrfic, quan actives i comproves les habilitats, usa un bloc `finally` per a imprimir sempre l'estat d'auditoria d'eficiència energètica de cada component, independentment de si ocorre un error o no.

---

## Exercicis - Nivell mitjà

## Exercici 3: Refugi Vida i Natura - Operacions Segures

Com que el refugi d'animals disposa ara d'un menú interactiu, cal fer que l'aplicació siga totalment resistent a les errades humanes i respecte estrictament la normativa d'adopcions.

- **Excepció Pròpia:**  
  Implementa l'excepció `AdopcioDenegadaException`.

- **Validació Estricta:**  
  Al mètode que gestiona l'opció d'adoptar un animal, si el candidat no compleix els requisits (més de 10 anys, sense vacunar, o ocell salvatge), el mètode ha de llançar la `AdopcioDenegadaException` detallant el problema, en compte de mostrar només un avís.

- **Excepcions de Java:**  
  Quan es demanen les dades numèriques pel menú infinit, captura les excepcions del tipus `InputMismatchException` per evitar l'aturada abrupta del sistema si l'usuari introdueix lletres.  
  A més, vigila el llançament de `NullPointerException` si se sol·licita interactuar amb un codi d'animal inexistent a la teua estructura clau-valor.

---

## Exercicis - Nivell avançat

## Exercici 4: Cosmolab - Alarmes i Emergències Crítiques

Als prototips experimentals d'hàbitat de **Cosmolab**, qualsevol anomalia ha de ser tractada com una emergència i propagada adequadament.

- **Excepcions Pròpies (múltiples):**

  - Crea la classe `CapacitatExcedidaException` que es llançarà si a una Unitat de cultiu s'intenta afegir una nova planta quan ja s'ha assolit el seu màxim de 30.
  - Crea la classe `AlertaAtmosfericaException` per a les Unitats d'anàlisi atmosfèric en cas que es registre una caiguda dràstica del percentatge d'oxigen.

- **Propagació d'Excepcions ("hot potato"):**  
  L'arquitectura del codi ha de demostrar que els mètodes de les unitats no solucionen l'error, sinó que se'l passen de mètode a mètode recursivament (`throws`) fins a arribar al controlador de les zones.

- **Registre Continu:**  
  Si el programa central captura aquestes falles, haurà d'emetre una alerta d'avaria per a eixa zona, però haurà de poder seguir executant i supervisant la resta d'unitats de la base.

