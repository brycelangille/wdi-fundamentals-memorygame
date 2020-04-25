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
console.log("User flipped queen");
console.log("User flipped king");

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
  }
function flipCard(){
  console.log("User flipped" + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suite);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}
}