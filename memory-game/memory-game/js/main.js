var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipcard(cardID){

console.log("User flipped " + cards[cardID]);
cardsInPlay.push(cards[cardID]);
if (cardsInPlay.length === 2) {
	checkForMatch();
}
}

flipcard(0);
flipcard(2);


