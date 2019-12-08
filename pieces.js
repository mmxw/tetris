class Piece {
  x;
  y;
  color;
  shape;
  ctx;

  constructor(ctx) {
    this.ctx = ctx;
    this.spawn();
  }

  spawn() {
    this.color = "blue";
    this.shape = [
      [2, 0, 0], 
      [2, 2, 2], 
      [0, 0, 0]
    ];

  // starting position 
  this.x = 3;
  this.y = 0;
  }
}

