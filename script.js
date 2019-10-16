var picPaths = ['./Bilder/Slider-bilder/plask.jpg','./Bilder/Slider-bilder/strand.jpg','./Bilder/Slider-ilder/karribien.jpg','./Bilder/Slider-bilder/venedig.jpg'];
// An index to track the contender image 
var imageIndex = 0;
var SlideBilder; 

// An event callback for starting the interval
function startInterval() {
 setInterval(displayNextImage, 5000);
}

function displayNextImage() {
  
  SlideBilder.src = picPaths[imageIndex];
  if(imageIndex === (picPaths.length-1)) {
    imageIndex = 0;
  }
  else {
    (imageIndex = imageIndex + 1); // It can be replaced with imageIndex ++  
  }
}

window.onload=function() {
 SlideBilder = document.getElementById('bildbyte');
 startInterval();
}





/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}