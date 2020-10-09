
// console.log(document.pageXOffset , document.pageYOffset);

const navBar = document.getElementById("navbar")
console.log(window.pageXOffset , window.pageYOffset,navBar.offsetTop);

if(window.pageYOffset <= navBar.offsetTop){
    navBar.style.backgroundColor = 'transparent'
}
else if(window.pageYOffset >= navBar.offsetTop){
    navBar.style.backgroundColor = 'rgba(0,0,0,0.2'
}

//COROUSAL
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}


// TOGGLE NAVBAR
const toggler = document.getElementById("toggle")
const menu = document.getElementById("nativagtionItems")
console.log(toggler)
toggler.addEventListener('click',function(){
  if( menu.style.display == 'none'){
    menu.style.display = 'flex'
  }
  else
  menu.style.display='none'
})