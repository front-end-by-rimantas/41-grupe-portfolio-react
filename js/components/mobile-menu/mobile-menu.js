// hidden div for generating new nav accordint to desktop version
const mobileDOM = document.getElementById('mobile-nav');
// Coppy all meniu to new div
mobileDOM.innerHTML =
    `<div class="close">
                    <icon href="#" class="fa fa-times"></icon>
                </div>` + document.querySelector('.nav-bar-main').innerHTML;
// hamburger button
const hamburgerDOM = document.querySelector('.navbar-toggler');
// close button
const closeDOM = document.querySelector('.close');
// select buttons having drop down
const menuDOM = [
    ...document.querySelectorAll('#mobile-nav .dropdown-item'),
].map((a) => a.parentElement);

// add hidden class to drop-down items
document
    .querySelectorAll('.navbar > #mobile-nav .dropdown-item')
    .forEach((a) => a.classList.add('hidden'));

function hamburgerClick() {
    hamburgerDOM.addEventListener('click', () => {
        mobileDOM.classList.toggle('hidden');
    });
    closeDOM.addEventListener('click', () => {
        mobileDOM.classList.toggle('hidden');
    });

    for (let i = 0; i < menuDOM.length; i++) {
        menuDOM[i].addEventListener('click', () => {
            menuDOM[i].children[1].classList.toggle('hidden');
            console.log(menuDOM[i]);
        });
    }

    // console.log(mobileDOM.innerHTML);
    // console.log(menuDOM.length);
}
export { hamburgerClick };
