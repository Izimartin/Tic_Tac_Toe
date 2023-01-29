const squares = document.querySelectorAll(".square");
const resetButton = document.querySelector("#reset");
let currentPlayer = "X";

for (const square of squares) {
  square.addEventListener("click", function () {
    if (square.textContent === "") {
      square.textContent = currentPlayer;
      const winner = checkWin();
      if (winner) {
        displayWinner(winner);
        return;
      }
      switchPlayer();
    }
  });
}

resetButton.addEventListener("click", resetBoard);

function checkWin() {
  // check rows
  for (let i = 0; i < 9; i += 3) {
    if (
      squares[i].textContent === currentPlayer &&
      squares[i + 1].textContent === currentPlayer &&
      squares[i + 2].textContent === currentPlayer
    ) {
      return currentPlayer;
    }
  }

  // check columns
  for (let i = 0; i < 3; i++) {
    if (
      squares[i].textContent === currentPlayer &&
      squares[i + 3].textContent === currentPlayer &&
      squares[i + 6].textContent === currentPlayer
    ) {
      return currentPlayer;
    }
  }

  // check diagonals
  if (
    squares[0].textContent === currentPlayer &&
    squares[4].textContent === currentPlayer &&
    squares[8].textContent === currentPlayer
  ) {
    return currentPlayer;
  }
  if (
    squares[2].textContent === currentPlayer &&
    squares[4].textContent === currentPlayer &&
    squares[6].textContent === currentPlayer
  ) {
    return currentPlayer;
  }

  return null;
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function displayWinner(winner) {
  alert(winner + " wins!");
}

function resetBoard() {
  for (const square of squares) {
    square.textContent = "";
  }
  currentPlayer = "X";
}
