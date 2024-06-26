// Plays sound that matches keyboard key on 'keydown' event listener
function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!key || !sound) return;

  sound.currentTime = 0; // rewind sound to the start (so we can spam sound)
  sound.play();
  key.classList.add('playing');
}

// Removes transform transition from key when transition ends
function removeTransition(e) {
  // we only want the transform transition
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
