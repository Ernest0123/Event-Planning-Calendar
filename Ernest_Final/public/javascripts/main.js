let slide_counter = 1;
slide_show(slide_counter);

// Next/previous controls
function plus_slides(n) {
  slide_show(slide_counter+= n);
}


function slide_show(n) {
  let i;
  let slides = document.getElementsByClassName("slide1");

  if (n > slides.length) {slide_counter= 1;}
  if (n < 1) {slide_counter = slides.length;}
  for (i = 0; i< slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slide_counter-1].style.display = "block";

}


