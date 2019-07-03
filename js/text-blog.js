var category = document.querySelector('.data').dataset.type;
var categories = document.querySelectorAll('aside.left a');
console.log(category);
categories.forEach(function(cat) {
    if (!category.includes(cat.dataset.type)) {
        cat.classList.add('hide');
    }
});
