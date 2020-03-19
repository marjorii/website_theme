document.querySelectorAll('footer > *').forEach(function(element) {
    element.setAttribute('tabindex', '0');
});

var isTactile = false;
if ( /Android|webOS|iPhone|iPad|Kindle|Tablet|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isTactile = true;
    document.querySelector('footer p:first-of-type').textContent = 'Conception : Marjorie Ober';
    document.querySelector('footer p:nth-of-type(2)').innerHTML = 'Fontes : <a href="https://usemodify.com/fonts/karmilla/" target="_blank">Karmilla</a> et <a href="http://vollkorn-typeface.com/" target="_blank">Vollkorn</a>';
}
else {
    isTactile = false;
}
