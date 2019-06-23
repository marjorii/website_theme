document.getElementById('select-page').style.cssText = 'background-color: #f7eef3';
var isTactile = false;
console.log(document.documentElement.lang);
if ( /Android|webOS|iPhone|iPad|Kindle|Tablet|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isTactile = true;
    if (document.documentElement.lang == 'en') {
        document.querySelector('footer p:first-of-type').textContent = 'Design : Marjorie Ober';
        document.querySelector('footer p:nth-of-type(2)').innerHTML = 'Fonts : <a href="https://usemodify.com/fonts/karmilla/" target="_blank">Karmilla</a> and <a href="http://vollkorn-typeface.com/" target="_blank">Vollkorn</a>';
    }
    else {
        document.querySelector('footer p:first-of-type').textContent = 'Conception : Marjorie Ober';
        document.querySelector('footer p:nth-of-type(2)').innerHTML = 'Fontes : <a href="https://usemodify.com/fonts/karmilla/" target="_blank">Karmilla</a> et <a href="http://vollkorn-typeface.com/" target="_blank">Vollkorn</a>';
    }

}
else {
    isTactile = false;
}
