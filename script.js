//slider startsida
var picPaths = ['./Bilder/Slider-bilder/plask.jpg','./Bilder/Slider-bilder/strand.jpg','./Bilder/Slider-bilder/karribien.jpg','./Bilder/Slider-bilder/venedig.jpg'];

var imageIndex = 0;
var SlideBilder; 

function startInterval() {
 setInterval(displayNextImage, 5000);
}

function displayNextImage() {
  SlideBilder.src = picPaths[imageIndex];
  if(imageIndex === (picPaths.length-1)) {
    imageIndex = 0;
  }
  else {
    (imageIndex = imageIndex + 1);
  }
}

window.onload=function() {
 SlideBilder = document.getElementById('bildbyte');
 startInterval();
}

//hamburgermeny
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




