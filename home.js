const heading = document.getElementById('changing-heading');
const wordSpan = document.getElementById('changing-word');
const words = ['Elegance', 'Minimalism', 'Comfort'];
let index = 0;

setInterval(() => {
  index = (index + 1) % words.length;
  wordSpan.textContent = words[index];
}, 2000); // Change every 2 seconds (2000 milliseconds)

  // Carousel functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');

  function showNextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 5000);