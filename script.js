const canvas = document.getElementById("canvas");
// getContext is canvas method for context type
const ctx = canvas.getContext("2d");

let size = 20;
// by default isPressed is false
let isPressed = false;
let color = "black";
let x;
let y;

// listen for mousedown on canvas
canvas.addEventListener("mousedown", e => {
  // change isPressed to true
  isPressed = true;
  // x and y are coordinates where mouse is pressed
  x = e.offsetX;
  y = e.offsetY;
});

// listen for mouseup on canvas
canvas.addEventListener("mouseup", e => {
  // change isPressed to false
  isPressed = false;
  // x and y are coordinates undefined
  x = undefined;
  y = undefined;
});

// listen for mousemove on canvas
canvas.addEventListener("mousemove", e => {
  // if isPressed is true
  if (isPressed) {
    // give x2,y2 current position of cursor
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    // draw a circle at x2, y2
    drawCircle(x2, y2);
    // draw a line from x, y to x2, y2
    drawLine(x, y, x2, y2);
    // set x and y to new current position
    x = x2;
    y = y2;
  }
});

// x, y values are starting coordinates
function drawCircle(x, y) {
  ctx.beginPath();
  // x | y | radius | start angle | end angle
  ctx.arc(x, y, size, 0, Math.PI * 2);
  // circle color
  ctx.fillStyle = color;
  // fill method to draw it
  ctx.fill();
}

// x1,y1 are moveTo | x2,y2 are lineTo
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  // move to starting position of line
  ctx.moveTo(x1, y1);
  // make line from x1,y1 to x2,y2
  ctx.lineTo(x2, y2);
  // line color
  ctx.strokeStyle = color;
  // thickness of line is diameter of circle
  ctx.lineWidth = size * 2;
  // stroke method to draw it
  ctx.stroke();
}
