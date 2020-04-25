console.log("Up and running!");
//let cardOne = "queen";
//let cardTwo = "queen";
//let cardThree = "king";
//let cardFour = "king";
const cards= ["queen", "queen", "king" , "king"];
card[0]="";
cardOne[1]=["queen"];
cardTwo[2]=["queen"];
cardThree[3]=["king"];
cardFour[4]=["king"];

//let cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);

//let cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);

let cardsInPlay = [];
console.log("User flipped queen");
console.log("User flipped king");

Function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }

function flipCard(){
  const cardId();
  console.log("User flipped" + cards[cardId]);
  flipCard.push(cardsInPlay);
}