var s = io();
s.on('color', function (color) {
  document.body.style.backgroundColor = color;
});

var h = window.location.href;
var c = document.getElementById('curl');
var l = document.getElementById('link');
c.innerHTML = 'curl -X POST -d color=#2ecc71 ' + h + 'color';
l.href = h + 'color/+2ecc71';
l.innerHTML = l.href;
