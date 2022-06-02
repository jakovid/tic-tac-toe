(function() {
    var gameModule = {
        gameBoard: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        turn: "X",
        hasWinner: false,
        init: function() {
            this.cacheDom();
            this.renderBoard();
            this.bindEvents();
        },
        cacheDom: function() {
            this.el = document.getElementById('gameModule');
            this.gameSquares = this.el.querySelectorAll('.gameSquare');
            this.buttons = this.el.querySelectorAll('.btn');
            this.resetButton = this.el.querySelector('.restart');
            this.results = this.el.querySelector('.results');
        },
        bindEvents: function(){
            this.resetButton.onclick = this.resetGame.bind(this);
            for (let i = 0; i < 9; i++) {
                this.gameSquares[i].onclick = this.userPick;
            };
            this.buttons[0].onclick = this.symbolSelect;
            this.buttons[1].onclick = this.symbolSelect;
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
            this.hasWinner = false;
            this.renderBoard();
        },
        symbolSelect: function(){
            gameModule.turn = this.getAttribute('value');
            gameModule.resetGame();
            gameModule.showTurn();
        },
        userPick: function() {
            if (this.innerHTML === " " && gameModule.hasWinner === false) {
                let index = this.getAttribute('value');
                gameModule.gameBoard[index] = gameModule.turn;
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
            };
            gameModule.showTurn();
        },
        showTurn: function() {
            if (this.buttons[0].getAttribute('value') === this.turn){
                this.buttons[0].style.backgroundColor = "green";
                this.buttons[1].style.backgroundColor = "gray";
                this.results.innerHTML = `It is X's turn`
            } else {
                this.buttons[1].style.backgroundColor = "green";
                this.buttons[0].style.backgroundColor = "gray";
                this.results.innerHTML = `It is O's turn`
            }
        },
        winCheck: function() {
            //top corner check
            if 
            (((this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[0] === this.gameBoard[2])
            || (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[0] === this.gameBoard[6]))
            && this.gameBoard[0] != " ") {
                this.results.innerHTML = `${this.gameBoard[0]} wins!`;
                this.hasWinner = true;
            } 
            //bottom corner check
            else if
            (((this.gameBoard[8] === this.gameBoard[7] && this.gameBoard[8] === this.gameBoard[6])
            || (this.gameBoard[8] === this.gameBoard[5] && this.gameBoard[8] === this.gameBoard[2]))
            && this.gameBoard[8] != " ") {
                this.results.innerHTML = `${this.gameBoard[8]} wins!`;
                this.hasWinner = true;
            }
            //middle check
            else if
            (((this.gameBoard[4] === this.gameBoard[1] && this.gameBoard[4] === this.gameBoard[7])
            || (this.gameBoard[4] === this.gameBoard[5] && this.gameBoard[4] === this.gameBoard[3])
            || (this.gameBoard[4] === this.gameBoard[0] && this.gameBoard[4] === this.gameBoard[8])
            || (this.gameBoard[4] === this.gameBoard[2] && this.gameBoard[4] === this.gameBoard[6]))
            && this.gameBoard[4] != " ") {
                this.results.innerHTML = `${this.gameBoard[4]} wins!`;
                this.hasWinner = true;
            }
            //tie check
            else if
            (this.gameBoard.includes(" ") === false ){
                this.results.innerHTML = `Its a cat game!`;
            }
        }

    };

    gameModule.init();
})()