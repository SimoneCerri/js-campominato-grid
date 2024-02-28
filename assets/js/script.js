//CLICK on button to generate a grid.

let pressStart = document.getElementById("start_button");
let container = document.querySelector(".container");
let markup = `<div class="square"></div>`;
let cellsNumbers = 100;

//addEventListener.
pressStart.addEventListener("click", function ()
{   
    for (let x = 0; x < cellsNumbers; x++)
    {
        container.insertAdjacentHTML("beforeend", markup);
    };
    //give to every cell a progressive number(1 - 100).
    //FOR cycle for numbers.
    //add to cells.
    let squareS = document.getElementsByClassName("square");
    console.log(squareS);
    for (let x = 0; x < squareS.length; x++)
    {
        const square = squareS[x];
        console.log(square);
        square.innerHTML = "1";
    }
});


//CLICK on cell to give a console msg with the number.


//addEventListener on single cell.


//console.log