//Code source: https://www.w3schools.com/howto/howto_js_slideshow.asp
//console.log('javascript running');
let slideIndex = 1;
//showSlides(slideIndex);
const nextButton = document.getElementById("next")
const prevButton = document.getElementById("prev")



const showSlides = (n) => {
  console.log('running showSlides');  
  let i;
    let slides = document.getElementsByClassName("mySlides");
    console.log(slides);
    //let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    } else {
        slideIndex = n
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
  } 
showSlides(1);

// Next/previous controls
const nextSlide = (n) => {
    showSlides(slideIndex + n);
  }

const prevSlide = (n) => {
    showSlides(slideIndex - n);
  }

nextButton.onclick = () => {
    console.log('clicked next button');
    nextSlide(1);
}

prevButton.onclick = () => {
  console.log('clicked prev button');
  prevSlide(1);
}


  // Thumbnail image controls
  const currentSlide = (n) => {
    showSlides(slideIndex = n);
  }