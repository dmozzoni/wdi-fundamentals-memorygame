// Card declarations and values
var name = 'game-board';
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var cardNum = cards.length;
var oldthis = null;
var scoreID = null;
var numMatch = 0;


var resetBoard = function() {
// Reset the board and variables
	oldthis = null;
	numMatch = 0;
	cardsInPlay = [];
	cardID  = document.getElementsByClassName('card');
	boardID = document.getElementById('game-board');
	scoreID[0].innerHTML='Matches Found: 0';

	for (var i=cardID.length-1; i>= 0; i--) {
		boardID.removeChild(boardID.childNodes[i]);
	}
	createBoard(cards);
};


var createCards = function(elementID,cardArray) {
// Create the cards	and attach to the board
  for (var i= 0; i<cardArray.length; i++) {
    var aCard = document.createElement('div');
    aCard.className = 'card';
    elementID.appendChild(aCard);
  }
};


var createBoard = function(cardArray) {
// Setup the playing board.
// displayCardFronts doesn't display the card images until the
// event handler is complete when using chrome and the 'click'.
// This causes the alerts in isMatch to display first. Switching
// 'mousedown' works, however it causes problems in FF (which
// worked OK with 'click'). EDGE works ok either way. Hoever in
// chrome can't reselect a matched pair (good), but can in the
// other browsers. Also in chrome 'mousedown' has problems if
// clicking and moving off.

  shuffle(cardArray);  //shuffle the card array
	createCards(document.getElementById('game-board'),cardArray);

	var cardID = document.getElementsByClassName('card');
	for (var i=0; i<cardID.length; i++) {
    	cardID[i].setAttribute('data-card', cardArray[i]);
		cardID[i].addEventListener('mousedown', displayCardFronts);
//      doesn't work in chrome (paints after handler)
//		cardID[i].addEventListener('click', displayCardFronts);
		cardID[i].addEventListener('click', isTwoCards);
//		cardID[i].addEventListener('mouseup', isTwoCards);
	}
};


function isMatch(cardsInPlay) {
// check if selected cards match then throw alerts. Also update score.
   if (cardsInPlay.length === 2) {
   	  if (cardsInPlay[0] === cardsInPlay[1]) {
   	  	alert('Yay! A Match!');
		numMatch += 1;
		scoreID[0].innerHTML='Matches Found: '+numMatch;
	    if (numMatch == 2) {alert('Congrats! You Win! Press Reset in the Menubar to Play Again.');}
   	  	return true;
	  }
   }
   alert('Sorry No Match Found');
   return false;
}


function displayCardFronts() {
// Display the card images via innerHTML insertion
	if (this.getAttribute('data-card')==='queen') {
		this.innerHTML = '<img src="images/spades-884203_640.png" alt="Queen of Spades" />';
	} else {
		this.innerHTML = '<img src="images/hearts-884196_640.png" alt="King of Hearts" />';
	}
return;
}


function isTwoCards() {
// checks to see if there are cards in play

	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) { // check for match if 2 cards in play
       var tmp = isMatch(cardsInPlay);
           if (!tmp) {
           	oldthis.innerHTML = '';
           	this.innerHTML = '';
           }
		   cardsInPlay = []; // clear for next try
	}
    oldthis = this;
}

function shuffle(array) { // Ripped from StackOverflow
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}


createBoard(cards);
document.getElementById('resetButton').addEventListener('click', resetBoard);
scoreID = document.getElementsByTagName("H3");
