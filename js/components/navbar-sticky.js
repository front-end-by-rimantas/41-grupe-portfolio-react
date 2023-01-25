// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    navSticky();
};

// Get the navbar
let navbar = document.getElementById('navbar');

// Get the position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function navSticky() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky')
//   } else {
//     navbar.classList.remove('sticky');
//   }
// }
// export { navSticky }
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
// }