window.onload = function(){
	var optellen = function(){
		getal1 = prompt("getal1?");
		getal2 = prompt("getal2?");
		antwoord = parseInt(getal1) + parseInt(getal2);
		alert(antwoord);
	}
	document.getElementById('knop').onclick = function(){
		optellen();
	}
}
