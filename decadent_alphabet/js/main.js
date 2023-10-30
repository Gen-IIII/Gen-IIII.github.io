const alphabet = document.querySelector(".alphabet");
const randomAlphabet = () =>
  String.fromCharCode(65 + Math.floor(Math.random() * 26));
alphabet.innerText = randomAlphabet();

const canvas = document.getElementById('noise');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createNoise() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 255; // Increased noise intensity
    data[i] = data[i + 1] = data[i + 2] = noise;
    data[i + 3] = 10; // Increased noise opacity
  }

  ctx.putImageData(imageData, 0, 0);
}

function animateNoise() {
  createNoise();
  setTimeout(() => requestAnimationFrame(animateNoise), 100); // Reduced animation frequency
}

animateNoise();