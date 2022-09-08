/* change background image */

var i = 0;
var images = [
    'images/1.jpg',
    'images/a.png',
    'images/e.png'
];

setInterval(function () {
    if (i < images.length) {
        document.getElementById('main').style.backgroundImage = "url('" + images[i] + "')";
        i += 1;
    }
    else {
        i = 0;
    }
}, 5000);