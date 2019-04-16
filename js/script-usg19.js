document.querySelectorAll('.item.json').forEach(function(elem) {
    elem.addEventListener('click', function(event) {
        event.preventDefault();
        fetch(this.href + ".json")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            document.querySelector('article.project').innerHTML = json.content;
            document.querySelector('main').classList.add('show-project');
            window.location.hash = 'img' ;
            document.querySelector('footer p').innerHTML = json.title + '.';
        });
    });
});

document.querySelectorAll('#list li > span').forEach(function(elem) {
    elem.onmousemove = function(e) {
        var x = (e.pageX - 100) + 'px',
            y = (e.pageY - 100) + 'px';
        elem.querySelector('img').style.top = y;
        elem.querySelector('img').style.left = x;
    }
});

document.querySelector('#cross').addEventListener('click', function(event) {
    document.querySelector('main').classList.remove('show-project');
});

document.querySelectorAll('.cell').forEach(function(elem) {
    elem.addEventListener('click', function(event) {
        if (elem.classList.contains('full-screen')) {
            elem.classList.remove('full-screen');
            document.querySelector('aside.right').style.cssText = 'right: 20px;';
            document.querySelector('header').style.cssText = 'right: 20px;';
            document.querySelector('footer').style.cssText = 'right: 20px;';
            document.querySelector('#cross').style.cssText = 'display: flex;';
        } else {
        elem.setAttribute('class', 'full-screen');
        document.querySelector('aside.right').style.cssText = 'right: 0;';
        document.querySelector('header').style.cssText = 'right: 0;';
        document.querySelector('footer').style.cssText = 'right: 0;';
        document.querySelector('#cross').style.cssText = 'display: none;';
        }
    });
});
