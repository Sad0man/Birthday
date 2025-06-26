function turnOnLights() {
  document.body.style.background = 'linear-gradient(to top right, #fff0f6, #ffd6e0)';
  const bulbsDiv = document.getElementById('bulbs');
  bulbsDiv.innerHTML = '';

  const colors = ['red', 'blue', 'green', 'orange', 'pink', 'yellow'];
  colors.forEach(color => {
    const bulb = document.createElement('img');
    bulb.src = `assets/img/bulb_${color}.png`;
    bulb.style.display = 'inline';
    bulbsDiv.appendChild(bulb);
  });

  document.getElementById('btn-lights').style.display = 'none';
  document.getElementById('btn-music').style.display = 'inline';
}

function playMusic() {
  const music = document.getElementById('birthdayMusic');
  music.play().then(() => {
    music.loop = true;
  }).catch(err => {
    console.log("Autoplay blocked. Waiting for user interaction.");
  });

  document.getElementById('btn-music').style.display = 'none';
  document.getElementById('btn-decorate').style.display = 'inline';
}

function decorate() {
  // Banner
  setTimeout(() => {
    const banner = document.getElementById('banner');
    banner.innerHTML = '<img src="assets/img/banner.png">';
    banner.querySelector('img').style.display = 'block';
  }, 500);

  // Balloon Border
  setTimeout(() => {
    const border = document.getElementById('balloon-border');
    border.innerHTML = '<img src="assets/img/Balloon-Border.png">';
    border.querySelector('img').style.display = 'block';
  }, 1500);

  // Balloons
  setTimeout(() => {
    const balloons = document.getElementById('balloons');
    balloons.innerHTML = '';
    for (let i = 1; i <= 6; i++) {
      setTimeout(() => {
        const img = document.createElement('img');
        img.src = `assets/img/b${i}.png`;
        img.style.animationDelay = `${i * 0.1}s`;
        balloons.appendChild(img);
      }, i * 300);
    }
  }, 2500);

  // Next button
  setTimeout(() => {
    document.getElementById('btn-decorate').style.display = 'none';
    document.getElementById('btn-cake').style.display = 'inline';
  }, 4500);
}

function showCake() {
  setTimeout(() => {
    const cake = document.getElementById('cake');
    cake.innerHTML = '<img src="assets/img/cake.gif">';
    cake.querySelector('img').style.display = 'block';
  }, 500);

  setTimeout(() => {
    document.getElementById('btn-cake').style.display = 'none';
    document.getElementById('btn-message').style.display = 'inline';
  }, 1500);
}

function showMessage() {
  const msg = document.getElementById('message');
  msg.innerHTML = `
    <p>🎉 Happy Birthday, Tahshin! 🎈</p>
    <p>May your year be as bright as your smile and as sweet as this cake!</p>
    <p>Wishing you success, laughter, and dreams come true. 🥳</p>
  `;
  setTimeout(() => {
    msg.style.opacity = 1;
  }, 500);
  document.getElementById('btn-message').style.display = 'none';
}
