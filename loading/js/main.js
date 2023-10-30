const canvas = document.getElementById("plantCanvas");
const ctx = canvas.getContext("2d");
const loadingContainer = document.getElementById("loading-container");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function randomColor() {
  return `hsl(${Math.random() * 360}, 50%, 50%)`;
}

function drawBranch(x, y, angle, length, depth) {
  if (depth === 0) return;

  ctx.strokeStyle = randomColor();
  ctx.lineWidth = depth;
  ctx.beginPath();
  ctx.moveTo(x, y);

  const endX = x + length * Math.cos(angle);
  const endY = y + length * Math.sin(angle);

  ctx.lineTo(endX, endY);
  ctx.stroke();

  drawBranch(endX, endY, angle - Math.PI / 4, length * 0.7, depth - 1);
  drawBranch(endX, endY, angle + Math.PI / 4, length * 0.7, depth - 1);
}

function drawRandomPlant() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const x = canvas.width / 2;
  const y = canvas.height / 2;
  const angle = -Math.PI / 2;
  const length = Math.random() * 50 + 100;
  const depth = Math.floor(Math.random() * 3) + 4;

  drawBranch(x, y, angle, length, depth);
}

let lastUpdateTime = 0;
const updateInterval = 500; // Update every 0.5 seconds

function loop(currentTime) {
  requestAnimationFrame(loop);

  if (currentTime - lastUpdateTime > updateInterval) {
    drawRandomPlant();
    lastUpdateTime = currentTime;
  }
}

loop(0);
