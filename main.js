/*
IF mouseDown make clicked  
Change color of the div  
 */
let row = 16;
let collumn = 16;
let container = document.querySelector(".container");
let color = "#000000";
let drawing = false;

function colorItem(e) {
    if(drawing) {
        console.log("hello");
        e.target.style.backgroundColor = color;
        
    }
}

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



container.addEventListener("pointerdown", (e) => {
    drawing=true;
    e.preventDefault();
    
});
container.addEventListener("pointermove", colorItem);
window.addEventListener("pointerup", () => {
    drawing=false;
    
});

