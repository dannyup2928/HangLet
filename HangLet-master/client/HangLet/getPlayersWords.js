var username;
var score = 10;
var hint;
var opponent;
document.getElementById("score").innerHTML =  "Score = " + score;
auth.onAuthStateChanged(function(user) {
	if (user) {
		console.log("current user: "+user.email);
		username=user.email;
		username=username.substring(0, username.lastIndexOf("@"));
		document.getElementById("userName").innerHTML = username;
		sock.emit('opponent',username);
	} else {
	  // No user is signed in.
	  window.location = './index.html';
	  console.log("no user: "+user);
	}
}); 
//logout
function logout(){ 
  auth.signOut().then(() =>{
    window.location = './index.html';
console.log("log out");
  });
}
function LoseCondition(currentScore) {
	//if score is 0, you lose. Reset page
	if(currentScore == 0) {
		alert("YOU Got "+currentScore);
		score=0;
		sock.emit('playerScore',score);
	} else if(generatedWordClone.length == 0) {
		alert("YOU Got "+currentScore);
		score=currentScore;
		sock.emit('playerScore',score);
	}
	
}
function continueToMultiplayer() {
	storePlayersWords();
	//check if requirements for word are met, then go to multiplayer2
	goToMultiplayerP1();
}
function ToHomepage()
{
		window.location = './homepage.html'
}

function goToMultiplayerP1() {	
//	window.location = './multiplayerP1.html'
document.getElementById("gameArea").style.display="block";
document.getElementById("playersWords").style.display="none";
document.getElementById("miniloading").style.display="none";
}

document.getElementById("playersWords").style.display="none";
document.getElementById("bigLoader").style.display="block";//
document.getElementById("miniloading").style.display="none";
document.getElementById("gameArea").style.display="none";
document.getElementById("versus").style.display="none";//
document.getElementById("showHint").style.display="none";
document.getElementById("tudo").style.display="none";
//none

const submit= (e) =>{
	e.preventDefault();
};
var playerWord ="";
var sock = io();
sock.on('msg',onMsg);
sock.on('playerWord',printWord);
sock.on('nowCanPlay',onMsg);
sock.on('playerScore',onMsg);
sock.on('playerHintWord',showHint);//showHint showUserHint
sock.on('opponent',getOpponent);//scoreResult
sock.on('scoreResult',showResult);

function onMsg(text){
	output = document.getElementById('events');
	var li = document.createElement("LI");
	 var textnode = document.createTextNode(text);
  li.appendChild(textnode);
 // document.getElementById("events").appendChild(li);
  if(text=="connected"){
	sock.emit('opponent',username);
	document.getElementById("miniloading").style.display="block";
	document.getElementById("playersWords").style.display="block";
	document.getElementById("bigLoader").style.display="none";
	document.getElementById("versus").style.display="block";
  //document.getElementById("showPlayersName").innerHTML = username +" VS "+opponent;
	//document.getElementById("navbar").style.display="block";
	}if(text=="gameover"){
		document.getElementById("tudo").style.display="block";
		document.getElementById("gameArea").style.display="none";
		document.getElementById("showHint").style.display="none";
	}
}
function showHint(text){
  document.getElementById("showUserHint").innerHTML = "Hint: "+text;
	document.getElementById("showHint").style.display="block";
}
function showResult(text){
  document.getElementById("gameResult").innerHTML =text;
}
function getOpponent(text){
	opponent = text;
	output = document.getElementById('events');
	var li = document.createElement("LI");
	//  var textnode = document.createTextNode("Text: You"+" VS "+opponent);
  // li.appendChild(textnode);
	// document.getElementById("events").appendChild(li);
	document.getElementById("showPlayersName").innerHTML = "You" +" VS "+opponent;
}

  function storePlayersWords() {
	playerWord = document.forms["playersWords"]["p1Words"];
	hint = document.forms["playersWords"]["hint"];
	var val=playerWord.value;
	var hintVal=hint.value;
	hint.value='';
	playerWord.value='';
	sock.emit('playerWord',val);
	sock.emit('playerHintWord',hintVal);

}
//-------GAME AREA. THEY ARE PLAYING NOW-------
var p2Words;
var arrayOfAlpha;
var generatedWordClone ="";
var currentPlayerWord="";
function p1Completed() {
	//	window.location = './multiplayerP2.html';
}


function printWord(text){
	currentPlayerWord=text;
	generatedWordClone = currentPlayerWord;
//	document.getElementById("p2WordsGenerated").innerHTML =	text;

	var wordsLength = currentPlayerWord.length;
		arrayOfAlpha = [];
		//alert("word length: "+wordsLength);
	while(wordsLength !=0)
	{
	 arrayOfAlpha.push("_ ");
	wordsLength--;
	}
//	alert("currentPlayerWord..: "+currentPlayerWord);
	     document.getElementById("output").innerHTML = arrayOfAlpha.join("");
//alert("currentPlayerWord: "+currentPlayerWord);
		clearLetterBank();
}




