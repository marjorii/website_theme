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
            window.location.hash = 'img';
            document.querySelector('footer p').innerHTML = json.footer + '.';
            if (elem.pathname == '/usg19/project/posters') {
                document.querySelectorAll('#img img').forEach(function(pic) {
                    pic.classList.add('portrait');
                });
            }
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

if (!(window.location.pathname == '/usg19/project')) {
    document.querySelectorAll('header').forEach(function(bar) {
        bar.style.cssText = 'right: 20px;';
    });
    document.querySelectorAll('footer').forEach(function(bar) {
        bar.style.cssText = 'right: 20px;';
    });


    document.querySelectorAll('.cell').forEach(function(elem) {
        elem.addEventListener('click', function(event) {
            if (!elem.classList.contains('full-screen')) {
                elem.classList.add('full-screen');
                document.querySelectorAll('header').forEach(function(bar) {
                    bar.style.cssText = 'right: 0;';
                });
                document.querySelectorAll('footer').forEach(function(bar) {
                    bar.style.cssText = 'right: 0;';
                });
                document.querySelector('aside.right').style.cssText = 'right: 0;';
                document.querySelector('#cross').style.cssText = 'display: none;';
                document.querySelector('#arrows').style.cssText = 'display: flex;';
            }
        });
    });

    document.querySelector('#back').addEventListener('click', function(event) {
        var fullscreen = document.querySelector('.full-screen');
        fullscreen.classList.remove('full-screen');
        fullscreen.querySelector('.verso').classList.add('hide');
        document.querySelector('#show-verso').textContent = 'Verso >';
        document.querySelectorAll('header').forEach(function(bar) {
            bar.style.cssText = 'right: 20px;';
        });
        document.querySelectorAll('footer').forEach(function(bar) {
            bar.style.cssText = 'right: 20px;';
        });
        document.querySelector('aside.right').style.cssText = 'right: 20px;';
        document.querySelector('#cross').style.cssText = 'display: flex;';
        document.querySelector('#arrows').style.cssText = 'display: none;';
    });

    document.querySelector('#show-verso').addEventListener('click', function(event) {
        var verso = document.querySelector('.full-screen .verso');
        if (verso.classList.contains('hide')) {
            verso.classList.remove('hide');
            this.textContent = '< Recto';
        } else {
            verso.classList.add('hide');
            this.textContent = 'Verso >';
        }
    });
}

if (window.innerHeight > window.innerWidth){
    document.querySelector('aside.right').style.cssText = 'right: 0;';
    document.querySelectorAll('header').forEach(function(bar) {
        bar.style.cssText = 'right: 0;';
    });
    document.querySelectorAll('footer').forEach(function(bar) {
        bar.style.cssText = 'right: 0;';
    });
}
