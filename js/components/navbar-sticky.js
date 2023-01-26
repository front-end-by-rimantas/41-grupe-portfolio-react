const navbar = document.querySelector('#home');
// const hero = document.querySelector('#hero');
const sectionOne = document.querySelector('#features');

const sectionOneOptions = {
    rootMargin: '0px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// const body = document.getElementById('home');
// let lastScroll = navbar.offsetTop;

//     function navSticky() {
//         window.addEventListener('scroll', () => {
//         const currentScroll = window.pageYOffset;
//         console.log(currentScroll);
//         if (currentScroll <= 0) {
//             body.classList.remove('sticky');
//         }
//         if (currentScroll <= 0) {
//             body.classList.add('sticky');
//         }

//         lastScroll = currentScroll;
// });

// window.onscroll = function () {
//     navSticky();
// };

// let navbar = document.getElementById('home');
// let sticky = navbar.offsetTop;

// function navSticky() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// }
// let navbar = document.querySelector('#home');
// let featuresSection = document.getElementById('features');
// let navPos = navbar.getBoundingClientRect().top;

// function navSticky() {
//   window.addEventListener('scroll', e => {
//       let scrollPos = window.scrollY;
//         if (scrollPos > navPos) {
//             navbar.classList.add('sticky');
//             features.classList.add('navbarOffsetMargin');
//         } else {
//             navbar.classList.remove('sticky');
//             features.classList.add('navbarOffsetMargin');
//         }
//     }
// });
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
export { sectionOneObserver };
