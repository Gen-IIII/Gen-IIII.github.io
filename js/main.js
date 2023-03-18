document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector(".close-ticker");
  const announcementTicker = document.querySelector(".announcement-ticker");
  const thinTicker = document.querySelector(".thin-ticker");
  const heroSection = document.querySelector(".hero");
  const stickyContainer = document.querySelector(".sticky-container");

  function adjustHeroHeight() {
    const stickyContainerHeight = stickyContainer.offsetHeight;
    heroSection.style.height = `calc(100vh - ${stickyContainerHeight}px)`;
  }

  adjustHeroHeight(); // Adjust the height initially

  closeButton.addEventListener("click", function () {
    announcementTicker.style.display = "none";
    thinTicker.style.display = "flex";
    setTimeout(adjustHeroHeight, 50); // Adjust the height after closing the ticker
  });
  thinTicker.addEventListener("click", function () {
    announcementTicker.style.display = "block";
    thinTicker.style.display = "none";
    setTimeout(adjustHeroHeight, 50); // Adjust the height after opening the ticker
  });

  // Adjust the height on window resize
  window.addEventListener("resize", adjustHeroHeight);


});
