//CLICK on button to generate a grid.
//addEventListener.
let pressStart = document.getElementById("start_button");
let container = document.querySelector(".container");
let markup = `<div class="square"></div>` ;
let cellsNumbers = 100 ;
pressStart.addEventListener("click", function ()
{
    for (let x = 0; x < cellsNumbers; x++)
    {
        container.insertAdjacentHTML("beforeend" , markup);
        
    }
});

//give to every cell a progressive number(1 - 100).


//FOR cycle for numbers.


//add to cells.


//CLICK on cell to give a console msg with the number.


//addEventListener on single cell.


//console.log