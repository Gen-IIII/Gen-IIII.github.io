document.addEventListener("DOMContentLoaded", () => {
  const layers = document.querySelectorAll(".layer");
  const shapeContainer = document.querySelector(".shape-container");
  const shape = document.querySelector(".shape");
  const kanjiContainer = document.querySelector(".kanji-container");
  const kanjiElements = kanjiContainer.children;
  const overlay = document.querySelector(".overlay");

  // Parallax scrolling effect
  window.addEventListener("scroll", () => {
    layers.forEach((layer) => {
      const speed = parseFloat(layer.getAttribute("data-speed"));
      layer.style.transform = `translate3d(0, ${
        speed * window.pageYOffset
      }px, 0)`;
    });
  });


  // Shape manipulation
  shapeContainer.addEventListener("mousedown", (e) => {
    // Add logic to manipulate shape points
  });

  // Kanji hover effect
  for (let i = 0; i < kanjiElements.length; i++) {
    kanjiElements[i].addEventListener("mouseover", () => {
      overlay.style.display = "block";
    });

    kanjiElements[i].addEventListener("mouseout", () => {
      overlay.style.display = "none";
    });
  }

  // Dynamic elements based on mouse operation or scrolling
  window.addEventListener("mousemove", (e) => {
    // Add logic for dynamic elements
  });
});
