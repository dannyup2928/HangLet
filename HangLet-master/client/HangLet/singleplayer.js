var generatedWords = "";
var generatedQuestion = "";
var userAnswer;
var shareRandom;
username = "";

var database = firebase.database();;
var generatedWordClone = "";
var score = 10;
document.getElementById("score").innerHTML = "Score = " + score;
document.getElementById("tudo").style.display = "none";
auth.onAuthStateChanged(function (user) {
	if (user) {
		console.log("current user: " + user.email);//.user.uid
		username = user.email;
		username = username.substring(0, username.lastIndexOf("@"));
		document.getElementById("userName").innerHTML = username;
		//if(gameover){
		//alert("connected");
		//pushPlayerNameAndScore(username,score);
		//}
	} else {
		// No user is signed in.
		window.location = './index.html';
		console.log("no user: " + user);
	}
});

//logout
function logout() {
	auth.signOut().then(() => {
		window.location = './index.html';
		console.log("log out");
	});
}


function pushPlayerNameAndScore(name, score) {
	//push data to database
	// alert("hey");
	var data;
	if (name != null && score != null) {
		data = {
			name: name,
			score: score
		}
	}
	var ref = database.ref('hangletData');
	ref.push(data);
}
function newWords() {
	document.getElementById("quiz").disabled = true;

	var wordsLength = 0;

	var randomNumber = Math.floor(Math.random() * (words.length));

	generatedWords = words[randomNumber];
	generatedWordClone = generatedWords;
	arrayOfAlpha = [];
	document.getElementById('wordsGenerated').innerHTML = generatedWords;
	wordsLength = generatedWords.length;
	while (wordsLength != 0) {
		arrayOfAlpha.push("_ ");
		wordsLength--;

	}

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");

	clearLetterBank();
}


function ToHomepage() {
	window.location = './homepage.html'
}

function goToQuiz() {
	document.getElementById("quiz").disabled = false;
	alert("Click Quiz to attempt to get a point back!")
	document.getElementById("close").disabled = true;

	//questino
	shareRandom = Math.floor(Math.random() * (question.length));
	generatedQuestion = question[shareRandom];
	document.getElementById('question').innerHTML = generatedQuestion;
}


function checkAnswer() {

	if (answer[shareRandom] == userAnswer) {

		document.getElementById("close").disabled = false;
		alert("You answered the quiz correctly, so you get a point back!");
		alert("Click Close to resume game!");
		score = 1;
		document.getElementById("score").innerHTML = "Score = " + score;
		document.getElementById("quiz").disabled = true;

		
	}
	else {
		//alert("YOU LOSE");
		document.getElementById("gameResult").innerHTML = "YOU LOSE! " + "&#128532;";
		document.getElementById("tudo").style.display = "block";
		document.getElementById("gameArea").style.display = "none";
		score = 0;
		gameover = true;
		pushPlayerNameAndScore(username, score);
		//window.location = './singleplayer.html';

	}

}


function LoseCondition(currentScore) {
	//if score is 0, you lose. Reset page

	if (currentScore == -1) {
		//alert("YOU LOSE");
		document.getElementById("gameResult").innerHTML = "YOU LOSE! " + "&#128532;";
		document.getElementById("tudo").style.display = "block";
		document.getElementById("gameArea").style.display = "none";
		score = 0;
		gameover = true;
		pushPlayerNameAndScore(username, score);
		//window.location = './singleplayer.html';


	}


	if (currentScore == 0) {
		goToQuiz();




		//if word is filled, you win. Reset Page
	} else if (generatedWordClone.length == 0) {
		//alert("YOU WIN");
		document.getElementById("gameResult").innerHTML = "YOU WIN! " + "&#128512;";
		document.getElementById("tudo").style.display = "block";//gameArea
		document.getElementById("gameArea").style.display = "none";
		score = currentScore;
		gameover = true;
		pushPlayerNameAndScore(username, score);
		//this.pushPlayerNameAndScore(username,currentScore);
		//window.location = './singleplayer.html';
	}
}

/**************
Keyboard below
**************/

