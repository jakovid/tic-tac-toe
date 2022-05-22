//variable
const gameSquares = document.querySelectorAll(".gameSquare");
let turn = "X";

//event listeners
gameSquares.forEach(div => {
    div.addEventListener('click', userPick)
})

//functions
function userPick(e) {

    let playable = true;

    if (this.innerHTML === " "){
        playable = true;
    } else {
        playable = false;
    }
    
    if (e.type === "click" && playable) {
        this.innerHTML = turn;
    }

    if (!playable){
    } else if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    }
}

function reset() {
    gameSquares.forEach((div) => div.innerHTML = " ");
    gameSquares.forEach((div) => div.style.backgroundColor = 'white');
}