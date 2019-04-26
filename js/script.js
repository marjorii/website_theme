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
        document.querySelector('#project-container aside.right a.selected').classList.remove('selected');
        document.querySelector('#project-container aside.right a').classList.add('selected');
        document.querySelectorAll('aside.left a').forEach(function(elem) {
            elem.classList.remove('hide');
        });
    });

    document.querySelectorAll('aside.left a').forEach(function(elem) {
        elem.onclick = function(e) {
            // e.preventDefault();
            var projects = document.querySelectorAll('.project-list');
            let other = document.querySelector('aside.left a.selected');
            if (other) {
                other.classList.remove('selected');
                if (other === this) {
                    projects.forEach(function(proj) {
                        proj.classList.remove('match');
                        console.log(proj);
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