function clearLetterBank() {
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

function correct() {

	userAnswer = "correct";
	checkAnswer();
}

function wrong() {

	userAnswer = "wrong";
	checkAnswer();

}

function a() {
	var i;
	var success = false;
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "a") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/a/g, "");
			arrayOfAlpha.splice(i, 1, "a ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "b") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/b/g, "");
			arrayOfAlpha.splice(i, 1, "b ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "c") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/c/g, "");
			arrayOfAlpha.splice(i, 1, "c ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "d") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/d/g, "");
			arrayOfAlpha.splice(i, 1, "d ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "e") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/e/g, "");
			arrayOfAlpha.splice(i, 1, "e ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "f") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/f/g, "");
			arrayOfAlpha.splice(i, 1, "f ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "g") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/g/g, "");
			arrayOfAlpha.splice(i, 1, "g ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "h") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/h/g, "");
			arrayOfAlpha.splice(i, 1, "h ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "i") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/i/g, "");
			arrayOfAlpha.splice(i, 1, "i ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "j") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/j/g, "");
			arrayOfAlpha.splice(i, 1, "j ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "k") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/k/g, "");
			arrayOfAlpha.splice(i, 1, "k ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "l") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/l/g, "");
			arrayOfAlpha.splice(i, 1, "l ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "m") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/m/g, "");
			arrayOfAlpha.splice(i, 1, "m ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "n") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/n/g, "");
			arrayOfAlpha.splice(i, 1, "n ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "o") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/o/g, "");
			arrayOfAlpha.splice(i, 1, "o ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "p") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/p/g, "");
			arrayOfAlpha.splice(i, 1, "p ");
			success = true;
		}
	}
	if (success == false) {
		score--;
	}
	document.getElementById("buttonP").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

function q() {
	var i;
	var success = false;
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "q") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/q/g, "");
			arrayOfAlpha.splice(i, 1, "q ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "r") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/r/g, "");
			arrayOfAlpha.splice(i, 1, "r ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "s") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/s/g, "");
			arrayOfAlpha.splice(i, 1, "s ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "t") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/t/g, "");
			arrayOfAlpha.splice(i, 1, "t ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "u") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/u/g, "");
			arrayOfAlpha.splice(i, 1, "u ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "v") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/v/g, "");
			arrayOfAlpha.splice(i, 1, "v ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "w") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/w/g, "");
			arrayOfAlpha.splice(i, 1, "w ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "x") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/x/g, "");
			arrayOfAlpha.splice(i, 1, "x ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "y") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/y/g, "");
			arrayOfAlpha.splice(i, 1, "y ");
			success = true;
		}
	}
	if (success == false) {
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
	for (i = 0; i < generatedWords.length; i++) {

		if (generatedWords[i] == "z") {
			//remove letters from current word
			generatedWordClone = generatedWordClone.replace(/z/g, "");
			arrayOfAlpha.splice(i, 1, "z ");
			success = true;
		}
	}
	if (success == false) {
		score--;
	}
	document.getElementById("buttonZ").disabled = true;

	document.getElementById("output").innerHTML = arrayOfAlpha.join("");
	//update score
	document.getElementById("score").innerHTML = "Score = " + score;

	//check for win condition
	LoseCondition(score);
}

var questions = [
	"The time complexity of Bubble Sort is O(n)",
	"Inserting an element into a stack takes O(1) time",
	"The average time complexity of MergeSort is O(n(log(n))",
	"A singly linked-list is just a doubly-linked list without a tail",
	"Queues are Last-in-First-out(LIFO)",
	"The space complexity of MergeSort is O(n^2)",
	"Strings are immutable in Java",
	"O(log(n)) is less efficient than O(n)",
	"The main difference between a Set and a List is that a Set allows duplicates whereas a List doesn’t",
	"Binary Search can only be performed on ordered arrays."
]

var question = [

	"The time complexity of Bubble Sort is O(n)",
	"Inserting an element into a stack takes O(1) time",
	"The average time complexity of MergeSort is O(n(log(n))",
	"A singly linked-list is just a doubly-linked list without a tail",
	"Queues are Last-in-First-out(LIFO)",
	"The space complexity of MergeSort is O(n^2)",
	"Strings are immutable in Java",
	"O(log(n)) is less efficient than O(n)",
	"The main difference between a Set and a List is that a Set allows duplicates whereas a List doesn’t",
	"Binary Search can only be performed on ordered arrays."

]

var answer = [


	"wrong",
	"correct",
	"correct",
	"correct",
	"wrong",
	"wrong",
	"correct",
	"wrong",
	"wrong",
	"correct"


]


var words = [

	"glossy",
	"birth",
	"elite",
	"racket",
	"challenge",
	"swim",
	"wont",
	"click",
	"victory",
	"fancy",
	"afterbrains",
	"aftereffect",
	"afterworlds",
	"abolished",
	"abortively",
	"absolutely",
	"abstracters",
	"academician",
	"acceptablenesses",
	"accomplishing",
	"autographically",
	"averagenesses",
	"axisymmetrical",
	"backlogging",
	"baptist",
	"unbecoming",

	"nomade",
	"printwheels",
	"vitrification",
	"curriculums",
	"encryptions",
	"burbot",
	"revaccinate",
	"cicisbeos",
	"subcluster",
	"brer",
	"lowing",
	"pleasantries",
	"impend",
	"bogginesses",
	"copyism",
	"orchestrion",
	"potamogetons",
	"oxyhaemoglobin",
	"rufflers",
	"sudarium",
	"densest",
	"rowt",
	"sawdusty",
	"goldier",
	"italianising",
	"boweries",
	"wondrousnesses",
	"exhaustlessnesses",
	"inclination",
	"southernises",
	"tabellions",
	"mercer",
	"mantrap",
	"somatological",
	"iodisms",
	"programers",
	"oxidisations",
	"untreads",
	"counterdemonstrates",
	"macumba",
	"diminutives",
	"reemployment",
	"polymerised",
	"recompacting",
	"mammalian",
	"dreichest",
	"degeneration",
	"behaviorist",
	"socializing",
	"dugite",
	"vulcanises",
	"emeritae",
	"calthrop",
	"geck",
	"berserks",
	"inshelters",
	"missell",
	"boxy",
	"premodified",
	"spairged",
	"durras",
	"lamiger",
	"manageress",
	"bivalvular",
	"psychologies",
	"disclost",
	"colubriads",
	"hypodiploidies",
	"trogs",
	"smirked",
	"drainages",
	"blowziest",
	"nertz",
	"jaggaries",
	"krumkake",
	"rapports",
	"wintertimes",
	"isobaths",
	"lovers",
	"clogged",
	"discursion",
	"reconnoitering",
	"woodrush",
	"pinsetter",
	"dalasis",
	"blent",
	"recontinued",
	"bicentennial",
	"jumpier",
	"disceptations",
	"naywords",
	"indue",
	"ziggurat",
	"governante",
	"lunging",
	"collarbone",
	"compass",
	"geodynamical",
	"vendage",
	"entering",
	"gybe",
	"gentrified",
	"stimulus",
	"peatland",
	"scaithed",
	"divinatory",
	"microparasitic",
	"knapsacked",
	"colours",
	"unsegregated",
	"republished",
	"rottennesses",
	"highmen",
	"myasis",
	"chewets",
	"rabboni",
	"urethanes",
	"calipees",
	"muntjaks",
	"interestingnesses",
	"naviculares",
	"earning",
	"uningratiating",
	"goldsizes",
	"lashings",
	"cosmetician",
	"tumshie",
	"mylonitizing",
	"kore",
	"boarishly",
	"negatively",
	"pause",
	"zamindary",
	"besport",
	"rhinitises",
	"supportively",
	"fixity",
	"prunellos",
	"naturalistically",
	"nonrhoticity",
	"flypasts",
	"blams",
	"gymping",
	"break",
	"extolling",
	"cheery",
	"lymphadenopathy",
	"pyridoxamine",
	"casemate",
	"norseller",
	"miscook",
	"granolas",
	"disrespectfulness",
	"leafleteer",
	"effaced",
	"cobwebbier",
	"squashiness",
	"multilinear",
	"meningococci",
	"wiseling",
	"sovranly",
	"fayres",
	"carcinomatoses",
	"gumboils",
	"homosexualists",
	"optimization",
	"endomorphism",
	"maxillofacial",
	"momentany",
	"frowsy",
	"fogramities",
	"unbraided",
	"piroplasma",
	"mutessarifat",
	"disconsolateness",
	"goadsters",
	"shlocky",
	"users",
	"ethnologic",
	"viticultures",
	"brie",
	"emptinesses",
	"cocultures",
	"crowdsources",
	"securitizes",
	"combatted",
	"khanjars",
	"dermabrasion",
	"widest",
	"disfranchised",
	"stenobaths",
	"katabolism",
	"wavers",
	"blacktop",
	"presymptomatic",
	"unseams",
	"dissolutionism",
	"outvoters",
	"masons",
	"saltus",
	"shears",
	"celebrative",
	"obtuseness",
	"wicopy",
	"rampagings",
	"usurpative",
	"symbolologies",
	"primero",
	"dicarboxylic",
	"saunterings",
	"solanders",
	"overspecialized",
	"whitelist",
	"tactual",
	"queleas",
	"mortgageable",
	"encumbering",
	"centralizes",
	"emeries",
	"bugged",
	"indigoes",
	"warblers",
	"inelegancies",
	"smeeked",
	"subprimates",
	"incrementally",
	"oration",
	"enamellist",
	"thingamajigs",
	"loobiest",
	"excused",
	"interprofessional",
	"hild",
	"hetaira",
	"bioweapons",
	"solemniser",
	"heteroplasia",
	"subdeputies",
	"decigram",
	"bivvies",
	"weightliftings",
	"centennial",
	"dialed",
	"perturbations",
	"frogmouth",
	"temporise",
	"triples",
	"dumky",
	"simpered",
	"macallum",
	"songlike",
	"encompasses",
	"declarer",
	"unguentaria",
	"garveys",
	"teratocarcinomata",
	"vampirise",
	"dirkes",
	"uintaite",
	"culter",
	"downplaying",
	"superfecundations",
	"serradillas",
	"beeswaxing",
	"epergnes",
	"eisteddfods",
	"syneidesis",
	"halieutics",
	"containerizations",
	"comingles",
	"lituus",
	"shivah",
	"suffuse",
	"rockery",
	"hing",
	"theorematical",
	"quinate",
	"columels",
	"seashores",
	"nook",
	"hyetal",
	"rodenticide",
	"cocktailed",
	"whamo",
	"slatters",
	"conspectuities",
	"embattlement",
	"janitrixes",
	"rabbinically",
	"fauvists",
	"overinsurances",
	"moorings",
	"regal",
	"temptableness",
	"parvolines",
	"secreted",
	"enguarded",
	"grone",
	"prereview",
	"goloshed",
	"invocated",
	"postfixed",
	"envelop",
	"unattentive",
	"substantivize",
	"nimble",
	"sharniest",
	"unfettering",
	"viliacos",
	"comicalnesses",
	"muse",
	"supernature",
	"calculatingly",
	"kirtle",
	"fissipede",
	"salmony",
	"rozelles",
	"paler",
	"inunctions",
	"commandery",
	"golpes",
	"collenchymas",
	"triamcinolone",
	"waxworks",
	"universalist",
	"housel",
	"usages",
	"propenyl",
	"oligoclase",
	"mamboing",
	"myoclonic",
	"cryptaesthesia",
	"reamend",
	"gonophorous",
	"superb",
	"underpraising",
	"crepitation",
	"primogenital",
	"partisan",
	"doubtfulness",
	"unsaturations",
	"inscrolled",
	"guised",
	"packagings",
	"infixion",
	"ciselure",
	"yocking",
	"saccharify",
	"byre",
	"mamakus",
	"deviancies",
	"gelate",
	"bottomset",
	"faradisers",
	"vivisectoriums",
	"floutingstock",
	"breathalysers",
	"injoints",
	"psychodramatic",
	"handballers",
	"tesseracts",
	"dangs",
	"nick",
	"caeomas",
	"bipartite",
	"califates",
	"slices",
	"ferliest",
	"zoonoses",
	"vasectomised",
	"immerged",
	"lithomarges",
	"polonies",
	"decorating",
	"flopover",
	"hydroniums",
	"landmen",
	"cyprinoid",
	"livings",
	"collegia",
	"option",
	"queynies",
	"earl",
	"shortsightednesses",
	"nidulation",
	"lettermen",
	"excortication",
	"photographical",
	"budgetary",
	"yashmacs",
	"oscitance",
	"stunnings",
	"mitumbas",
	"equiponderant",
	"zealot",
	"rashing",
	"rigidity",
	"troopial",
	"embassador",
	"leeing",
	"micrologic",
	"treated",
	"hahnium",
	"bicep",
	"decolonises",
	"raveller",
	"participators",
	"foolscaps",
	"trilaterations",
	"fancifying",
	"libertarian",
	"phocomely",
	"consumptivities",
	"cully",
	"calligramme",
	"guillemots",
	"befits",
	"crownlet",
	"ditchwaters",
	"unavertible",
	"trads",
	"cementa",
	"coolish",
	"madam",
	"beinness",
	"splenectomize",
	"valuers",
	"hodometer",
	"restudies",
	"centonist",
	"remigate",
	"viator",
	"bondstones",
	"uncloaking",
	"unauthoritative",
	"reseeks",
	"bioreactor",
	"nonbotanists",
	"brashes",
	"chastens",
	"rattletraps",
	"reimplants",
	"wheatland",
	"spiffed",
	"wheatmeals",
	"overheld",
	"demannings",
	"loonies",
	"curter",
	"thoroughpaced",
	"feudalizations",
	"proprietorially",
	"infantry",
	"laureations",
	"recompressions",
	"shopfronts",
	"unsafest",
	"septenniums",
	"unprisons",
	"pardoners",
	"tomahawked",
	"decrustations",
	"miniating",
	"wussy",
	"coatracks",
	"chamberings",
	"unmoveable",
	"guestbooks",
	"signatory",
	"paddy",
	"embreathed",
	"ineffectualness",
	"seafloors",
	"skibobber",
	"phraseologies",
	"petrostate",
	"craftiness",
	"unenlightening",
	"carnival",
	"hematoses",
	"unhatched",
	"monologic",
	"gladfulness",
	"oxygenizing",
	"flatliner",
	"microphotographs",
	"intertillages",
	"predicability",
	"stargaze",
	"consultantship",
	"pastiness",
	"bordragings",
	"dentitions",
	"binary",
	"disemvowelled",
	"deglamorization",
	"digestible",
	"icier",
	"signories",
	"unsoundest",


	"shuts",
	"misevaluation",
	"gastroenteric",
	"verbalizers",
	"sachet",
	"mudirs",
	"cracked",
	"clustery",
	"cheeseparings",
	"rhabdovirus",
	"unsound",
	"stillborns",
	"whample",
	"capmakers",
	"stylistic",
	"galloper",
	"skyphoi",
	"lungworm",
	"kinetin",
	"meshugasen",
	"meneer",
	"raves",
	"endured",
	"escolars",
	"horseshits",
	"eff",
	"gadoliniums",
	"hypercritical",
	"radialising",
	"subchlorides",
	"ceilings",
	"deterges",
	"nitrotoluenes",
	"benumbing",
	"gentlemanhood",
	"outvoicing",
	"transshipment",
	"homotransplants",
	"pistols",
	"ismaticalness",
	"subbasal",
	"vespers",
	"tortfeasor",
	"contaminations",
	"villications",
	"nesselrode",
	"frumpishnesses",
	"refringency",
	"infantries",
	"consociates",
	"desinent",
	"pretonic",
	"gilravitches",
	"liquable",
	"shadowiest",
	"boorde",
	"mids",
	"trembles",
	"localized",
	"rhopalism",
	"mancus",
	"justifiability",
	"eupnoeic",
	"cammies",
	"cozied",
	"terror",
	"communaliser",
	"lyart",
	"dreamworld",
	"flashers",
	"soloing",
	"tajines",
	"linebreedings",
	"morphologies",
	"influentials",
	"texturally",
	"lovelornness",
	"oriflammes",
	"crescograph",
	"quatrefoils",
	"irrationalism",
	"supererogator",
	"sensibilities",
	"deterred",
	"creakiest",
	"pycnidiospore",
	"nesher",
	"gamboled",
	"rinsings",
	"stairwise",
	"valors",
	"citola",
	"gapes",
	"pouch",
	"onychomancies",
	"podsolizes",
	"lagans",
	"glaiket",
	"quantitatively",
	"linters",
	"rightsizing",
	"polyzooid",
	"prances",
	"overwarmed",
	"pakehas",
	"leftmosts",
	"mafficker",
	"kererus",
	"hippydoms",
	"halobiont",
	"countinghouses",
	"hebetudes",
	"ostraceous",
	"sandinesses",
	"poyous",
	"bullering",
	"defenceless",
	"communitarians",
	"nounally",
	"thirl",
	"rumfustians",
	"potentiate",
	"hewn",
	"unblocks",
	"beseemings",
	"resettlement",
	"shaws",
	"coenact",
	"raveling",
	"resubmitted",
	"smartmouth",
	"superinfecting",
	"hortatory",
	"quitters",
	"vocular",
	"werewolfish",
	"puffball",
	"koumiss",
	"spicula",
	"corporativism",
	"oxims",
	"proleptic",
	"mantle",
	"jiber",
	"troopship",
	"boldens",
	"liaise",
	"emollescence",
	"monellins",
	"outhomers",
	"readmission",
	"tarradiddles",
	"sphaceluses",
	"tamperer",
	"furniments",
	"schemozzled",
	"sapremia",
	"fiddledeedee",
	"tepefies",
	"lilting",
	"toolbags",
	"grayfly",
	"scapula",
	"fewest",
	"tractorfeed",
	"bursarships",
	"reappraises",
	"stomatodaea",
	"gambesons",
	"underbaking",
	"cladophyll",
	"nonfiction",
	"prosiliencies",
	"slipshodness",
	"contragestions",
	"prussianisation",
	"venites",
	"happied",
	"supergene",
	"stibialism",
	"impannel",
	"crepey",
	"featherier",
	"relives",
	"hiccoughs",
	"overfulfilled",
	"pasquinader",
	"impenitentness",
	"shashing",
	"false",
	"cannas",
	"consensions",
	"hippodromic",
	"countercharm",
	"polychrest",
	"harelike",
	"deplaning",
	"fiddle",
	"proteolytic",
	"braunite",
	"debutant",
	"etchers",
	"salmonoids",
	"pesteringly",
	"khilims",
	"osseins",
	"verboten",
	"legitimizing",
	"pasticcio",
	"spiffier",
	"unbribable",
	"soumed",
	"reposall",
	"mosed",
	"penmanship",
	"improvably",
	"disquietedly",
	"quintuples",
	"snatched",
	"browned",
	"constitutionalists",
	"reciprocants",
	"disulfid",
	"couthest",
	"unimaginatively",
	"predikants",
	"rebellers",
	"overspends",
	"carilloned",
	"galravitched",
	"emprizes",
	"lawnmower",
	"paxwax",
	"discomposedly",
	"subvariety",
	"sceuophylacia",
	"spectrofluorometry",
	"jokinesses",
	"recomputation",
	"indrafts",
	"homelinesses",
	"girding",
	"transportable",
	"transmigrations",
	"shareholdings",
	"wat",
	"fusiblenesses",
	"radiolabelling",
	"liveware",
	"swimmings",
	"endship",
	"symplastic",
	"natality",
	"motivation",
	"propodeums",
	"steganographs",
	"degradative",
	"deniabilities",
	"noninclusion",
	"steatites",
	"centrism",
	"hyperspatial",
	"nubeculae",
	"nonadult",
	"compassed",
	"magnificences",
	"fireships",
	"wittols",
	"jiujutsu",
	"unrulier",
	"sheeted",
	"weltanschauung",
	"machinimas",
	"scurfy",
	"gomphosis",
	"vail",
	"sunbathe",
	"ritualised",
	"fauchons",
	"undercards",
	"dominators",
	"sightlessly",
	"pavonazzos",
	"forewarners",
	"dodecagons",
	"herpetology",
	"somnambulary"



]














