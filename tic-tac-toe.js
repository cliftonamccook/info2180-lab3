window.onload = () => {

    // Exercise 1 - Layout the board
    squares = setUpSquares();

    //Exercise 2 - Add an X or O to a square when clicked
    var board = [[], [], []];

    var i = 0;
    for (r = 0; r < 3; r++) {
        for (j = 0; j < 3; j++) {
            while (i < 9) {
                board[r][j] = squares[i];
                board[r][j].classList.add("X");
                board[r][j].classList.add("O");
                i++;
                break;
            }
        }
    }

    var last = '';
    var state = [];

    board.forEach(element => {
        for (i = 0; i < 3; i++) {
            element[i].addEventListener('click', function () {
                if (last == '') {
                    this.classList.remove("O");
                    this.innerHTML = "X";
                    last = 'X';
                    state.push('X');
                }
                if (this.innerHTML == '' && last == 'X') {
                    this.classList.remove("X");
                    this.innerHTML = "O";
                    last = 'O';
                    state.push('O');
                }
                if (this.innerHTML == '' && last == 'O') {
                    this.classList.remove("O");
                    this.innerHTML = "X";
                    last = 'X';
                    state.push('X');
                }
            });
        }
    });

    //Exercise 3 - Change the style when you move your mouse over a square
    board.forEach(element => {
        for (i = 0; i < 3; i++) {
            element[i].addEventListener('mouseover', function () {
                this.classList.add("hover");
            });
            element[i].addEventListener('mouseout', function () {
                this.classList.remove("hover");
            });
        }
    });

    //Exercise 4 - Check for the winner and update the status
    var checkGameState = setInterval(function () {
        let outcome = checkForWinner(board);
        if (typeof outcome !== "undefined") {
            switch (outcome) {
                case ('X is the winner!'):
                    document.querySelector("#status").innerHTML = 'Congratulations! X is the Winner!';
                    document.querySelector("#status").classList.add("you-won");
                    break;
                case ('O is the winner!'):
                    document.querySelector("#status").innerHTML = 'Congratulations! O is the Winner!';
                    document.querySelector("#status").classList.add("you-won");
                    break;
            }

            clearInterval(checkGameState);
        }
    }, 500);

    //Exercise 5 - Restart the game
    resetButton = document.querySelector(".btn");
    resetButton.addEventListener('click', () => {
        location.reload();
    });

    //Exercise 6 - Disallow Cheating
    //Players cannot change an X to an O or vice versa due to method used

}

function setUpSquares() {
    let squares = document.querySelectorAll("#board div")
    for (i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }
    return squares;
}

function checkForWinner(board) {
    let x_won = "X is the winner!";
    let o_won = "O is the winner!";
    
    if (board[0][0].innerHTML == 'X' && board[1][1].innerHTML == 'X' && board[2][2].innerHTML == 'X') {
        return x_won;
    }
    if (board[0][2].innerHTML == 'O' && board[1][1].innerHTML == 'O' && board[2][0].innerHTML == 'O') {
        return o_won;
    }
    
    for(r=0; r<3; r++) {
        if(board[r][0].innerHTML=='X' && board[r][1].innerHTML=='X' && board[r][2].innerHTML=='X') {
            return x_won;
        }
        if(board[r][0].innerHTML=='O' && board[r][1].innerHTML=='O' && board[r][2].innerHTML=='O') {
            return o_won
        }
    }

    for(c=0; c<3; c++) {
        if(board[0][c].innerHTML=='X' && board[1][c].innerHTML=='X' && board[2][c].innerHTML=='X') {
            return x_won;
        }
        if(board[0][c].innerHTML=='O' && board[1][c].innerHTML=='O' && board[2][c].innerHTML=='O') {
            return o_won
        }
    }
}
