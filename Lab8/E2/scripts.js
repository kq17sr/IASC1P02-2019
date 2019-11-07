//Sets the initial colours of the three elements on page load
function settext(){
document.getElementById("blue").style.color="blue";
document.getElementById("green").style.color="green";
document.getElementById("red").style.color="red";
}

//A function to change colours of elements when called
	var first = "#BB9320";
	var second = "#00BB00";
	var third = "#AB00FF";

function mix(){

	document.getElementById("blue").style.color=first;
	document.getElementById("green").style.color=second;
	document.getElementById("red").style.color=third;
}