/**************
Keyboard below
**************/

function clearLetterBank()
{
		document.getElementById("buttonA").disabled = false;
		document.getElementById("buttonB").disabled = false;
		document.getElementById("buttonC").disabled = false;
		document.getElementById("buttonD").disabled = false;
		document.getElementById("buttonE").disabled = false;
		document.getElementById("buttonF").disabled = false;
		document.getElementById("buttonG").disabled = false;
		document.getElementById("buttonH").disabled = false;
		document.getElementById("buttonI").disabled = false;
		document.getElementById("buttonJ").disabled = false;
		document.getElementById("buttonK").disabled = false;
		document.getElementById("buttonL").disabled = false;
		document.getElementById("buttonM").disabled = false;
		document.getElementById("buttonN").disabled = false;
		document.getElementById("buttonO").disabled = false;
		document.getElementById("buttonP").disabled = false;
		document.getElementById("buttonQ").disabled = false;
		document.getElementById("buttonR").disabled = false;
		document.getElementById("buttonSS").disabled = false;
		document.getElementById("buttonT").disabled = false;
		document.getElementById("buttonU").disabled = false;
		document.getElementById("buttonV").disabled = false;
		document.getElementById("buttonW").disabled = false;
		document.getElementById("buttonX").disabled = false;
		document.getElementById("buttonY").disabled = false;
		document.getElementById("buttonZ").disabled = false;


}


function a() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "a") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/a/g, "");
			arrayOfAlpha.splice(i, 1, "a ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonA").disabled = true;
	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;
	//check for win condition
	LoseCondition(score);
}
function b() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "b") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/b/g, "");
			arrayOfAlpha.splice(i, 1, "b ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonB").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;
	
	//check for win condition
	LoseCondition(score);
}
function c() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "c") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/c/g, "");
			arrayOfAlpha.splice(i, 1, "c ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonC").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}
function d() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "d") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/d/g, "");			
			arrayOfAlpha.splice(i, 1, "d ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonD").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}
function e() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "e") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/e/g, "");
			arrayOfAlpha.splice(i, 1, "e ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonE").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}
function f() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "f") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/f/g, "");
			arrayOfAlpha.splice(i, 1, "f ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonF").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function g() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "g") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/g/g, "");
			arrayOfAlpha.splice(i, 1, "g ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonG").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function h() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "h") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/h/g, "");
			arrayOfAlpha.splice(i, 1, "h ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonH").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}
function i() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "i") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/i/g, "");
			arrayOfAlpha.splice(i, 1, "i ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonI").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function j() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "j") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/j/g, "");
			arrayOfAlpha.splice(i, 1, "j ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonJ").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function k() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "k") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/k/g, "");
			arrayOfAlpha.splice(i, 1, "k ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonK").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function l() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "l") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/l/g, "");
			arrayOfAlpha.splice(i, 1, "l ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonL").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function m() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "m") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/m/g, "");
			arrayOfAlpha.splice(i, 1, "m ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonM").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function n() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "n") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/n/g, "");
			arrayOfAlpha.splice(i, 1, "n ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonN").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function o() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "o") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/o/g, "");
			arrayOfAlpha.splice(i, 1, "o ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonO").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function p() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "p") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/p/g, "");
			arrayOfAlpha.splice(i, 1, "p ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonP").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML ="Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function q() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "q") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/q/g, "");
			arrayOfAlpha.splice(i, 1, "q ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonQ").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function r() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "r") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/r/g, "");
			arrayOfAlpha.splice(i, 1, "r ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonR").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function s() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "s") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/s/g, "");
			arrayOfAlpha.splice(i, 1, "s ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonSS").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function t() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "t") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/t/g, "");
			arrayOfAlpha.splice(i, 1, "t ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonT").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function u() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "u") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/u/g, "");
			arrayOfAlpha.splice(i, 1, "u ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonU").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}


function v() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "v") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/v/g, "");
			arrayOfAlpha.splice(i, 1, "v ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonV").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function w() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "w") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/w/g, "");
			arrayOfAlpha.splice(i, 1, "w ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonW").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function x() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "x") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/x/g, "");
			arrayOfAlpha.splice(i, 1, "x ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonX").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function y() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "y") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/y/g, "");
			arrayOfAlpha.splice(i, 1, "y ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonY").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function z() {
	var i;
	var success = false;
	for (i = 0; i < currentPlayerWord.length; i++) {

		if (currentPlayerWord[i] == "z") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/z/g, "");
			arrayOfAlpha.splice(i, 1, "z ");
			success = true;
		}
	}
	if(success == false) {
		score--;
	}
	document.getElementById("buttonZ").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

//-------GAME AREA FINISH----------------------
