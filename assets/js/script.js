const itens = document.querySelectorAll('.item');
const images = document.querySelectorAll('.gallery__item');
const _class = 'active';

itens[0].classList.add(_class);
images.forEach(img => img.classList.add(_class));

function handleClick() {
    const attr = this.getAttribute('data-filter');
    console.log(attr); 

    itens.forEach(item => {
        item.classList.remove(_class);
    })
    this.classList.add(_class);

    images.forEach(img => {
        if (this.dataset.filter === 'all') {
            img.classList.add(_class);
        } else {
            img.classList.remove(_class);
        }

        if (img.classList.contains(attr)) {
            img.classList.add(_class);
        }
    })
}

itens.forEach(item => {
    item.addEventListener('click', handleClick);
})