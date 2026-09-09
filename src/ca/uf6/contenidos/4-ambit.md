# 4. Àmbit de les variables

Una funció només pot fer ús de les seues **variables locals**, és a dir, aquelles que es declaren dins de la pròpia funció: tant els paràmetres com les variables creades al seu interior. Aquestes variables s'inicialitzen cada vegada que s'executa la funció, i deixen d'existir quan finalitza.

Per tot això, una funció no pot accedir directament a variables declarades fora d'ella, i a l'inrevés: el codi extern a la funció tampoc pot accedir a les seues variables locals. Aquesta propietat s'anomena encapsulació, i és fonamental per a mantenir el codi ben organitzat, modular i més fàcil de mantindre en programes grans i complexos.

Encara que tècnicament alguns llenguatges de programació permeten accedir a variables externes mitjançant mecanismes específics (com ara variables globals, clausures o membres d'una classe), no és una pràctica recomanada en general, especialment si es busca escriure codi robust, reutilitzable i fàcil de depurar.
