// Variables for DOM manipulation
const itens = document.querySelectorAll('.item');
const images = document.querySelectorAll('.gallery__item');
const classActive = 'active'; // That's for manipulate class of active elements

// Condition for initiate the event
if (itens, images) {
    // Initial states
    itens[0].classList.add(classActive);
    images.forEach(img => img.classList.add(classActive));

    // Function to activate the event
    function handleClick() {
        // Get the element attribute
        const attr = this.getAttribute('data-filter');

        // Remove any active class of the images and add into current element
        itens.forEach(item => {
            item.classList.remove(classActive);
        })
        this.classList.add(classActive);

        // Loop for validate the filter
        images.forEach(img => {
            img.classList.remove(classActive);
            
            if (this.dataset.filter === 'all') {
                img.classList.add(classActive);
            }

            if (img.classList.contains(attr)) {
                img.classList.add(classActive);
            }
        })
    }

    // Adding the event in the elements
    itens.forEach(item => {
        item.addEventListener('click', handleClick);
    })
}