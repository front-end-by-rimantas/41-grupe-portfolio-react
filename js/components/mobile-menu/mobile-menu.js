// hidden div for generating new nav accordint to desktop version
const mobileDOM = document.getElementById('mobile-nav');
// Coppy all meniu to new div
mobileDOM.innerHTML =
    `<div class="close">
                    <a href="#" class="fa fa-times"></a>
                </div>` + document.querySelector('.nav-bar-main').innerHTML;
const hamburgerDOM = document.querySelector('.navbar-toggler');
const closeDOM = document.querySelector('.close');

function hamburgerClick() {
    hamburgerDOM.addEventListener('click', () => {
        mobileDOM.classList.toggle('hidden');
    });
    closeDOM.addEventListener('click', () => {
        mobileDOM.classList.toggle('hidden');
    });
    console.log(mobileDOM.innerHTML);
}
export { hamburgerClick };
