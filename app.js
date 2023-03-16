const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

const clearButton = document.getElementById("clearButton");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");

let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseout", () => {
  isDrawing = false;
});

clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorPicker.addEventListener("input", () => {
  ctx.strokeStyle = colorPicker.value;
});

brushSize.addEventListener("input", () => {
  ctx.lineWidth = brushSize.value;
});

// Set initial brush color and size
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = brushSize.value;
// Set lineJoin and lineCap properties
ctx.lineJoin = "round";
ctx.lineCap = "round";