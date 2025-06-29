// Flip the box when the gift emoji is clicked or activated by keyboard
document.querySelectorAll('.gift-emoji').forEach(function(giftEmoji) {
  giftEmoji.addEventListener('click', function() {
    const box = giftEmoji.closest('.flip-box');
    box.classList.add('flipped');
  });
  // Keyboard accessibility: flip on Enter or Space
  giftEmoji.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const box = giftEmoji.closest('.flip-box');
      box.classList.add('flipped');
    }
  });
});

// Flip back when clicking the back side of the box
document.querySelectorAll('.flip-box-back').forEach(function(back) {
  back.addEventListener('click', function() {
    const box = back.closest('.flip-box');
    box.classList.remove('flipped');
  });
});
