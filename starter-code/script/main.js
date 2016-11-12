// Card declarations and values
var cardNum = 4;
var name = 'game-board'
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//if (cardOne === cardTwo) {
//	alert("You Found a Match!");
//} else {
//	alert("Sorry, Try again.");
//}
//(cardOne === cardThree) ? alert("Yay") : alert("Nay");

//    <div class="card"></div>

var createCards = function(elementID,num) {
  for (var i= 1; i<=num; i++) {
    var aCard = document.createElement('div');
    aCard.className = 'card';
    elementID.appendChild(aCard);
  }
}

createCards(document.getElementById('game-board'),cardNum);


