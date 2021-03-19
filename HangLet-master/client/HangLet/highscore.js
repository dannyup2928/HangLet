var username;
var us;
auth.onAuthStateChanged(function(user) {
	if (user) {
		// User is signed in.
		us=user;
		console.log("current user: "+user.email);
		username=user.email;
		username=username.substring(0, username.lastIndexOf("@"));
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

function setup(){
	  //var person = prompt("Please enter your name", "");
      // var score = prompt("Please enter your score", "");
   var person = null;
  var score = 0;
	 if (person != null) {
    document.getElementById("printName").innerHTML ="Name: "+ person;
	document.getElementById("score").innerHTML ="Score: "+score;
  }else{
	document.getElementById("printName").innerHTML ="Name: generateRandomUser";
	document.getElementById("score").innerHTML ="Score: 0 pts";
  }
  	
//   //push data to database
  database = firebase.database();
   var ref = database.ref('hangletData');
//   var data;
//    if (person != null) {
//    data = {
// 	  name: person,
// 	  score: score
//   }
//  }
//   ref.push(data);

  //get score from database
  var ref2 = database.ref('score');
  ref.on('value',gotData,errData);
  
  
}

window.onload=setup;
//window.onload=wordSetup;

function gotData(data) {
	console.log(data.val());
	var scores = data.val();
	var keys = Object.keys(scores);
	var playerScore;
	alert("Key: "+us.uid);
	var stepsRef = database.ref('hangletData/');
stepsRef.orderByChild('score').on('value', function (snapshot) {
    snapshot.forEach(function(stepSnapshot) {
				console.log(stepSnapshot.key, stepSnapshot.val().name);
		var li = document.createElement("LI");
		var textnode = document.createTextNode(stepSnapshot.val().name+": "+stepSnapshot.val().score);
	    li.appendChild(textnode);
			document.getElementById("scoreList").appendChild(li);

    });
});
//alert(playerScore);
	console.log("score "+scores);
 //put higher score on top
	/*
	for(var i =0; i<keys.length; i++){
		var k =keys[i];
		var playerName= scores[k].name;
		var score = scores[k].score;
		//console.log(playerName,score);
		var li = document.createElement("LI");
		var textnode = document.createTextNode(playerName+": "+score);
	    li.appendChild(textnode);
	    document.getElementById("scoreList").appendChild(li);
	}
	*/
	
}
function errData(err) {
	console.log("Error: ");
	console.log(err);
}