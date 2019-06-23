var loc = window.location.pathname;

if (loc == '/projects/text' || loc == '/projects/image') {

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
                window.location.hash = 'img' ;
                var category = elem.parentElement.dataset.type;
                var categories = document.querySelectorAll('aside.left a');
                if (document.querySelector('main').classList.contains('show-project')) {
                    if (elem.href.includes('/projects/content/usg19')) {
                        document.querySelector('main').classList.remove('show-project');
                        window.open('/usg19', '_blank');
                    }
                    if (elem.href.includes('/projects/content/edgar')) {
                        document.querySelector('main').classList.remove('show-project');
                        window.open('http://e-d-g-a-r.fr/super-image-2/', '_blank');
                    }
                    if (elem.href.includes('/projects/content/super-image')) {
                        document.querySelector('#img > img:first-of-type').classList.add('portrait');
                    }
                    categories.forEach(function(cat) {
                        if (!category.includes(cat.dataset.type)) {
                            cat.classList.add('hide');
                            if (elem.href.includes('/projects/content/edgar')) {
                                cat.classList.remove('hide');
                            }
                            if (elem.href.includes('/projects/content/usg19')) {
                                cat.classList.remove('hide');
                            }
                        }
                    });
                }
                document.querySelectorAll('#project-container aside.right a').forEach(function(elem) {
                    elem.addEventListener('click', function(event) {
                        let other = document.querySelector('#project-container aside.right a.selected');
                        if (other) {
                            other.classList.remove('selected');
                        }
                        this.classList.add('selected');
                    });
                });
                document.querySelector('footer p').innerHTML = json.footer + '.';
                if (!json.links) {
                    document.querySelector('#project-container aside.right li:nth-of-type(3)').classList.add('hide');
                }
                else {
                    document.querySelector('#project-container aside.right li:nth-of-type(3)').classList.remove('hide');
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
        document.querySelectorAll('video').forEach(function(vid){
        vid.pause();
        vid.currentTime = 0;
        });
        document.querySelector('#project-container aside.right a.selected').classList.remove('selected');
        document.querySelector('#project-container aside.right a').classList.add('selected');
        document.querySelectorAll('aside.left a').forEach(function(elem) {
            elem.classList.remove('hide');
        });
    });

    document.querySelectorAll('aside.left a').forEach(function(elem) {
        elem.onclick = function(e) {
            var projects = document.querySelectorAll('.project-list');
            let other = document.querySelector('aside.left a.selected');
            if (other) {
                other.classList.remove('selected');
                if (other === this) {
                    projects.forEach(function(proj) {
                        proj.classList.remove('match');
                    });
                    return;
                }
            }
            this.classList.add('selected');
            projects.forEach(function(project) {
                if (project.dataset.type.includes(elem.dataset.type)) {
                    project.classList.add('match');
                }
                else {
                    project.classList.remove('match');
                }
            });
        }
    });
    document.querySelectorAll('.project-list').forEach(function(proj) {
        if (proj.querySelector('.item').href.includes('/projects/content/cache_cache')) {
            proj.querySelector('img').classList.add('last');
            proj.onmouseenter = function(e) {
                proj.querySelector('img').classList.remove('last');
            }
            proj.onmouseleave = function(e) {
                proj.querySelector('img').classList.add('last');
            }
        }
    });
}

if (loc == '/projects/text' || loc == '/projects/image' || loc == '/about' || loc == '/contact') {
    document.querySelector('header nav li:nth-of-type(2) a').onclick = function(e) {
        e.preventDefault();
        document.getElementById('select-page').classList.toggle('hide');
    }
    document.querySelector('header nav li:nth-of-type(3) a').onmouseenter = function() {
        document.getElementById('dancing-banana').classList.remove('hide');
    }
    document.querySelector('header nav li:nth-of-type(3) a').onmouseleave = function() {
        document.getElementById('dancing-banana').classList.add('hide');
    }
}

if (loc == '/projects/text') {
    document.getElementById('select-page').style.cssText = 'background-color: #f4fefe';
    document.querySelectorAll('#select-page a').forEach(function(link) {
        link.classList.add('selected');
    });
}
if (loc == '/projects/image') {
    document.getElementById('select-page').style.cssText = 'background-color: #fffccf';
    document.querySelectorAll('#select-page a').forEach(function(link) {
        link.classList.add('selected');
    });
}
if (loc == '/about') {
    document.getElementById('select-page').style.cssText = 'background-color: #f7eef3';
}
if (loc == '/contact') {
    document.getElementById('select-page').style.cssText = 'background-color: white';
}

var isTactile = false;
if ( /Android|webOS|iPhone|iPad|Kindle|Tablet|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isTactile = true;
    document.querySelectorAll('.tooltip-img').forEach(function(elem) {
        elem.style.cssText = 'display: none';
    });
    document.querySelectorAll('.hover-text').forEach(function(elem) {
        elem.style.cssText = 'display: none';
    });
    document.getElementById('dancing-banana').style.cssText = 'display: none';
    document.querySelector('header').style.cssText = 'right: 0';
    document.querySelector('footer.flex-line').style.cssText = 'right: 0';
    document.querySelector('aside.right').style.cssText = 'right: 0';
    if (loc == '/projects/text' || loc == '/projects/image') {
    document.querySelector('#project-container > aside.right').style.cssText = 'right: 0';
    document.getElementById('prev').style.cssText = 'display: none';
    document.getElementById('next').style.cssText = 'display: none';
    }
    if (loc == '/about') {
        document.querySelector('footer p:first-of-type').textContent = 'Conception : Marjorie Ober';
        document.querySelector('footer p:nth-of-type(2)').innerHTML = 'Fontes : <a href="https://usemodify.com/fonts/karmilla/" target="_blank">Karmilla</a> et <a href="http://vollkorn-typeface.com/" target="_blank">Vollkorn</a>';
    }
} else {
    isTactile = false;
}

var isPhone = false;
if ( /Android|iPhone|BlackBerry/i.test(navigator.userAgent) && window.innerWidth > window.innerHeight) {
    isPhone = true;
    document.querySelector('aside.left ul').style.cssText = 'display: none';
    document.querySelector('aside.right > ul').style.cssText = 'margin-left: 0';
}
else {
    isPhone = false;
}
