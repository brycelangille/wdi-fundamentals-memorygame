console.log("Up and running!");
const cards = [
{
  rank: "queen",
  suite: "hearts",
  cardImage: "images/queen-of-hearts.png"
}, 
{
  rank: "queen",
  suite: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suite: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suite: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  console.log("User flipped" + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suite);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    {
let cardElement =  document.createElement('img');
cardElement.setAttribute('src','images/back.png');
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
document.getElementById('game-board').appendChild(cardElement);
}
}
}

createBoard();


// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// const cards= ["queen", "queen", "king" , "king"];
// card[0]="";
// cardOne[1]=["queen"];
// cardTwo[2]=["queen"];
// cardThree[3]=["king"];
// cardFour[4]=["king"];
// let cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne
// let cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);
//console.log("User flipped queen");
//console.log("User flipped king");
//flipCard(0);
//flipCard(2);