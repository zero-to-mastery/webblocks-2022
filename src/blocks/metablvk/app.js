/**
 * A simple text editor
 */
const editor = document.querySelector('.editor');
const textArea = document.createElement('p');

// Build text area
let text = "I'm a simple text editor...";
textArea.appendChild(document.createTextNode(text));
textArea.classList.add('text-area');
// Build editor

editor.appendChild(textArea);

/**
 * TODO:
 * - [x] Allow basic user input and display cursor
 * - Add in ability to make text strong, or emphasized
 */

const updateDOM = (text) => {
  textArr = text.split('\n');
  // remove the previous children
  while (textArea.lastChild) {
    textArea.removeChild(textArea.lastChild);
  }
  // update the dom with the current children
  textArr.forEach((text, i) => {
    if (i !== 0) {
      textArea.appendChild(document.createElement('br'));
    }
    textArea.appendChild(document.createTextNode(text));
  });
};

const typing = (e) => {
  // logic goes here.
  switch (e.code) {
    case 'Backspace':
      text = text.slice(0, text.length - 1);
      break;
    case 'Enter':
      text += '\n';
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'ControlLeft':
    case 'ControlRight':
      // No logic, because it will capitalize the text automatically.
      break;
    case ' ':
      text += ' ';
    default:
      text += e.key;
  }
  updateDOM(text);
};

window.addEventListener('click', (e) => {
  // if event.target equals editor add cursor, and ability to type
  // else unfocus editor if focused
  if (e.target === editor || e.target === textArea) {
    window.addEventListener('keydown', typing);
    textArea.classList.add('cursor');
  } else {
    console.log('Outside of editor clicked');
    textArea.classList.remove('cursor');
  }
});
