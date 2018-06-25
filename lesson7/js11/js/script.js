var start;
var stopId;
var progress;
var x = false;

var element = document.getElementById('element');


function step(timestamp) {
  if (!start || progress > 400) start = timestamp;
  progress = (timestamp - start) / 10 + 50;
  element.style.top = progress + 'px';
  stopId = window.requestAnimationFrame(step);
}

function myAnimation() {
  if (!x) {
    x = true;
    window.requestAnimationFrame(step);
  } else {
    x = false;
    cancelAnimationFrame(stopId);
  }
}