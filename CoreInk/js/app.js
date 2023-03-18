const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

const clearButton = document.getElementById("clearButton");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");

// Add tooltip and brushPreview elements
const tooltip = document.getElementById("tooltip");
const brushPreview = document.getElementById("brushPreview");

// Get toolbar elements and set title attributes
const toolbar = document.querySelector(".toolbar");
const toolbarElements = toolbar.querySelectorAll("button, input, label");
clearButton.title = "Clear canvas";
colorPicker.title = "Choose color";
brushSize.title = "Adjust brush size";
let isDrawing = false;

const undoButton = document.getElementById("undoButton");
const redoButton = document.getElementById("redoButton");

const canvasContainer = document.createElement("div");
canvasContainer.classList.add("canvas-container");
canvas.parentNode.insertBefore(canvasContainer, canvas);
canvasContainer.appendChild(canvas);
canvasContainer.appendChild(gridOverlay);

let drawHistory = [];
let historyIndex = -1;

function saveCanvasState() {
  historyIndex++;
  drawHistory.splice(historyIndex);
  drawHistory.push(canvas.toDataURL());
}

function loadCanvasState(index) {
  const img = new Image();
  img.src = drawHistory[index];
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };
}


// Display tooltip when hovering over toolbar elements
toolbarElements.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    tooltip.innerHTML = e.target.title;
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";
    tooltip.classList.remove("hidden");
  });

  element.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = e.pageY + "px";
  });

  element.addEventListener("mouseout", () => {
    tooltip.classList.add("hidden");
  });
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  brushPreview.style.left = e.pageX - brushSize.value / 2 + "px";
  brushPreview.style.top = e.pageY - brushSize.value / 2 + "px";
  brushPreview.style.width = brushSize.value + "px";
  brushPreview.style.height = brushSize.value + "px";
  brushPreview.style.backgroundColor = colorPicker.value;
  if (isDrawing) {
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = e.pageY + "px";
    tooltip.innerHTML = `Size: ${brushSize.value}px<br>Color: ${colorPicker.value}`;
    tooltip.classList.remove("hidden");
    brushPreview.classList.remove("hidden");
  } else {
    tooltip.classList.add("hidden");
    brushPreview.classList.add("hidden");
  }
  const rect = canvas.getBoundingClientRect();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  saveCanvasState();
});

undoButton.addEventListener("click", () => {
  if (historyIndex > 0) {
    historyIndex--;
    loadCanvasState(historyIndex);
  }
});

redoButton.addEventListener("click", () => {
  if (historyIndex < drawHistory.length - 1) {
    historyIndex++;
    loadCanvasState(historyIndex);
  }
});

// Initial canvas state
saveCanvasState();

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
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function fadeInCanvas() {
  canvas.style.animation = "none";
  canvas.style.opacity = "1";
}

function fadeOutCanvas(callback) {
  canvas.style.animation = "fade-out 0.5s forwards";
  setTimeout(() => {
    callback();
    fadeInCanvas();
  }, 500);
}
clearButton.addEventListener("click", () => {
  fadeOutCanvas(() => {
    clearCanvas();
    saveCanvasState();
  });
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


function resizeCanvas() {
  canvas.width = window.innerWidth * 0.6;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial resize



