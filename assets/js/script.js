let pressStart = document.getElementById("start_button");
let difficyltyEl = document.getElementById("difficulty");
//console.log(difficyltyEl);
let container = document.querySelector(".container");
let markup = `<div class="square"></div>`;
let cellsNumbers = 100;
let arrayBomb = [];
let difficultyBomb;

//CLICK on button to generate a grid.
pressStart.addEventListener("click", function ()
{       
    let difficultyValue = difficyltyEl.value;
    //console.log(difficultyValue);
    if (difficultyValue === "easy")
    {
        cellsNumbers = 49;
        difficultyBomb = 5;
        arrayBomb = [];
        getBombs(difficultyBomb);
        createGrid(cellsNumbers); 
    }
    else if (difficultyValue === "medium")
    {
        cellsNumbers = 81;
        difficultyBomb = 16;
        arrayBomb = [];
        getBombs(difficultyBomb);
        createGrid(cellsNumbers);
    }
    else if (difficultyValue === "hard")
    {
        cellsNumbers = 100;
        difficultyBomb = 50;
        arrayBomb = [];
        getBombs(difficultyBomb);
        createGrid(cellsNumbers);
    }
    console.log(arrayBomb);  
});

//make a function to reuse.
function createGrid(cellsNumbers)
{
    //clean the container.
    container.innerHTML = "";
    // total clicks
    let clicks = 0;
    
    
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
        square.style.width = `calc(100% / ${Math.sqrt(cellsNumbers)})`
        //console.log(square);

        //FOR cycle for numbers.
        square.innerHTML = x + 1;

        //CLICK on cell to give a console msg with the number.
        
        square.addEventListener("click", function ()
        {
            //console.log(x + 1);
            let findBomb = Number(square.innerHTML);

            if (!arrayBomb.includes(findBomb))
            {
                //ELSE cells color blue / continue the game.
                square.classList.toggle("change_color_2");
                clicks++;
                console.log(clicks);
            }
            else if (arrayBomb.includes(findBomb))
            {
                //IF cells have "bomb-number".
                //bomb and red color / end game.
                square.classList.toggle("change_color");
                setTimeout(function () {
                    alert("YOU LOSE");
                }, 500);

                createGrid(cellsNumbers);
                //container.innerHTML = "";
            }
            
            //console.log(cellsNumbers - arrayBomb.length);
            if (clicks == (cellsNumbers - arrayBomb.length))
            {
                console.log("finish" , clicks);
                promt('Hai vinto, scrivi il tuo nome: ')
                /**
                 * removeAllClicksEvents(){
                 * square.removeEventListener("click")
                 * }
                 */
            }
            
        });
    } 
};

//function random numbers.
function getRandomNumber(min, max)
{
    return Math.round(Math.random() * (max - min) + min);
};

//generate 16 random numbers(different) to put in arrayBomb.
function getBombs(difficultyBomb)
{
    while (arrayBomb.length < difficultyBomb)
    {
        let bomb = getRandomNumber(cellsNumbers,1);
        //console.log(bomb);
        if (!arrayBomb.includes(bomb))
        {
            arrayBomb.push(bomb);
        }
    }
}
//END GAME:
//max numbers - bomb numbers.
//bomb clicked.
//ALERT:
//win + number of try/clicks.
//lose.
