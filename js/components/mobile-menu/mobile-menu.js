const hamburgerDOM = document.querySelector('.navbar-toggler');
const navDOM = document.querySelector('.nav-bar-main');
const navLinkDOM = document.querySelector('.nav-item');
let clicked = true;
function hamburgerClick() {
    hamburgerDOM.addEventListener('click', () => {
        navDOM.classList.toggle('hidden');
        navDOM.classList.toggle('clicked');
        /* window.addEventListener('resize', () => {
            if (window.innerWidth === 992 && clicked) {
                navDOM.classList.toggle('hidden');
                navDOM.classList.toggle('clicked');
            }
        }); */
    });
}
export { hamburgerClick };
