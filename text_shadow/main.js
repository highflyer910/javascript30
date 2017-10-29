  const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const walk = 100;

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;

    if (e.type === 'touchmove') {
      var { clientX: x, clientY: y } = e.touches[0];
    } else {
      var { offsetX: x, offsetY: y } = e;
    }
    
    if(this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 #F5A774,
      ${xWalk * -1}px ${yWalk}px 0 #F5B515,
      ${yWalk}px ${xWalk * -1}px 0 #ED452B,
      ${yWalk * -1}px ${xWalk}px 0 #C10412
    `;
  }

  hero.addEventListener('mousemove', shadow);
  hero.addEventListener('touchmove', shadow);