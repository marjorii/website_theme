var category = document.querySelector('.data').dataset.type;
var categories = document.querySelectorAll('aside.left a');
categories.forEach(function(cat) {
    if (!category.includes(cat.dataset.type)) {
        cat.classList.add('hide');
    }
});

document.querySelector('#cross').addEventListener('click', function(event) {
    window.location.href = '../texts';
});
window.addEventListener('keyup', function(event) {
    if (event.keyCode == 27) {
        window.location.href = '../texts';
    }
});

document.querySelector('#main-container > aside.right').setAttribute('aria-hidden', 'true');
document.querySelector('#main-container > aside.right > ul > li > a').setAttribute('tabindex', '-1');
