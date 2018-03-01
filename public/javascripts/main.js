function setup(sWidth, sHeight) {
  const canv = document.createElement('canvas');
  canv.id = 'main';
  canv.width = sWidth || window.innerWidth;
  canv.height = sHeight || window.innerHeight;

  const container = document.getElementById('container');
  if (container) {
    container.appendChild(canv);
  } else {
    const paragraph = document.createElement('p');
    paragraph.innerText('Browser is not compatible. Try with the last version of Chrome or Firefox');
    container.appendChild(paragraph);
  }
}

function drawScore(ctx, x, y, score, color) {
  ctx.fillStyle = color;
  ctx.fillText(`${score.text}: ${score.points}`, x, y);
}

function drawPlayer(ctx, playerImage, x, y, w, h) {
  var img = new Image();
  img.addEventListener('load', function() {
    ctx.drawImage(img, x, y, w/3, h/3); // Scaled at 33%
  }, false);
  img.src = playerImage;
}

function init(sWidth, sHeight) {
  setup(sWidth, sHeight);
  
  const canvas = document.getElementById('main');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    drawScore(ctx, 10, 20, { text: 'Points', points: '100'}, 'white');
    drawPlayer(ctx, './images/player_mario.png',100, 100, 200, 200);
  }
}

document.onload = init(400, 400);
