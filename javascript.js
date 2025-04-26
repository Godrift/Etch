const container = document.querySelector(".container");
const button = document.querySelector("button");

const hoverSquare = function(e) {
        e.target.style.backgroundColor = "black";
    };
    

for (let i = 0; i < 16; i++) {
    const divColumn = document.createElement("div");
    divColumn.classList.add(`C${i}`,"Column");
    container.appendChild(divColumn);
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.add(`N${j}`, "square");
        div.addEventListener("mouseover", hoverSquare);
        divColumn.appendChild(div);
    }
}

const getNumber = function(){
    let number = prompt("Number of Squares per Row");

    if (number <= 100){
        return(number);
    }else {
        console.log("100 is maximum")
        getNumber();
    }
    
};

const createGrid = function(){
    const numSquares = getNumber();
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < numSquares; i++) {
    const divColumn = document.createElement("div");
    divColumn.classList.add(`C${i}`,"Column");
    container.appendChild(divColumn);
    for (let j = 0; j < numSquares; j++) {
        const div = document.createElement("div");
        div.classList.add(`N${j}`, "square");
        div.addEventListener("mouseover", hoverSquare);
        divColumn.appendChild(div);
    }
}
    
    
};

button.addEventListener("click", createGrid);
