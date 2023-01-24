function hamburgerClick() {
    // hidden div for generating new nav accordint to desktop version
    const mobileDOM = document.getElementById('mobile-nav');

    // Copy all meniu to new div
    mobileDOM.innerHTML =
        `<div class="close">
                        <icon href="#" class="fa fa-times"></icon>
                    </div>` + document.querySelector('.nav-bar-main').innerHTML;
    // selected overlay div
    const overlayDOM = document.querySelector('.mobile-nav');
    // Selected 'hamburger' button
    const hamburgerDOM = document.querySelector('.navbar-toggler');
    // Selected 'x' button
    const closeDOM = document.querySelector('.close');
    //Select the list of buttons, having .dropdown-items
    const menuDOM = [
        ...document.querySelectorAll('#mobile-nav .dropdown-item'),
    ].map((a) => a.parentElement);

    // add hidden class to .dropdown-item
    document
        .querySelectorAll('.navbar > #mobile-nav .dropdown-item')
        .forEach((a) => a.classList.add('hidden'));
    hamburgerDOM.addEventListener('click', () => {
        mobileDOM.classList.remove('hidden');
        overlayDOM.classList.remove('hidden');
    });
    closeDOM.addEventListener('click', () => {
        mobileDOM.classList.add('hidden');
        overlayDOM.classList.add('hidden');
    });

    for (let i = 0; i < menuDOM.length; i++) {
        // selectinam a (children[0]vietoj .nav-item, nes jis uzima visa konteineri su sub-nav, todel klikinant 'vaikus' kyla prob
        menuDOM[i].children[1].addEventListener('click', (e) => {
            menuDOM[i].children[2].classList.toggle('hidden');

            /*     console.log(menuDOM[i].children[0]);
            console.log(menuDOM[i].children);
            console.log(e.path); */
        });
        const linksDOM = document.querySelectorAll('#mobile-nav a');
        // console.log(linksDOM);
        // console.log(linksDOM[0].href);
        for (let i of linksDOM) {
            i.addEventListener('click', (e) => {
                if (i.href.endsWith('#')) {
                    e.preventDefault();
                    // console.log('default prevented');
                } else {
                    mobileDOM.classList.add('hidden');
                    overlayDOM.classList.add('hidden');
                }
            });
        }
    }

    // console.log(mobileDOM.innerHTML);
    // console.log(menuDOM.length);
}
export { hamburgerClick };
