
document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector(".cta-button");
  let clickCount = 0;

  var log = function () {
    ctaButton.textContent = "天才力を解放する";
  };

  ctaButton.addEventListener("click", () => {
    clickCount++;

    if (clickCount > 0) {
      ctaButton.textContent = "クリックしました!";
    }
  });
  ctaButton.addEventListener("mouseout", () => {
    clickCount = 0;
    window.setTimeout(log, 10);
  });
});
