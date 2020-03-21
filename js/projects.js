
var activeLink;

window.onload = function(event) {
    if (window.location.hash !== '') {
        document.querySelector(window.location.hash).click();
    }
};

document.querySelectorAll('#prev, #next').forEach(function(changeElem) {
    changeElem.addEventListener('click', function changeProject(event) {
        let projects = document.querySelectorAll('.item');
        let index = Array.prototype.indexOf.call(projects, activeLink);
        let direction = changeElem.id == 'prev' ? -1 : 1;
        let nextPrevProject = projects[index + direction];
        if (nextPrevProject == undefined) {
            if (direction == -1) {
                nextPrevProject = projects[projects.length -1];
            }
            else {
                nextPrevProject = projects[0];
            }
        }
        onClose();
        nextPrevProject.click();
    });
});

document.querySelectorAll('.item').forEach(function(elem) {
    elem.addEventListener('auxclick', function(event) {
            event.preventDefault();
    });
    elem.addEventListener('click', function(event) {
        event.preventDefault();
        activeLink = elem;

        location.hash = elem.id;
        document.querySelector('#project-container').dataset.project = elem.id;

        fetch(this.dataset.url + ".json")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            document.querySelector('article.project').innerHTML = json.content;
            document.querySelector('main').classList.add('show-project');
            // accessibility
            ariaSelectors = '#main-container > aside.right, footer, body > header, #list';
            document.querySelectorAll(ariaSelectors).forEach(function(element) {
                element.setAttribute('aria-hidden', 'true');
            });
            tabSelectors = 'body > header > nav > ul > li > *, .item, #main-container > aside.right > *, #main-container > aside.right > ul > li > *';
            document.querySelectorAll(tabSelectors).forEach(function(element) {
                element.setAttribute('tabindex', '-1');
            });
            var category = elem.parentElement.dataset.type;
            var categories = document.querySelectorAll('aside.left a');
            if (document.querySelector('main').classList.contains('show-project')) {
                if (elem.href.includes('super-image')) {
                    document.querySelector('#img > img:first-of-type').classList.add('portrait');
                }
                categories.forEach(function(cat) {
                    if (!category.includes(cat.dataset.type)) {
                        cat.classList.add('hide');
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
            document.querySelector('main').classList.add('no-scroll');
            document.querySelector('#project-container').scrollTop = 0;

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

document.querySelectorAll('#anchors a').forEach(function(elem) {
    elem.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(elem.dataset.anchor).scrollIntoView();
    });
});

function onClose() {
    window.location.hash = '';
    document.querySelector('main').classList.remove('no-scroll');
    document.querySelector('main').classList.remove('show-project');
    document.querySelectorAll('video').forEach(function(vid){
        vid.pause();
        vid.currentTime = 0;
    });
    // accessibility
    ariaSelectors = '#main-container > aside.right, footer, body > header, #list';
    document.querySelectorAll(ariaSelectors).forEach(function(element) {
        element.setAttribute('aria-hidden', 'false');
    });
    tabSelectors = 'body > header > nav > ul > li > *, .item, #main-container > aside.right > *, #main-container > aside.right > ul > li > *';
    document.querySelectorAll(tabSelectors).forEach(function(element) {
        element.setAttribute('tabindex', '0');
    });
    document.querySelector('#project-container aside.right a.selected').classList.remove('selected');
    document.querySelector('#project-container aside.right a').classList.add('selected');
    document.querySelectorAll('aside.left a').forEach(function(elem) {
        elem.classList.remove('hide');
    });
    if (document.querySelector('body').classList.contains('text-collection') || document.querySelector('body').classList.contains('image-collection')) {
        activeLink.focus();
    }
}

document.querySelector('#cross').addEventListener('click', function(event) {
    onClose();
});
window.addEventListener('keyup', function(event) {
    if (event.keyCode == 27) {
        if (document.querySelector('main').classList.contains('show-project')) {
            onClose();
        }
    }
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
}
else {
    isTactile = false;
}
