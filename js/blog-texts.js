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
document.querySelectorAll('.item').forEach(function(elem) {
    elem.addEventListener('click', function(event) {
        console.log(elem.href);
        if (elem.href.includes('/blog/publications/texts/si_2019')) {
            elem.href = 'https://marjorieober.com/home/user/themes/website_theme/docs/SI_2019.pdf';
        }
    });
});
