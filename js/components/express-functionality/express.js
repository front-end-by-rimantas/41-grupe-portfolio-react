function tiles(data) {
    const expressDOM = document.getElementById('feature-boxes');

    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="col-12 col-md-6 col-lg-4 box">
                <img src="img/premium-features/${data[i].img}" 
                alt="featured-icon-${i + 1}" class="icon">
                <h3 class="box-header">${data[i].title}</h3>
                <p>${data[i].text}
                </p>
            </div>`;
    }

    expressDOM.innerHTML = HTML;
}

export { tiles };
