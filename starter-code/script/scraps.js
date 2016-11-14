

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

function loadImage() {
	alert("img loaded");
}

function pausecomp(ms) {
	ms += new Date().getTime();
	while (new Date() < ms){}
}

function resizeWindows(){
	var evt = document.createEvent('UIEvents');
	evt.initUIEvent('resize',true,false,window,0);
	window.dispatchEvent(evt);
}

//displayCardFronts(this);

//console.log(document.getElementsByTagName('img')[0]);
//if (cardsInPlay.length == 2) {console.log(document.getElementsByTagName('img')[1]);}
           //while(document.getElementsByTagName('img') != 2){};
//	if (cardsInPlay.length === 1) {oldthis = this;}
