//Right and Left Arrow functionality
let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;


function clear() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function start() {
  //clear all content
  clear();
  //initialize slider
  sliderImages[0].style.display = 'block';
}

function slideLeft() {
  clear();
  sliderImages[current-1].style.display = 'block';
  current--;
}

function slideRight() {
  clear();
  sliderImages[current+1].style.display = 'block';
  current++;
}

arrowLeft.addEventListener('click', function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener('click', function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

start();


//Autoslide


