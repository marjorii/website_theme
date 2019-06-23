document.getElementById('select-page').style.cssText = 'background-color: #fffccf';
document.querySelectorAll('#select-page a').forEach(function(link) {
    link.classList.add('selected');
});
