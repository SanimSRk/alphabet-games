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

  const showAlohabet = document.getElementById('showAlohabet');
  const cruntAlohabeat = showAlohabet.innerText;
  const exputAlphabet = cruntAlohabeat.toLowerCase();

  if (playerPast === exputAlphabet) {
    const scoredAddeds = document.getElementById('scoredAdded');
    const scord = scoredAddeds.innerText;
    const scordPrasint = parseInt(scord);
    const sum = scordPrasint + 1;
    scoredAddeds.innerText = sum;
    removeElemnt(exputAlphabet);
    contnuGames();
  } else {
    const curentLife = document.getElementById('curentLife');
    const curentLifeds = curentLife.innerText;
    const curenParestn = parseInt(curentLifeds);
    const sumded = curenParestn - 1;
    curentLife.innerText = sumded;
    console.log('You lose the point');
  }
}
document.addEventListener('keyup', keyupSetin);

function scordAdd(event) {
  event;
}
