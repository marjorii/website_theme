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

document.querySelector('#list li > span:first-of-type').classList.add('logo');

if (!(window.location.pathname == '/usg19/about')) {
    document.querySelector('#cross').addEventListener('click', function(event) {
        document.querySelector('main').classList.remove('show-project');
    });
}

if ((window.location.pathname == '/usg19/project/text')) {
    document.querySelectorAll('header').forEach(function(bar) {
        bar.classList.add('scroll-bar');
    });
    document.querySelectorAll('footer').forEach(function(bar) {
        bar.classList.add('scroll-bar');
    });
    document.querySelector('aside.right').classList.add('scroll-bar');
}

if ((window.location.pathname == '/usg19/project/postcard')) {
    document.querySelectorAll('header').forEach(function(bar) {
        bar.classList.add('scroll-bar');
    });
    document.querySelectorAll('footer').forEach(function(bar) {
        bar.classList.add('scroll-bar');
    });
    document.querySelector('aside.right').classList.add('scroll-bar');
    document.querySelectorAll('.cell').forEach(function(elem) {
        elem.addEventListener('click', function(event) {
            if (!elem.classList.contains('full-screen')) {
                elem.classList.add('full-screen');
                document.querySelectorAll('header').forEach(function(bar) {
                    bar.classList.remove('scroll-bar');
                });
                document.querySelectorAll('footer').forEach(function(bar) {
                    bar.classList.remove('scroll-bar');
                });
                document.querySelector('aside.right').classList.remove('scroll-bar');
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
        if (!isTactile) {
            document.querySelectorAll('header').forEach(function(bar) {
                bar.classList.add('scroll-bar');
            });
            document.querySelectorAll('footer').forEach(function(bar) {
                bar.classList.add('scroll-bar');
            });
            document.querySelector('aside.right').classList.add('scroll-bar');
        }
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



var isTactile = false;
if ( /Android|webOS|iPhone|iPad|Kindle|Tablet|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isTactile = true;
    document.querySelectorAll('.tooltip-img').forEach(function(elem) {
        elem.style.cssText = 'display: none';
    });
    document.querySelectorAll('.hover-credits').forEach(function(elem) {
        elem.style.cssText = 'display: none';
    });
    document.querySelectorAll('.postcard-usg img').forEach(function(elem) {
        elem.style.cssText = 'display: flex';
    });
    document.querySelector('aside.right').classList.remove('scroll-bar');
    document.querySelectorAll('header').forEach(function(bar) {
        bar.classList.remove('scroll-bar');
    });
    document.querySelectorAll('footer').forEach(function(bar) {
        bar.classList.remove('scroll-bar');
    });
    if ((window.location.pathname == '/usg19/about')) {
        document.querySelector('footer p:first-of-type').textContent = 'Conception : Marjorie Ober';
        document.querySelector('footer p:nth-of-type(2)').innerHTML = 'Fontes : <a href="https://usemodify.com/fonts/karmilla/" target="_blank">Karmilla</a> et <a href="http://vollkorn-typeface.com/" target="_blank">Vollkorn</a>';
    }
} else {
    isTactile = false;
}
