document.getElementById('select-page').style.cssText = 'background-color: #f4fefe';
document.querySelectorAll('#select-page a').forEach(function(link) {
    link.classList.add('selected');
});
