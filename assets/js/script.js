//CLICK on button to generate a grid.

let pressStart = document.getElementById("start_button");
let difficyltyEl = document.getElementById("difficulty");
//console.log(difficyltyEl);
let container = document.querySelector(".container");
let markup = `<div class="square"></div>`;
let cellsNumbers = 100;
let arrayBomb = [];
let difficultyBomb;

//addEventListener.
pressStart.addEventListener("click", function ()
{   
    container.innerHTML = "" ; //clean the container.

    let difficultyValue = difficyltyEl.value;
    //console.log(difficultyValue);
    if (difficultyValue === "easy")
    {
        cellsNumbers = 49;
        createGrid(cellsNumbers);
        difficultyBomb = 5;
        arrayBomb = [];
        getBombs(difficultyBomb);
        
        
    }
    else if (difficultyValue === "medium")
    {
        cellsNumbers = 81;
        createGrid(cellsNumbers);
        difficultyBomb = 16;
        arrayBomb = [];
        getBombs(difficultyBomb);
    }
    else if (difficultyValue === "hard")
    {
        cellsNumbers = 100;
        createGrid(cellsNumbers);
        difficultyBomb = 50;
        arrayBomb = [];
        getBombs(difficultyBomb);
    }

    
    
    
    //generate 16 random numbers(different) to put in arrayBomb.
    
    console.log(arrayBomb);
    
});


//make a function to reuse
function createGrid(cellsNumbers)
{
   for (let x = 0; x < cellsNumbers; x++)
    {
        container.insertAdjacentHTML("beforeend", markup);
    };

    //give to every cell a progressive number(1 - 100).
    //add to cells.
    let squareS = document.getElementsByClassName("square");
    //console.log(squareS);
    for (let x = 0; x < squareS.length; x++)
    {
        const square = squareS[x];
        //console.log(square);
        //FOR cycle for numbers.
        square.innerHTML = x + 1;
        //CLICK on cell to give a console msg with the number.
        //addEventListener on single cell.
        square.addEventListener("click", function ()
        {
            //console.log(x + 1);
            square.classList.toggle("change_color");
        });
    } 
};

//function random numbers
function getRandomNumber(min, max)
{
    return Math.round(Math.random() * (max - min) + min);
};

function getBombs(difficultyBomb)
{
    while (arrayBomb.length < difficultyBomb)
    {
        let bomb = getRandomNumber(cellsNumbers,1);
        console.log(bomb);
        if (!arrayBomb.includes(bomb))
        {
            arrayBomb.push(bomb);
        }
    }
}

//CLICK on cell.
//IF cells have "bomb-number".
//bomb and red color / end game.
//ELSE cells color blue / continue the game.
//END GAME:
//max numbers - bomb numbers.
//bomb clicked.
//ALERT:
//win + number of try/clicks.
//lose.