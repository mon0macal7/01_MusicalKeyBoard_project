
const getSound = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(key);
  //console.log(audio);
  if (!audio) return; //if the keycode doesn't have an audio file, return stop the function
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add('playing');
};

const removeTransitions = e => {
  if (e.propertyName !== 'transform') return; //skip if it's not a transformation
  e.target.classList.remove('playing');
  //this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
console.log(keys);

keys.forEach(key => key.addEventListener('transitionend', removeTransitions));

window.addEventListener('keydown', getSound);






