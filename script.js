const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
// getContext is canvas method for context type
const ctx = canvas.getContext("2d");

let size = 10;
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

function updateSizeOnScreen() {
  // text in size span set to value of size variable
  sizeEl.innerText = size;
}

// listen for click on increase button
increaseBtn.addEventListener("click", () => {
  // if size is less than 50, add 5 to current size, otherwise stay at 50
  size < 50 ? (size += 5) : (size = 50);
  updateSizeOnScreen();
});

// listen for click on decrease button
decreaseBtn.addEventListener("click", () => {
  // if size is greater than 5, subtract 5 from current size, otherwise stay at 5
  size > 5 ? (size -= 5) : (size = 5);
  updateSizeOnScreen();
});

// listen for change on colorEl
colorEl.addEventListener("change", e => {
  // color becomes value from color picker
  color = e.target.value;
});

// listen for click on clear button
clearEl.addEventListener("click", () => {
  // clearRect method starting at 0, 0 | ending at full width and height of canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
