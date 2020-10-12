document.querySelector('#pages-menu input').onclick = function() {
    let ariaExpanded = this.getAttribute('aria-expanded');
    document.getElementById('pages').classList.toggle('hidden');
    if ( ariaExpanded == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
    else {
        this.setAttribute('aria-expanded', 'false');
    }
}
document.querySelectorAll('.page').forEach(function(page) {
    page.firstElementChild.onclick = function(e) {
        const currentUl = document.querySelector('.articles:not(.hidden)');
        if (currentUl) {
            currentUl.classList.toggle('hidden');
            currentUl.previousElementSibling.setAttribute('aria-expanded', 'false');
            const nextPage = currentUl.parentElement.nextElementSibling;
            if (nextPage) {
                nextPage.firstElementChild.classList.remove('stroke');
            }
            if (currentUl.previousElementSibling == this) {
                return;
            }
        }
        let ariaExpanded = this.getAttribute('aria-expanded');
        page.lastElementChild.classList.remove('hidden');
        this.setAttribute('aria-expanded', 'true');
        if (page.nextElementSibling) {
            page.nextElementSibling.firstElementChild.classList.add('stroke');
        }
    }
    window.addEventListener('keyup', function(event) {
        if (event.keyCode == 27) {
            if (!page.lastElementChild.classList.contains('hidden')) {
                page.lastElementChild.classList.add('hidden');
                page.firstElementChild.setAttribute('aria-expanded', 'false');
                page.nextElementSibling.firstElementChild.classList.remove('stroke');
            }
        }
    });
});

document.querySelectorAll('.item').forEach(function(elem) {
    elem.addEventListener('auxclick', function(event) {
        event.preventDefault();
    });
    elem.addEventListener('click', function(event) {
        event.preventDefault();
        event.target.parentElement.lastElementChild.classList.toggle('hide');
        event.target.parentElement.lastElementChild.classList.toggle('flex');
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

enlargeImg();
