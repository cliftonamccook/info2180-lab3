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

}

function setUpSquares() {
    let squares = document.querySelectorAll("#board div")
    for (i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }
    return squares;
}
