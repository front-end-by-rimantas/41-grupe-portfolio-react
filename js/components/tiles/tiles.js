function tiles(selector, data) {
    if (typeof selector !== 'string') {
        throw new Error('Selector must be string');
    }

    const expressDOM = document.getElementById(selector);

    if (expressDOM === null) {
        throw new Error('No element was found with indicated selector.');
    }

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
