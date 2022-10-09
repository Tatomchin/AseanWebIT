/* JavaScript for Asean WebProject */

/* Menu Side */
window.onscroll = function () { hideMenu(), topPicture(), asean(), members(), hoverLogoOn(), hoverLogoOut(),containerOn()};

function hideMenu(){
	let screeenW = screen.width;
	let screeenH = screen.height;
	let curentPosition = 0;
	let position = document.documentElement.scrollTop;
				 
	document.getElementsByClassName('BG_headMenu')[1].style.opacity = 1 - position/100;
  	if (position > 100) {
    	document.getElementsByClassName('BG_headMenu')[0].style.visibility = "hidden";
    	document.getElementsByClassName('BG_headMenu')[1].style.visibility = "hidden";
    	document.getElementById('Menu').style.visibility = "hidden";

  	}

  	else{
  		document.getElementsByClassName('BG_headMenu')[0].style.visibility = "visible";
  		document.getElementsByClassName('BG_headMenu')[1].style.visibility = "visible";
  		document.getElementById('Menu').style.visibility = "visible";
  	}

  	//Hide botton BackToTop

  	if(position > 300){
  		document.getElementById('backToTop').style.visibility = "visible";
  	}
  	else{
  		document.getElementById('backToTop').style.visibility = "hidden";
  	}


}

/* ------------------------------------------------------------------------ */

/* Top Picture */
function topPicture() {
	let position = document.documentElement.scrollTop;
	let flagOpacity = position/200;
	

	if (flagOpacity > 1) {
		flagOpacity = 1;
	}
	console.log(flagOpacity);

	for(let i = 0 ; i < 10; i++){
		document.getElementsByClassName('top-flag')[i].style.opacity = 1-flagOpacity;
	}
}

/* ------------------------------------------------------------------------ */

/* Content asean */

function asean(){
	
	let position = document.documentElement.scrollTop;
	//console.log(position);

	// This condition for fix elements position.
	let posFix = position;
	let logoAseanFix = position;
	let BlueBG = position/10;
	let content1A = (position-660)/100;
	let content2A_1 = (position-650);
	let content2A_2 = (position-650)/100;
	
	
	// console.log(content2A);
	if(position>520){ //Logo asean.
			posFix = 400;
	}

	if(logoAseanFix>650){ //Logo asean.
			logoAseanFix = 650;
	}

	if(BlueBG>50){ //Blue background.
		BlueBG = 50;
	}

	if(content1A>1){ // opacity
		content1A = 1;
	}

	if(content1A<0){
		content1A = 0;
	}


	if(content2A_1>100){ // Position
		content2A_1 = 100;
	}

	if(content2A_1<0){ // Position
		content2A_1 = 0;
	}

	if(content2A_2>1){ // opacity
		content2A_2 = 1;
	}



	
	document.getElementById('pic-1-1a').style.top = -680+logoAseanFix+"px";

	// Condition for set elements position.
	if(position >= 100){
		// document.getElementById('pic-1-1a').style.visibility = "visible";
		
		document.getElementById('bg-a1').style.left = BlueBG + "%";
		document.getElementById('bg-a2').style.right = BlueBG + "%";

	}
	else{
		// document.getElementById('pic-1-1a').style.visibility = "hidden";
	}

	// document.getElementById('pic-1-1a').style.opacity = posFix/400;
	document.getElementById('bg-a1').style.opacity  = posFix/400;
	document.getElementById('bg-a2').style.opacity = posFix/400;

	// console.log(posFix);

	if(position > 400){
		document.getElementById('content-1a').style.opacity = content1A;
		document.getElementById('content-1a').style.fontSize = content1A+"em";
		document.getElementById('content-2a').style.right = content2A_1+"px";
		document.getElementById('content-2a').style.opacity = content2A_2;
		document.getElementById('pic-2a').style.top = 450+content2A_1+"px";
		document.getElementById('pic-2a').style.opacity = content2A_2;
		
	}
}

/* Content Members */

function members(){
	let position = document.documentElement.scrollTop;
	let logoflag = ((position-1250)*125)/400;
	let logo10_1 = (position-1250)*545/400;
	let logo10_2 = (position-1250)/400;
	// console.log(position);
	//console.log(logoflag);
	// This condition for fix elements position.
	if(logoflag > 125){
		logoflag = 125;
	}
	if(logo10_1 > 545){
		logo10_1 = 545;
	}
	if(logo10_2 > 1){
		logo10_2 = 1;
	}
	

	// Condition for set elements position.

	if (position > 1250) {
		for (let i = 0; i < 10; i++) {
			document.getElementsByClassName('logoflag')[i].style.width = logoflag + "px";
			document.getElementsByClassName('logoflag')[i].style.height = logoflag + "px";
		}
		document.getElementById('logo10').style.left = logo10_1 + "px";
		document.getElementById('logo10').style.opacity = logo10_2;
	}
	else {
		for (let i = 0; i < 10; i++) {
			document.getElementsByClassName('logoflag')[i].style.width = 0 + "px";
			document.getElementsByClassName('logoflag')[i].style.height = 0 + "px";
		}
		document.getElementById('logo10').style.left = 0 + "px";
		document.getElementById('logo10').style.opacity = 0;
	}
}

function hoverLogoOn(x) {
	let position = document.documentElement.scrollTop;
	if (position > 1500) {
		if(x>0&&x<=10){
			document.getElementById('c3-' + x).style.visibility = "visible";
			document.getElementById('c4-' + x).style.visibility = "visible";
			document.getElementsByClassName('content-3b-1')[x - 1].style.animation = "moveInC3 1s";
			document.getElementsByClassName('c4-logo')[x - 1].style.animation = "moveInC4 1s";
		}
	}
}

