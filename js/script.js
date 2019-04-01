document.querySelectorAll('.item').forEach(function(elem) {
    elem.addEventListener('click', function(event) {
        event.preventDefault();
        fetch(this.href + ".json")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            document.querySelector('article.project').innerHTML = json.content;
            document.querySelector('main').classList.add('show-project');
            document.querySelectorAll('#project-container aside.right a').forEach(function(elem) {
                elem.addEventListener('click', function(event) {
                    let other = document.querySelector('#project-container aside.right a.selected');
                    if (other) {
                        other.classList.remove('selected');
                    }
                    this.classList.add('selected');
                })
            })
            document.querySelector('footer p').innerHTML = json.title + '.';
        })
    })
})
document.querySelector('#cross').addEventListener('click', function(event) {
    document.querySelector('main').classList.remove('show-project');
})


document.querySelectorAll('#list li > span').forEach(function(elem) {
    elem.onmousemove = function(e) {
        var x = (e.pageX - 100) + 'px',
            y = (e.pageY - 100) + 'px';
        elem.querySelector('img').style.top = y;
        elem.querySelector('img').style.left = x;
    }
})
