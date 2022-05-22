function selection() {
    this.style.backgroundColor = "black";
    this.innerHTML = "X";
}

function reset() {
    let gameSquares = document.querySelectorAll(".gameSquare");
    gameSquares.forEach((div) => div.innerHTML = "");
    gameSquares.forEach((div) => div.style.backgroundColor = 'white');
}