const fade = (element, boolVar) => {
    let div = document.getElementById(element);
    if (boolVar === true) {
        div.classList.remove('visible');
        div.classList.add('hidden');
        setTimeout(function () {
            div.classList.add('d-none');
            div.classList.remove('d-block');
        }, 2000);
    } else {
        div.classList.add('visible');
        div.classList.remove('hidden');
        setTimeout(function () {
            div.classList.remove('d-none');
            div.classList.add('d-block');
        }, 2000);
    }
}

export default fade;