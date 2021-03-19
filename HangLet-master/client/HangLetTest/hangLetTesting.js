output = document.getElementById('output');
function assert( outcome, description){
	var li = document.createElement("LI");
	li.className = outcome ? 'PASS' : 'FAIL';
	 var textnode = document.createTextNode(li.className+": "+description);
  li.appendChild(textnode);
  document.getElementById("output").appendChild(li);
	
}