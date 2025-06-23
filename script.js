// Party popper utility
function partyPop(containerId) {
  const container = document.getElementById(containerId);
  for (let i = 0; i < 26; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = (5 + Math.random() * 90) + '%';
    confetti.style.background = `hsl(${Math.floor(Math.random()*360)},90%,${60+Math.random()*30}%)`;
    confetti.style.transform = `scale(${0.8+Math.random()*0.7}) rotate(${Math.random()*360}deg)`;
    confetti.style.animationDelay = `${Math.random()*0.5}s`;
    container.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1600);
  }
}

// Flip logic and sound
const letterCard = document.getElementById('letterCard');
const letterFront = document.getElementById('letterFront');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const giftLink = document.getElementById('giftLink');
const audio = document.getElementById('birthday-audio');

// Flip to first page (open envelope)
letterFront.addEventListener('click', function() {
  letterCard.classList.add('flipped');
  setTimeout(() => {
    partyPop('partypop1');
    audio.currentTime = 0;
    audio.play();
  }, 420);
});

// Flip to second page
giftLink.addEventListener('click', function(e) {
  e.preventDefault();
  letterCard.classList.add('double-flipped');
  setTimeout(() => partyPop('partypop2'), 350);
});

// Keyboard accessibility
letterFront.tabIndex = 0;
letterFront.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    letterFront.click();
  }
});
giftLink.tabIndex = 0;
giftLink.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    giftLink.click();
  }
});