function hoverLogoOut(x) {
	let position = document.documentElement.scrollTop;
	if (position > 0) {
		if(x>0&&x<=10){
			document.getElementById('c3-' + x).style.visibility = "hidden";
			document.getElementById('c4-' + x).style.visibility = "hidden";
			document.getElementsByClassName('content-3b-1')[x - 1].style.animation = "";
			document.getElementsByClassName('c4-logo')[x - 1].style.animation = "";
		}
	}
}

function time(){ //เผื่อใช้ครับ
	var d = new Date(); 
	var n = d.getTime();
	// console.log(n) 

	setTimeout("time()",1000);

}
	

// Content Video
var count = 1;
function Next() {
	var element1 = document.getElementById("vid2");
	var element2 = document.getElementById("vid1");
	var element3 = document.getElementById("vid3");
	var bg = document.getElementById("bg");
	if (count == 1) {
		count++;
		bg.style.backgroundImage = "url('https://img.youtube.com/vi/osrXeIin9FE/maxresdefault.jpg')";
		element2.style.zIndex = "1";
		element3.style.zIndex = "1";
		element1.style.zIndex = "-1";
		element2.style.animation = "move1 0.7s linear forwards";
		element3.style.animation = "move2 0.7s linear forwards";
		element1.style.animation = "move3 0.7s linear forwards";
	}
	else if (count == 2) {
		count++;
		bg.style.backgroundImage = "url('https://img.youtube.com/vi/WAnfj8v5acM/maxresdefault.jpg')";
		element3.style.zIndex = "1";
		element1.style.zIndex = "1";
		element2.style.zIndex = "-1";
		element3.style.animation = "move1 0.7s linear forwards";
		element1.style.animation = "move2 0.7s linear forwards";
		element2.style.animation = "move3 0.7s linear forwards";
	}
	else if (count == 3) {
		count = 1;
		bg.style.backgroundImage = "url('https://img.youtube.com/vi/v5ZqqsSk0gU/maxresdefault.jpg')";
		element1.style.zIndex = "1";
		element2.style.zIndex = "1";
		element3.style.zIndex = "-1";
		element1.style.animation = "move1 0.7s linear forwards";
		element2.style.animation = "move2 0.7s linear forwards";
		element3.style.animation = "move3 0.7s linear forwards";
	}
}
function Prev() {
	var element1 = document.getElementById("vid2");
	var element2 = document.getElementById("vid1");
	var element3 = document.getElementById("vid3");
	if (count == 2) {
		count--;
		bg.style.backgroundImage = "url('https://img.youtube.com/vi/v5ZqqsSk0gU/maxresdefault.jpg')";
		element2.style.zIndex = "1";
		element3.style.zIndex = "1";
		element1.style.zIndex = "-1";
		element2.style.animation = "move6 0.7s linear forwards";
		element3.style.animation = "move4 0.7s linear forwards";
		element1.style.animation = "move5 0.7s linear forwards";
	}
	else if (count == 3) {
		count--;
		bg.style.backgroundImage = "url('https://img.youtube.com/vi/osrXeIin9FE/maxresdefault.jpg')";
		element3.style.zIndex = "1";
		element1.style.zIndex = "1";
		element2.style.zIndex = "-1";
		element3.style.animation = "move6 0.7s linear forwards";
		element1.style.animation = "move4 0.7s linear forwards";
		element2.style.animation = "move5 0.7s linear forwards";
	}
	else if (count == 1) {
		count = 3;
		bg.style.backgroundImage = "url('https://img.youtube.com/vi/WAnfj8v5acM/maxresdefault.jpg')";
		element1.style.zIndex = "1";
		element2.style.zIndex = "1";
		element3.style.zIndex = "-1";
		element1.style.animation = "move6 0.7s linear forwards";
		element2.style.animation = "move4 0.7s linear forwards";
		element3.style.animation = "move5 0.7s linear forwards";
	}
}


// content aseanplus
function containerOn() {
	let position = document.documentElement.scrollTop;
	var con1 = document.getElementById("con1");
	var con2 = document.getElementById("con2");
	var con3 = document.getElementById("con3");
	var con4 = document.getElementById("con4");
	if (position >= 2600) {
		con1.style.animation = "fade1 0.75s linear forwards";
		con2.style.animation = "fade2 0.75s linear forwards";
		con3.style.animation = "fade1 0.75s linear forwards";
		con4.style.animation = "fade2 0.75s linear forwards";
	}else{
		con1.style.animation = "fade3 0.75s linear forwards";
		con2.style.animation = "fade3 0.75s linear forwards";
		con3.style.animation = "fade3 0.75s linear forwards";
		con4.style.animation = "fade3 0.75s linear forwards";
	}
	// console.log(position);
}
// -----

/* Asean Page*/


// myanmar
function maleIn(){
	document.getElementById('male').style.visibility = "visible";
	document.getElementById('male').style.animation = "fadeIn1 0.5s";
}
function maleOut(){
	document.getElementById('male').style.visibility = "hidden";
	document.getElementById('male').style.animation = "";
}
function femaleIn(){
	document.getElementById('female').style.visibility = "visible";
	document.getElementById('female').style.animation = "fadeIn2 0.5s";
}
function femaleOut(){
	document.getElementById('female').style.visibility = "hidden";
	document.getElementById('female').style.animation = "";
}



/* ------------------------------------------------------------------------ */
