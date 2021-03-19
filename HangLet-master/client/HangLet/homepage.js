var username;
auth.onAuthStateChanged(function(user) {
	if (user) {
	  console.log("current user: "+user.email);//.user.uid
	  username=user.email;
	  username=username.substring(0, username.lastIndexOf("@"));
			document.getElementById("userName").innerHTML = username;

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

function homepageToSinglePlayer() {

	
			window.location = './singleplayer.html'

	
}
function homepageToGetPlayersWords() {

	
			window.location = './getPlayersWords.html'

	
}