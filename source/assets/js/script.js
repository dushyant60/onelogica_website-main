let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const sliderContent = document.querySelector(".slider-content");
const slideWidth = slides[0].offsetWidth + 20; // Account for slide margin

function showSlide() {
  const slidePosition = slideIndex % slides.length;
  const translateX = -slidePosition * slideWidth;
  sliderContent.style.transform = `translateX(${translateX}px)`;
}

// Start auto-slide
let interval = setInterval(() => {
  slideIndex++;
  showSlide();
}, 3000);

// Pause auto-slide when hovering over the slider
document.querySelector(".slider-container").addEventListener("mouseenter", () => {
  clearInterval(interval);
});

// Resume auto-slide when mouse leaves the slider
document.querySelector(".slider-container").addEventListener("mouseleave", () => {
  interval = setInterval(() => {
    slideIndex++;
    showSlide();
  }, 3000);
});

// Change slide when clicking previous and next buttons
function changeSlide(n) {
  slideIndex += n;
  showSlide();
}

// Initial call to show the first slide
showSlide();
