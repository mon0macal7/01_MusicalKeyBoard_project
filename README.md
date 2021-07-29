# Musical KeyBoard

---

## Description

This applications should allow the user to play an instrument with the keyboard, have a good integration between the sounds and respect the space that the user play in between, if replay should restart the sound from starting. The UI of this app should be tematic to the instrument and be pleasant to see, have efect on the key pressed.

---

## User Stories

**User: Music Teacher**

- The User want to play instruments from their computer keyboard.

- The user want to give to others a concert and have visual explanation of musical notes or instrument played

---

## Technical Requeriments /

- Individual project
- Fork this repository
- Follow the folder structures dividing per languages: JS, CSS, HTML5
- Add an `Assets` folder to add img, and another folder of `music_insturment` .mp3 sounds.
- Follow up Semantic HTML rules, have title, footer, center content and visual alignment.
- CLUES:

- `data-key` data attributes html
- [`keyBoardEvent` research](https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent)
- get the key code for each keyboard to press as `keydown` event
- `audio` html element

```
       <div data-key="65" class="key">
        <kbd>A</kbd> <span class="sound"> Goblet drum dum</span>
      </div>
```

- `document.querySelector()`
- `e.keyCode`
- `play()`
- `document.querySelectorAll()`
- `addEventListenner()`
- `window.addEventListener()`

```
//get the key values example with query selector
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//global window function example
window.addEventListener('keydown', getSound);

```

- [Download free music sounds](http://www.sonidosmp3gratis.com/botonera.php?botonera=instrumentosmusicales1)
- [Get the keycode of any keyboard key](https://keycode.info/)

---

# ReadMe

---

> This Readme should be replaced with the project documentation (check template)
