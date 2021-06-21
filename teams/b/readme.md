Prova sf academy

Esportare  in due file separati chiamati Field.js e Entity.js le seguenti due classi:

Field:
 ⁃ Il costruttore della classe deve accettare 3 parametri:
   ⁃ w: larghezza del campo 
   ⁃ h: altezza del campo
   ⁃ maxMoves: indica il numero di mosse massime che le entità possono fare nel field
 
⁃ Deve esporre una funzione draw che restituisca una stringa di h righe e per ogni riga w caratteri. Ogni carattere rappresenta una cella del campo: se nella cella non e’ presente nessuna entità il carattere deve essere uno spazio “ “,  se nella cella e’ presente un’entità il carattere deve essere un  punto “.” . Il carattere per il campo riga può essere indifferentemente “\n” o “\r\n”. Le coordinate 0 0 del campo sono nell’angolo alto sinistro dello schermo

 ⁃ Deve esporre una funzione countEntities che restituisca il numero di entity presenti nel field

Entity:
 ⁃ Il costruttore della classe deve accettare 3 argomenti: - 
   ⁃ field: un’istanza di Field
   ⁃ x: posizione x in cui l’entità si trova relativamente al Field
   ⁃ y: posizione y in cui l’entità si trova relativamente al Field
 
⁃ Deve esporre una funzione move che muove l’entità nel field. La funzione accetta 1 argomento direction di tipo int e può assumere i valori di:
   ⁃ 0: up
   ⁃ 1: right
   ⁃ 2: down
   ⁃ 3: left

Constraints:

 ⁃ Nel caso venga creata un’entità fuori dal campo o in una cella già occupata da un’altra entità il programma deve interrompersi con un errore
 ⁃ In caso di collisione, l’entità colpita viene eliminata dal campo e l’altra prenderà il suo posto
 ⁃ Ogni entità potrà muoversi al massimo maxMoves volte