document.querySelectorAll('.item').forEach(function(elem) {
    elem.addEventListener('click', function(event) {
        event.preventDefault();
        event.target.parentElement.lastElementChild.classList.toggle('hide');
        event.target.parentElement.lastElementChild.classList.toggle('flex');
        document.querySelectorAll('p').forEach(function(media) {
            if (!media.classList.contains('text-content')) {
                if (media.offsetWidth < media.offsetHeight) {
                    media.classList.add('portrait');
                }
            }
        });
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
