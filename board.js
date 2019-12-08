class Board {
  grid;

  reset() {
    this.grid = this.getEmptyBoard();
  }
  getEmptyBoard() {
    return Array.from(
      {length: rows}, () => Array(cols).fill(0)
    );
  }
}

let board = new Board()

function play() {
  board.reset();
  console.table(board.grid);
}

