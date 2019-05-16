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
                document.querySelectorAll('#img img').forEach(function(pic, index) {
                    if (index != 2 && index != 3 && index != 6 && index != 7 && index != 8 && index != 10) {
                    pic.classList.add('portrait');
                    }
                });
            }
            if (elem.pathname == '/usg19/project/installation') {
                document.querySelectorAll('#img img').forEach(function(pic, index) {
                    if (index == 36 || index == 38) {
                    pic.classList.add('portrait');
                    }
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
                if (elem.querySelector('img').src.includes('postcard_01.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan01.jpg'
                }
                if (elem.querySelector('img').src.includes('postcard_02.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan02.jpg'
                }
                if (elem.querySelector('img').src.includes('postcard_03.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan03.jpg'
                }
                if (elem.querySelector('img').src.includes('postcard_04.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan04.jpg'
                }
                if (elem.querySelector('img').src.includes('postcard_05.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan05.jpg'
                }
                if (elem.querySelector('img').src.includes('postcard_06.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan06.jpg'
                }
                if (elem.querySelector('img').src.includes('postcard_08.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan08.jpg'
                }
                if (elem.querySelector('img').src.includes('postcard_09.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan09.jpg'
                }
                if (elem.querySelector('img').src.includes('postcard_10.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan10.jpg'
                }
                if (elem.querySelector('img').src.includes('postcard_11.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan11.jpg'
                    elem.querySelector('img').style.cssText = 'object-position: bottom center';
                }
                if (elem.querySelector('img').src.includes('postcard_12.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan12.jpg'
                }
                if (elem.querySelector('img').src.includes('postcard_16.jpg')) {
                    elem.querySelector('img').src = '/user/pages/usg19/02.project/02.postcard/scan16.jpg'
                }
            }
        });
    });

    document.querySelector('#back').addEventListener('click', function(event) {
        var fullscreen = document.querySelector('.full-screen');
        fullscreen.classList.remove('full-screen');
        if (document.querySelector('.cell:nth-of-type(1) > img')) {
            document.querySelector('.cell:nth-of-type(1) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_01.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(2) > img')) {
            document.querySelector('.cell:nth-of-type(2) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_02.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(3) > img')) {
            document.querySelector('.cell:nth-of-type(3) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_03.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(4) > img')) {
            document.querySelector('.cell:nth-of-type(4) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_04.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(5) > img')) {
            document.querySelector('.cell:nth-of-type(5) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_05.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(6) > img')) {
            document.querySelector('.cell:nth-of-type(6) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_06.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(8) > img')) {
            document.querySelector('.cell:nth-of-type(8) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_08.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(9) > img')) {
            document.querySelector('.cell:nth-of-type(9) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_09.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(10) > img')) {
            document.querySelector('.cell:nth-of-type(10) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_10.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(11) > img').src.includes('scan11.jpg')) {
            document.querySelector('.cell:nth-of-type(11) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_11.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(12) > img').src.includes('scan12.jpg')) {
            document.querySelector('.cell:nth-of-type(12) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_12.jpg'
        }
        if (document.querySelector('.cell:nth-of-type(16) > img').src.includes('scan16.jpg')) {
            document.querySelector('.cell:nth-of-type(16) > img').src = '/user/pages/usg19/02.project/02.postcard/postcard_16.jpg'
        }
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
