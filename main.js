const canvas = document.getElementById("board")
const ctx = canvas.getContext("2d")

// calculate size of canvas from constants
ctx.canvas.width = cols * blockSize
ctx.canvas.height = rows * blockSize 

// scale blocks
ctx.scale(blockSize, blockSize)