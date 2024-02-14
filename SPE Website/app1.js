// JavaScript for image slider

const sliderImages = document.querySelectorAll('.slider-image');
const textOverlays = document.querySelectorAll('.text-overlay');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to show the current image and text overlay
function showSlide(index) {
  // Hide all images and text overlays
  sliderImages.forEach(image => {
    image.classList.remove('active');
  });
  textOverlays.forEach(overlay => {
    overlay.classList.remove('active');
  });
  // Show the image and text overlay at the given index
  sliderImages[index].classList.add('active');
  textOverlays[index].classList.add('active');
}

// Show the initial image and text overlay
showSlide(currentIndex);

// Function to show the next image and text overlay
function nextSlide() {
  currentIndex++;
  if (currentIndex >= sliderImages.length) {
    currentIndex = 0; // Loop back to the first image
  }
  showSlide(currentIndex);
}

// Function to show the previous image and text overlay
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderImages.length - 1; // Loop back to the last image
  }
  showSlide(currentIndex);
}

// Event listeners for the previous and next buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
