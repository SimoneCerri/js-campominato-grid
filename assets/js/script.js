let pressStart = document.getElementById("start_button");
let difficyltyEl = document.getElementById("difficulty");
//console.log(difficyltyEl);
let container = document.querySelector(".container");
let markup = `<div class="square"></div>`;
let cellsNumbers = 100;
let arrayBomb = [];
let difficultyBomb;
let scoreNumber = document.querySelector(".score");
let squareEvents = []; // Array che fara riferimento agli eventi associati ad ogni square

//CLICK on button to generate a grid.
pressStart.addEventListener("click", function () {
    let difficultyValue = difficyltyEl.value;
    //console.log(difficultyValue);
    if (difficultyValue === "easy") {
        cellsNumbers = 49;
        difficultyBomb = 5;

    }
    else if (difficultyValue === "medium") {
        cellsNumbers = 81;
        difficultyBomb = 16;

    }
    else if (difficultyValue === "hard") {
        cellsNumbers = 100;
        difficultyBomb = 50;
    }
    arrayBomb = [];
    getBombs(difficultyBomb);
    createGrid(cellsNumbers);
    //console.log(arrayBomb);  
});

//make a function to reuse.
// total clicks
let clicks = 0;
function createGrid(cellsNumbers) {
    //clean the container.
    container.innerHTML = "";
    // total clicks
    clicks = 0;


    for (let x = 0; x < cellsNumbers; x++) {
        container.insertAdjacentHTML("beforeend", markup);
    };

    //give to every cell a progressive number(1 - 100).
    //add to cells.
    let squareS = document.getElementsByClassName("square");
    //console.log(squareS);
    for (let x = 0; x < squareS.length; x++) {
        const square = squareS[x];
        square.style.width = `calc(100% / ${Math.sqrt(cellsNumbers)})`
        //console.log(square);

        //FOR cycle for numbers.
        square.innerHTML = x + 1;

        //CLICK on cell to give a console msg with the number.
        squareEvents[x] = square;
        squareEvents[x].addEventListener("click", createSquare);


    }
};


function createSquare(e)
{
    //console.log(x + 1);

    //square = squareEvents[x];
    const square = e.target
    let findBomb = Number(square.innerHTML);

    if (!arrayBomb.includes(findBomb)) {
        //ELSE cells color blue / continue the game.
        square.classList.toggle("change_color_2");
        clicks++;
        //console.log(clicks);
        scoreNumber.innerHTML = ("Score: " + clicks);
    } else if (arrayBomb.includes(findBomb)) {
        //IF cells have "bomb-number".
        //bomb and red color / end game.
        square.classList.toggle("change_color");
        setTimeout(function () {
            alert("YOU LOSE and you score: " + clicks + " points.");
        }, 500);

        //removeEvents();
        console.log(squareEvents)
        for (i = 0; i < squareEvents.length; i++) {
            console.log(squareEvents[i])
            squareEvents[i].removeEventListener('click', createSquare);
        }
        //createGrid(cellsNumbers);
        //container.innerHTML = "";
    }

    //console.log(cellsNumbers - arrayBomb.length);
    if (clicks == (cellsNumbers - arrayBomb.length)) {
        //console.log("finish" , clicks);
        prompt(`YOU WIN ( score: ${clicks} ), let me know your name: `);
        /**
         * removeAllClicksEvents(){
         * square.removeEventListener("click")
         * }
         */
        /* square.removeEventListener("click",function()
        {
            
        }); */
        /* removeAllClickEvents(); */
        /* function removeAllClickEvents()
        {
            
        } */
        for (i = 0; i < squareEvents.length; i++) {
            console.log(squareEvents[i])
            squareEvents[i].removeEventListener('click', createSquare);
        }
    }

}

//remove the event so can't click anymore
function removeEvents() {
    //console.log(squareEvents)
    for (i = 0; i < squareEvents.length; i++) {
        squareEvents[i].removeEventListener('click', createSquare);
    }
}

//function random numbers.
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

//generate 16 random numbers(different) to put in arrayBomb.
function getBombs(difficultyBomb) {
    while (arrayBomb.length < difficultyBomb) {
        let bomb = getRandomNumber(cellsNumbers, 1);
        console.log(bomb);
        if (!arrayBomb.includes(bomb)) {
            arrayBomb.push(bomb);
        }
    }
}