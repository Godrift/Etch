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

    if (number <= 100 || number <= 0){
        return(number);
    }else {
        return getNumber();
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
        div.classList.add(`N${j}`, "squareNew");
        div.style.backgroundColor = "grey";

        const divWidth = (960*59/60)/numSquares;

        console.log(divWidth);
        div.style.height = `${divWidth}px`;
        div.style.width = `${divWidth}px`;
        div.style.margin = `${(960/60)/numSquares}px`;


        div.addEventListener("mouseover", hoverSquare);
        divColumn.appendChild(div);
    }
}


    
    
};

button.addEventListener("click", createGrid);
