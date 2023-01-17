const hamburgerDOM = document.querySelector('.navbar-toggler');
const navDOM = document.querySelector('.nav-bar-main');

function hamburgerClick() {
    hamburgerDOM.addEventListener('click', () => {
        navDOM.classList.toggle('hidden');
        navDOM.classList.toggle('clicked');
        hamburgerDOM.classList.toggle('hidden');
        console.log('clicked');
    });
}
export { hamburgerClick };
