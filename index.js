/* Header dropdown */
 function changeMainImage(thumbnail, labelText, labelTitle) {
  document.getElementById('main-image').src = thumbnail.src;
    
  document.getElementById('label-text').textContent = labelText;
    
  document.getElementById('label-title').textContent = labelTitle;
}

function myFunction() {
  let dropdown = document.querySelector(".dropdown-content");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

/* Inspiration slides */
let slideIndex = 0;

function hideAllElements() {
    const slides = document.querySelectorAll('.inspiraton-slide');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const dots = document.querySelectorAll('.dot');

    slides.forEach(slide => slide.style.display = 'none');
    thumbnails.forEach(thumbnail => thumbnail.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));
}

function showSlide(index) {
    const slides = document.querySelectorAll('.inspiraton-slide');
    const dots = document.querySelectorAll('.dot');
    const thumbnails = document.querySelectorAll('.thumbnail');

    hideAllElements();

    slides[index].style.display = 'block';
    thumbnails[index].style.display = 'block'; 
    dots[index].classList.add('active');
}

function currentSlide(index) {
    slideIndex = index - 1; 
    showSlide(slideIndex);
}

window.onload = function() {
    currentSlide(1);
}