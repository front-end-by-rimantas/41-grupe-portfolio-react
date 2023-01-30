const navbar = document.querySelector('#home');
const iconRegular = document.querySelector('#logo-off-sticky');
const iconSticky = document.querySelector('#logo-on-sticky');
const togglerStickys = document.querySelectorAll('.navbar-toggler > span');
const faCarets = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');

function observer() {
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll >= 800) {
            navbar.classList.add('sticky');
            iconRegular.classList.add('hidden');
            iconSticky.classList.remove('hidden');
            faCarets.forEach(function (faCaret) {
                faCaret.classList.add('link-sticky');
            });
            navLinks.forEach(function (navLink) {
                navLink.classList.add('link-sticky');
            });
            togglerStickys.forEach(function (togglerSticky) {
                togglerSticky.classList.add('toggler-sticky');
            });
        } else {
            navbar.classList.remove('sticky');
            iconSticky.classList.add('hidden');
            iconRegular.classList.remove('hidden');
            faCarets.forEach(function (faCaret) {
                faCaret.classList.remove('link-sticky');
            });
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('link-sticky');
            });
            togglerStickys.forEach(function (togglerSticky) {
                togglerSticky.classList.remove('toggler-sticky');
            });
        }
    });
}
export { observer };
