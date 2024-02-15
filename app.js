// function playGround() {
//   const playGrounde = document.getElementById('playGround');
//   playGrounde.classList.add('hidden');
//   const playing = document.getElementById('playinged');
//   playing.classList.remove('hidden');
// }
//--------used all hidden function ----------
function hiddenElement(element) {
  const elementd = document.getElementById(element);
  elementd.classList.add('hidden');
}
function unHidddenElemnt(unHidddenElemnt) {
  const unHidddenElemntd = document.getElementById(unHidddenElemnt);
  unHidddenElemntd.classList.remove('hidden');
}

function generatRandomWord() {
  const word = 'abcdefghijklmnopqrstuvwxyz';
  const num = word.split('');
  const rendom = Math.random() * 25;
  const rounded = Math.round(rendom);

  const alphabetd = num[rounded];
  return alphabetd;
}
function sectBackground(element) {
  const elementd = document.getElementById(element);
  elementd.classList.add('bg-orange-400');
}

function removeElemnt(element) {
  const elementd = document.getElementById(element);
  elementd.classList.remove('bg-orange-400');
}

function addGetElementSum(event) {
  const addedElement = document.getElementById(event);
  const eventValue = addedElement.innerText;
  const eventParsint = parseInt(eventValue);
  return eventParsint;
}
function removeSumElemnt(curentLife) {
  const curentLifed = document.getElementById(curentLife);
  const curentLifeds = curentLifed.innerText;
  const curenParestn = parseInt(curentLifeds);
  return curenParestn;
}

function addElementValue(element, values) {
  const elementVlaue = document.getElementById(element);
  elementVlaue.innerText = values;
}

function gamesOvers() {
  hiddenElement('playinged');
  unHidddenElemnt('MainScored');

  const lestScore = addGetElementSum('scoredAdded');
  addElementValue('fainalScored', lestScore);
}

function playedAgian() {
  hiddenElement('playGround');
  hiddenElement('MainScored');
  unHidddenElemnt('playinged');
  addElementValue('curentLife', 5);
  addElementValue('scoredAdded', 0);
  const curentAlphabets = creatAlbpabet('curentAlphabet');
  removeElemnt(curentAlphabets);
  contnuGames();
}

function creatAlbpabet(element) {
  const elements = document.getElementById(element);
  const elementParsint = elements.innerText;
  return elementParsint;
}
//---------played section styel-------
function playGround() {
  hiddenElement('playGround');
  unHidddenElemnt('playinged');
  contnuGames();
}
function contnuGames() {
  const alpha = generatRandomWord();
  const showAlohabetd = document.getElementById('showAlohabet');
  showAlohabetd.innerText = alpha;

  sectBackground(alpha);
}
//key upp section start

function keyupSetin(event) {
  const playerPast = event.key;
  if (playerPast === 'Escape') {
    gamesOvers();
  }
  const showAlohabet = document.getElementById('showAlohabet');
  const cruntAlohabeat = showAlohabet.innerText;
  const exputAlphabet = cruntAlohabeat.toLowerCase();

  if (playerPast === exputAlphabet) {
    const sumElemnt = addGetElementSum('scoredAdded');
    const updetScore = sumElemnt + 1;

    addElementValue('scoredAdded', updetScore);
    removeElemnt(exputAlphabet);
    contnuGames();
  } else {
    const removeElemnt = addGetElementSum('curentLife');
    const updetScored = removeElemnt - 1;
    addElementValue('curentLife', updetScored);
    if (updetScored === 0) {
      gamesOvers();
    }
  }
}
document.addEventListener('keyup', keyupSetin);
