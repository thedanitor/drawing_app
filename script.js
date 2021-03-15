const canvas = document.getElementById("canvas");
// getContext is canvas method for context type
const ctx = canvas.getContext("2d");
// radius of circle or line width
let size = 20;
let color = "black";
let x;
let y;

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
    // thickness of line
    ctx.lineWidth = size;
    // stroke method to draw it
    ctx.stroke();
}