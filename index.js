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

let slideIndex = 1;

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("thumbnail");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex + 0].className += " active";
}

showSlides(slideIndex);

