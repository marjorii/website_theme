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
                if (elem.href.includes('usg19')) {
                    document.querySelector('main').classList.remove('show-project');
                    window.open('http://marjorieober.com/usg19', '_blank');
                }
                if (elem.href.includes('edgar')) {
                    document.querySelector('main').classList.remove('show-project');
                    window.open('http://e-d-g-a-r.fr/super-image-2/', '_blank');
                }
                if (elem.href.includes('super-image')) {
                    document.querySelector('#img > img:first-of-type').classList.add('portrait');
                }
                categories.forEach(function(cat) {
                    if (!category.includes(cat.dataset.type)) {
                        cat.classList.add('hide');
                        if (elem.href.includes('edgar')) {
                            cat.classList.remove('hide');
                        }
                        if (elem.href.includes('usg19')) {
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
            if (!elem.href.includes('usg19') && !elem.href.includes('edgar')) {
                document.querySelector('main').classList.add('no-scroll');
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
    document.querySelector('main').classList.remove('no-scroll');
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



var isTactile = false;
if ( /Android|webOS|iPhone|iPad|Kindle|Tablet|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isTactile = true;
    document.querySelector('#project-container > aside.right').style.cssText = 'right: 0';
    document.getElementById('prev').style.cssText = 'display: none';
    document.getElementById('next').style.cssText = 'display: none';
}
else {
    isTactile = false;
}
