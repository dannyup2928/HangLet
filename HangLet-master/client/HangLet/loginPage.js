
//listen for auth status changes
auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location = './homepage.html';
    console.log("current user: "+user);
  } else {
    // No user is signed in.
    console.log("no user: "+user);
  }
});  

// signup
function signUp(){
const signupForm = document.querySelector('#userform');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;
console.log(email+" : "+password);
 // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // var x = document.getElementById("snackbar");
    // x.className = "show";
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    const name=email.substring(0, email.lastIndexOf("@"));
    alert("Welcome to HangLet "+name+"!");
    console.log("cred: "+cred.user);
    window.location = './homepage.html';
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Err: "+errorMessage);
    });
});

}
//login
function login(){ 
const loginForm = document.querySelector('#userform');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;
console.log(email+" : "+password);
 // sign up the user
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log("cred: "+cred.user);
    //alert("signed In");
    window.location = './homepage.html';
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Err: "+errorMessage);
    });
});
}

//logout
function logout(){ 
  auth.signOut().then(() =>{
    window.location = './index.html';
console.log("log out");
  });
}
function forgotPassword(){
 var email;
  var userEmail = prompt("Please enter the email you used to register:", "Enter here...");
  if (userEmail == null || userEmail == "") {
    alert("Field can't be empty. Try again!");
  } else {
    email = userEmail;
    //alert(email);
    auth.sendPasswordResetEmail(email).then(() =>{
      alert("You should receive an email shortly. Follow the directions in the email to reset your password.");
    }).catch(function(error) {
      alert("Error: There is no user record corresponding to this identifier. Try Again!");
    });
  }
  
}