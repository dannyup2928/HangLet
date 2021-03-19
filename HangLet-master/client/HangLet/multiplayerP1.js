var username;
auth.onAuthStateChanged(function(user) {
	if (user) {
		alert("Hi");
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
var p2Words;
    var arrayOfAlpha = [];
function p1Completed() {
	
		window.location = './multiplayerP2.html'

	
}


function p1GuessWords() {
    p2Words = localStorage.getItem("p2WordsKey");
	var wordsLength = p2Words.length;
	document.getElementById("p2WordsGenerated").innerHTML =	p2Words ;
	
    arrayOfAlpha = [];
	while(wordsLength !=0)
	{
	 arrayOfAlpha.push("_ ");
	wordsLength--;
		
	}
	
	     document.getElementById("output").innerHTML = arrayOfAlpha.join("");

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


function a()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "a")
		{
			arrayOfAlpha.splice(i, 1, "a ");

		}	
		
		
	}
	document.getElementById("buttonA").disabled = true;

	
	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function b()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "b")
		{
			arrayOfAlpha.splice(i, 1, "b ");

		}	
		
		
	}

			document.getElementById("buttonB").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function c()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "c")
		{
			arrayOfAlpha.splice(i, 1, "c ");

		}	
		
		
	}

			document.getElementById("buttonC").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function d()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "d")
		{
			arrayOfAlpha.splice(i, 1, "d ");

		}	
		
		
	}

				document.getElementById("buttonD").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function e()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "e")
		{
			arrayOfAlpha.splice(i, 1, "e ");

		}	
		
		
	}

				document.getElementById("buttonE").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function f()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "f")
		{
			arrayOfAlpha.splice(i, 1, "f ");

		}	
		
		
	}

				document.getElementById("buttonF").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}

function g()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "g")
		{
			arrayOfAlpha.splice(i, 1, "g ");

		}	
		
		
	}

				document.getElementById("buttonG").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function h()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "h")
		{
			arrayOfAlpha.splice(i, 1, "h ");

		}	
		
		
	}

				document.getElementById("buttonH").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function i()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "i")
		{
			arrayOfAlpha.splice(i, 1, "i ");

		}	
		
		
	}

				document.getElementById("buttonI").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function j()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "j")
		{
			arrayOfAlpha.splice(i, 1, "j ");

		}	
		
		
	}

				document.getElementById("buttonJ").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function k()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "k")
		{
			arrayOfAlpha.splice(i, 1, "k ");

		}	
		
		
	}

				document.getElementById("buttonK").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function l()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "l")
		{
			arrayOfAlpha.splice(i, 1, "l ");

		}	
		
		
	}

				document.getElementById("buttonL").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function m()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "m")
		{
			arrayOfAlpha.splice(i, 1, "m ");

		}	
		
		
	}

				document.getElementById("buttonM").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function n()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "n")
		{
			arrayOfAlpha.splice(i, 1, "n ");

		}	
		
		
	}

				document.getElementById("buttonN").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function o()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "o")
		{
			arrayOfAlpha.splice(i, 1, "o ");

		}	
		
		
	}

				document.getElementById("buttonO").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function p()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "p")
		{
			arrayOfAlpha.splice(i, 1, "p ");

		}	
		
		
	}

				document.getElementById("buttonP").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function q()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "q")
		{
			arrayOfAlpha.splice(i, 1, "q ");

		}	
		
		
	}

				document.getElementById("buttonQ").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function r()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "r")
		{
			arrayOfAlpha.splice(i, 1, "r ");

		}	
		
		
	}

				document.getElementById("buttonR").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function s()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "s")
		{
			arrayOfAlpha.splice(i, 1, "s ");

		}	
		
		
	}

		document.getElementById("buttonSS").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function t()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "t")
		{
			arrayOfAlpha.splice(i, 1, "t ");

		}	
		
		
	}

				document.getElementById("buttonT").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function u()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "u")
		{
			arrayOfAlpha.splice(i, 1, "u ");

		}	
		
		
	}

				document.getElementById("buttonU").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}


function v()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "v")
		{
			arrayOfAlpha.splice(i, 1, "v ");

		}	
		
		
	}

				document.getElementById("buttonV").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function w()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "w")
		{
			arrayOfAlpha.splice(i, 1, "w ");

		}	
		
		
	}

				document.getElementById("buttonW").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function x()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "x")
		{
			arrayOfAlpha.splice(i, 1, "x ");

		}	
		
		
	}

				document.getElementById("buttonX").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function y()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "y")
		{
			arrayOfAlpha.splice(i, 1, "y ");

		}	
		
		
	}

				document.getElementById("buttonY").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function z()
{
	var i;
	for(i =0; i<p2Words.length; i++ )
	{
		
		if(p2Words[i] == "z")
		{
			arrayOfAlpha.splice(i, 1, "z ");

		}	
		
		
	}

				document.getElementById("buttonZ").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}




