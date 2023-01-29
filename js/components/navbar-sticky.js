const navbar = document.querySelector('#home');
// const body = document.body;

function observer() {
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll >= 800) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
}
export { observer };

// const navbar = document.querySelector('#home');
// //const sectionOne = document.querySelector('#features');
// const sections = document.querySelectorAll('section');
// const options = {
//     rootMargin: '0px 0px 0px 0px',
//     threshold: 0.9,
// };

// const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//         console.log(entry.target);
//         if (entry.isIntersecting) {
//             navbar.classList.add('sticky');
//         } else {
//             navbar.classList.remove('sticky');
//         }
//     });
// }, options);

// sections.forEach(function (section) {
//     observer.observe(section);
// });
