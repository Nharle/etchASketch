/*
IF mouseDown make clicked  
Change color of the div  
 */
let size = 16;
let container = document.querySelector(".container");
let color = "#000000";
let drawing = false;
let resetBtn = document.querySelector("#reset");
let eraserBtn = document.querySelector("#erase");
let erase = false;
let slider = document.querySelector(".slide");
let sliderText = document.querySelector(".slideText");
let colorPicker = document.querySelector(".colorPicker");

function colorItem(e) {
    if(drawing) {
        
        e.target.style.backgroundColor = color;
        
    }
}
function resetPad() {
createPad(size);
}
function createPad(s){
container.replaceChildren();
for(let i =0; i < s; i++){
    let gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    container.appendChild(gridRow);
    for(let j=0; j<s;j++) {
         let gridItem = document.createElement("div");
         gridItem.classList.add("gridItem");
         gridRow.appendChild(gridItem);

    }
}
}
sliderText.textContent = `${size} x ${size}`;
createPad(size);

container.addEventListener("pointerdown", (e) => {
    drawing=true;
    e.preventDefault();
    
});
container.addEventListener("pointermove", colorItem);
container.addEventListener("pointerup", (e) => {
    e.target.style.backgroundColor = color; 
});
window.addEventListener("pointerup", () => {
    drawing=false;
    
});
resetBtn.addEventListener("click", resetPad);
slider.addEventListener("input", () => {
size = slider.value;
sliderText.textContent = `${size} x ${size}`;
createPad(size);
});
resetBtn.addEventListener("pointerdown", (e) =>  e.target.style.backgroundColor = "#9d9d9d");
resetBtn.addEventListener("pointerup", (e)=> e.target.style.backgroundColor = "#e0e0e0");
colorPicker.addEventListener("input", () => {
    color = colorPicker.value;
});
eraserBtn.addEventListener("click", (e) => {
    erase = !erase;
    if(erase){
        color = "#FFFFFF";
        e.target.style.backgroundColor = "#9d9d9d"
    }
    else {
        color = colorPicker.value;
        e.target.style.backgroundColor = "#e0e0e0";
        
    }
});
