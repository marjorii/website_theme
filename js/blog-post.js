var category = document.querySelector('li > span').dataset.type;
var categories = document.querySelectorAll('aside.left a');
    categories.forEach(function(cat) {
        if (!category.includes(cat.dataset.type)) {
            cat.classList.add('hide');
        }
});

enlargeImg();
