let navbar = document.querySelector('#home');
let featuresSection = document.getElementById('features');
let navPos = navbar.getBoundingClientRect().top;

function navSticky() {
  window.addEventListener('scroll', e => {
      let scrollPos = window.scrollY;
        if (scrollPos > navPos) {
            navbar.classList.add('sticky');
            features.classList.add('navbarOffsetMargin');
        } else {
            navbar.classList.remove('sticky');
            features.classList.add('navbarOffsetMargin');
        }
    }
});
export { navSticky };
// const navbar = document.querySelector('#home');
// let top = navbar.offsetTop;
// function navSticky() {
//     if (window.scrollY >= top) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// }
// window.addEventListener('scroll', navSticky);
// export { navSticky };
