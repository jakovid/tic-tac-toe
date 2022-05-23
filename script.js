//my module
// var game = {
//     gameSquares: document.querySelectorAll('.gameSquare'),
//     btns: document.querySelectorAll('.btn'),
//     turn: "X",

// };

//my OG code
//variable
const gameSquares = document.querySelectorAll(".gameSquare");
const btns = document.querySelectorAll(".btn");
let turn = "X";

//event listeners
gameSquares.forEach(div => {
    div.addEventListener('click', userPick)
})

btns.forEach(button => {
    button.addEventListener('click', symbolSelect)
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
        // this.classList = "selectedSquare";
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
    // gameSquares.forEach((div) => div.classList.remove("selectedSquare"));
}

function symbolSelect() {
    reset();
    turn = `${this.value}`;
}