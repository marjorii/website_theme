var currentWidth = document.querySelector('header nav li:nth-of-type(2)').offsetWidth;
document.querySelectorAll('#select-page li').forEach(function(elem) {
    elem.style.cssText = 'width: ' + currentWidth + 'px';
});
document.querySelector('header nav li button').onclick = function(e) {
    e.preventDefault();
    this.setAttribute('aria-expanded', 'true');
    document.getElementById('select-page').classList.toggle('hide');
}
document.querySelector('header nav li:nth-of-type(3) a').onmouseenter = function() {
    document.getElementById('dancing-banana').classList.remove('hide');
}
document.querySelector('header nav li:nth-of-type(3) a').onmouseleave = function() {
    document.getElementById('dancing-banana').classList.add('hide');
}


var isTactile = false;
if ( /Android|webOS|iPhone|iPad|Kindle|Tablet|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isTactile = true;
    document.querySelectorAll('.tooltip-img').forEach(function(elem) {
        elem.style.cssText = 'display: none';
    });
    document.querySelectorAll('.hover-text').forEach(function(elem) {
        elem.style.cssText = 'display: none';
    });
    document.getElementById('dancing-banana').style.cssText = 'display: none';
    // document.querySelector('header').style.cssText = 'right: 0';
    // document.querySelector('footer.flex-line').style.cssText = 'right: 0';
    // document.querySelector('aside.right').style.cssText = 'right: 0';
    // document.querySelector('header').style.cssText = 'padding-left: 50px';
}
else {
    isTactile = false;
}

var isPhone = false;
if ( /Android|iPhone|BlackBerry/i.test(navigator.userAgent) && window.innerWidth > window.innerHeight) {
    isPhone = true;
    document.querySelector('aside.left ul').style.cssText = 'display: none';
    document.querySelector('aside.right > ul').style.cssText = 'margin-left: 0';
}
else {
    isPhone = false;
}
