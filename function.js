
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var file = document.getElementsByClassName('myBtn');
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
  document.getElementById("myBtn").style.visibility = "hidden";
} else {
    document.getElementById("myBtn").style.visibility = "visible";
}
  
  prevScrollPos = currentScrollPos;
}


$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});

var fileId = document.getElementsByClassName('arrowFade');
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
  document.getElementById("arrowAnim").style.visibility = "visible";
} else {
  document.getElementById("arrowAnim").style.visibility = "hidden";
  document.getElementById("myBtn").style.visibility = "visible";
}
  
prevScrollPos = currentScrollPos;
}