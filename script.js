window.onload(function(){
  canvas = document.getElementById('board');
  ctx    = canvas.getContext('2d');
  document.addEventListener('keydown', keyPush);
  setInterval(game, 1000/15);
});

xv = y;
v  = 0;
