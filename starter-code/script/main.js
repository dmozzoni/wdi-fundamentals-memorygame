// Card declarations and values
var name = 'game-board'
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var cardNum = cards.length;
var oldthis = null;


var createCards = function(elementID,cardArray) {
  for (var i= 0; i<cardArray.length; i++) {
    var aCard = document.createElement('div');
    aCard.className = 'card';
    elementID.appendChild(aCard);
  }
}

var createBoard = function(cardArray) {

	createCards(document.getElementById('game-board'),cardArray);

	var cardID = document.getElementsByClassName('card');
	for (var i=0; i<cardID.length; i++) {
    	cardID[i].setAttribute('data-card', cardArray[i]);
		cardID[i].addEventListener('click', isTwoCards);
	}
}

function isMatch(cardsInPlay) {
   if (cardsInPlay.length === 2) {
   	  if (cardsInPlay[0] === cardsInPlay[1]) {
 //  	  	alert('Yay! A Match!');
   	  	return true;}
   }
 //  alert('Sorry No Match Found');
   return false;
}

function loadImage() {
	alert("img loaded");
}

function displayCardFronts(thiss) {
//	cardsInPlay.push(thiss.getAttribute('data-card'));
	if (thiss.getAttribute('data-card')==='queen') {
		thiss.innerHTML = '<img src="images/spades-884203_640.png" alt="Queen of Spades" height="150" width="100" />';
	} else {
		thiss.innerHTML = '<img src="images/hearts-884196_640.png" alt="King of Hearts" height="150" width="100" />';
	}
//			pausecomp(500);
//resizeWindows();
//document.getElementById('game-board').style.display = "none";
//document.getElementById('game-board').style.display = "block";

return;
}

var forceRedraw = function(element) {
	if (!element) {return;}
	var n = document.createTextNode(' ');
	var disp = element.style.display;
	element.appendChild(n);
	element.style.display = 'none';
	setTimeout(function(){
		element.style.display=disp;
		n.parentNode.removeChild(n);
    },500);
}



function clearNoMatch(thiss,oldthis) {

}

function resizeWindows(){
	var evt = document.createEvent('UIEvents');
	evt.initUIEvent('resize',true,false,window,0);
	window.dispatchEvent(evt);
}



function isTwoCards() {
// checks to see if there are cards in play

//	console.log(cardsInPlay);
	cardsInPlay.push(this.getAttribute('data-card'));

displayCardFronts(this);
//displayCardFronts(this);
//forceRedraw(this);

//console.log(document.getElementsByTagName('img')[0]);
//if (cardsInPlay.length == 2) {console.log(document.getElementsByTagName('img')[1]);}


	if (cardsInPlay.length === 2) { // check for match if 2 cards in play

//while(document.getElementsByTagName('img') != 2){};

           var tmp = isMatch(cardsInPlay);

//			pausecomp(1000);

           if (tmp) {alert("Match");} else {
           	alert("No Match");
           	oldthis.innerHTML = '';
           	this.innerHTML = '';
           }
//		if (tmp == false) {
//			console.log('match: '+tmp);
//			console.log(this);
//			this.innerHTML = '';
 //           console.log(oldthis);
//	        oldthis.innerHTML = '';
 //       } //else { console.log('match: '+tmp);}
		    cardsInPlay = []; // clear for next try
	}

	oldthis = this;

}

function pausecomp(ms) {
	ms += new Date().getTime();
	while (new Date() < ms){}
}


createBoard(cards);
