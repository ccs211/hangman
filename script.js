const wordElement = document.getElementById('word');
const wrongLettersElement = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['sofa', 'isla', 'sillas', 'platos', 'cubiertos', 'armario', 'nutribullet', 'kitchenaid'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordElement.innerHTML = `
    ${selectedWord
      .split('')
      .map(letter => `
        <span class="letter">
          ${correctLetters.includes(letter) ? letter : ''}
        </span>
      `).join('')}
  `;

  const innerWord = wordElement.innerText.replace(/\n/g, '');

  if(innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! 🚀 You won! 😎';
    popup.style.display = 'flex';
  }
}

// update the wrong letters
function updateWrongLettersElement() {
  console.log('Update wrong');
}

// show notification
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000)
}


// keydown letter press on the window object
window.addEventListener('keydown', e => {
  // console.log(e.keyCode);
  if(e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if(selectedWord.includes(letter)){
      if(!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if(!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersElement();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();