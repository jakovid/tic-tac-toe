(function() {
    var gameModule = {
        gameBoard: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        turn: "X",
        init: function() {
            this.cacheDom();
            this.renderBoard();
            this.bindEvents();
        },
        cacheDom: function() {
            this.el = document.getElementById('gameModule');
            this.gameSquares = this.el.querySelectorAll('.gameSquare');
            this.buttons = this.el.querySelectorAll('.btn');
            this.game = this.el.querySelector('game');
            this.resetButton = this.el.querySelector('.restart');
        },
        bindEvents: function(){
            this.resetButton.onclick = this.resetGame.bind(this);
            for (let i = 0; i < 9; i++) {
                this.gameSquares[i].onclick = this.userPick;
            };
        },
        renderBoard: function(){
            for (let i = 0; i < 9; i++) {
                this.gameSquares[i].innerHTML = this.gameBoard[i];
            }
        },
        resetGame: function() {
            for (let i = 0; i < 9; i++) {
                this.gameBoard[i] = " ";
            };
            this.renderBoard();
        },
        userPick: function() {
            if (this.innerHTML === " ") {
                let value = this.getAttribute('value');
                gameModule.gameBoard[value] = gameModule.turn;
                gameModule.changeTurn();
                gameModule.renderBoard();
                gameModule.winCheck();
            };
        },
        changeTurn: function() {
            if (this.turn === "X") {
                 this.turn = "O";
            } else {
                this.turn = "X";
            }
        },
        winCheck: function() {
            //top corner check
            if 
            (((this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[0] === this.gameBoard[2])
            || (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[0] === this.gameBoard[6]))
            && this.gameBoard[0] != " ") {
                console.log(`${this.gameBoard[0]} wins!`);
                this.resetGame();
            } 
            //bottom corner check
            else if
            (((this.gameBoard[8] === this.gameBoard[7] && this.gameBoard[8] === this.gameBoard[6])
            || (this.gameBoard[8] === this.gameBoard[5] && this.gameBoard[8] === this.gameBoard[2]))
            && this.gameBoard[8] != " ") {
                console.log(`${this.gameBoard[8]} wins!`);
                this.resetGame();
            }
            //middle check
            else if
            (((this.gameBoard[4] === this.gameBoard[1] && this.gameBoard[4] === this.gameBoard[7])
            || (this.gameBoard[4] === this.gameBoard[5] && this.gameBoard[4] === this.gameBoard[3])
            || (this.gameBoard[4] === this.gameBoard[0] && this.gameBoard[4] === this.gameBoard[8])
            || (this.gameBoard[4] === this.gameBoard[2] && this.gameBoard[4] === this.gameBoard[6]))
            && this.gameBoard[4] != " ") {
                console.log(`${this.gameBoard[4]} wins!`);
                this.resetGame();
            }
            //tie check
            else if
            (this.gameBoard.includes(" ") === false ){
                console.log("cat game!");
                this.resetGame();
            }
        }

    };

    gameModule.init();
})()

//variable
// const gameSquares = document.querySelectorAll(".gameSquare");
// // const gameSquaresHTML = [document.querySelectorAll(".gameSquare")].map(e=>e.innerHTML);
// const btns = document.querySelectorAll(".btn");
// // let turn = "X";

// //event listeners
// gameSquares.forEach(div => {
//     div.addEventListener('click', userPick)
// })

// btns.forEach(button => {
//     button.addEventListener('click', symbolSelect)
// })

// //functions
// function userPick(e) {

//     let playable = true;

//     if (this.innerHTML === " "){
//         playable = true;
//     } else {
//         playable = false;
//     }
    
//     if (e.type === "click" && playable) {
//         this.innerHTML = turn;
//     }

//     if (!playable){
//     } else if (turn === "X") {
//         turn = "O";
//     } else {
//         turn = "X";
//     }
//     winCheck();
//     // console.dir(gameSquaresHTML);
// }

// function reset() {
//     gameSquares.forEach((div) => div.innerHTML = " ");
// }

// function symbolSelect() {
//     reset();
//     turn = `${this.value}`;
// }

// function winCheck(){
//     let r1c1 = document.getElementById("1a").innerHTML;
//     let r1c2 = document.getElementById("2a").innerHTML;
//     let r1c3 = document.getElementById("3a").innerHTML;
//     let r2c1 = document.getElementById("1b").innerHTML;
//     let r2c2 = document.getElementById("2b").innerHTML;
//     let r2c3 = document.getElementById("3b").innerHTML;
//     let r3c1 = document.getElementById("1c").innerHTML;
//     let r3c2 = document.getElementById("2c").innerHTML;
//     let r3c3 = document.getElementById("3c").innerHTML;
//     let g = [r1c1,r1c2,r1c3,r2c1,r2c2,r2c3,r3c1,r3c2,r3c3];

//     //top corner win check
//     if
//         (((g[0] === g[1] && g[0] === g[2]) 
//         || g[0] === g[3] && g[0] === g[6]) 
//         && g[0] != " "
//         ) {
//         console.log("win!");
//         reset();
//         }
//     //check bottom corner win 
//     else if 
//         (((g[8] === g[7] && g[8] === g[6]) 
//         || g[8] === g[5] && g[8] === g[2]) 
//         && g[8] != " "
//         ){
//         console.log("win!");
//         reset();
//     }
//     //check center win
//     else if
//         (((g[4] === g[3] && g[4] === g[5]) //center row win
//         || g[4] === g[1] && g[4] === g[7] // center column win
//         || g[4] === g[0] && g[4] === g[8] // top left diagonal win
//         || g[4] === g[2] && g[4] === g[6]) // top right diagonal win 
//         && g[4] != " "
//     ){
//         console.log("win!");
//         reset();
//     }
//     else if
//         (g.includes(" ") === false ){
//         console.log("cat game!");
//         reset();
//         }

    
// }