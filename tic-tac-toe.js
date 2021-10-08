window.onload = () => {

    // Exercise 1 - Layout the board
    squares = setUpSquares();

}

function setUpSquares() {
    let squares = document.querySelectorAll("#board div")
    for (i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }
    return squares;
}
