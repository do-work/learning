var html = '';
var rgbColor = 0;

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    var color = 'rgb(';
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ')';
    return color;
}

for (var i=0; i < 10; i++) {
    rgbColor = randomColor();
    html += '<div style=background-color:' + rgbColor + '></div>';
}

document.write(html);