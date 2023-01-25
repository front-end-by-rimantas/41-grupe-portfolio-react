function tiles() {
    const expressDOM = document.getElementById('feature-boxes');

    let HTML = '';
    for (let i = 0; i < 6; i++) {
        HTML += `<div class="col-12 col-md-6 col-lg-4 box">
                <img src="img/premium-features/featured_image_1.png" alt="featured-icon-1" class="icon">
                <h3 class="box-header">Fully functional</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.
                </p>
            </div>`;
    }

    expressDOM.innerHTML = HTML;
}

export { tiles };
