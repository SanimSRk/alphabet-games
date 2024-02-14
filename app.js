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
