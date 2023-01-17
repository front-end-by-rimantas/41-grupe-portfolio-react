const hamburgerDOM = document.querySelector('.navbar-toggler');
const navDOM = document.querySelector('.nav-bar-main');
const navLinkDOM = document.querySelector('.nav-item');

function hamburgerClick() {
    hamburgerDOM.addEventListener('click', () => {
        navDOM.classList.toggle('hidden');
        navDOM.classList.toggle('clicked');
    });
}
export { hamburgerClick };
