const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 30;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let direction = true;

  function draw(X, Y) {
    if(!isDrawing) return; 
    
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(X, Y);
    ctx.stroke();
    [lastX, lastY] = [X, Y];
    hue++;

    if(hue >= 360) {
      hue = 0;
    }

    if(ctx.lineWidth >= 30 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
    
    if(direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.clientX, e.clientY];
  });
  canvas.addEventListener('mousemove', (e) => draw(e.clientX, e.clientY));
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

  canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
  });
  canvas.addEventListener('touchmove', (e) => draw(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
  canvas.addEventListener('touchend', () => isDrawing = false);
  canvas.addEventListener('touchcancel', () => isDrawing = false);
