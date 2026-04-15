let row = 16;
let collumn = 16;
let container = document.querySelector(".container");

for(let i =0; i < row; i++){
    let gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    container.appendChild(gridRow);
    for(let j=0; j<collumn;j++) {
         let gridItem = document.createElement("div");
         gridItem.classList.add("gridItem");
         gridRow.appendChild(gridItem);

    }
}