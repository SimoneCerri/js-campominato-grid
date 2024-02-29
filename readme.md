## !Quest! ##

- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
- Ogni cella ha un numero progressivo, da 1 a 100.
- Ci saranno quindi 10 caselle per ognuna delle 10 righe.
- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
    (Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali)
- In seguito l'utente clicca su una cella:
    - se il numero è presente nella lista dei numeri generati
        - abbiamo calpestato una fungo
        - la cella si colora di rosso e la partita termina.
    - Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
- La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

Bonus
- Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


## ?Solution? ##
- CLICK on button to generate a grid.
    - button on html.
    - addEventListener.
- give to every cell a progressive number (1-100).
    - FOR cycle for numbers.
    - add to cells.
- CLICK on cell to give a console msg with the number.
    - addEventListener on single cell.
    - console.log
- generate 16 random numbers (different) to put in arrayBomb.
- CLICK on cell.
    - IF cells have "bomb-number".
        - bomb and red color / end game.
    - ELSE cells color blue / continue the game.
- END GAME:
    - max numbers - bomb numbers.
    - bomb clicked.
- ALERT:
    - win + number of try/clicks.
    - lose.

BONUS
- add a select with 3 difficulties
    - 1: 100 cells (10x10).
    - 2: 81 cells (9x9).
    - 3: 49 cells (7x7).


