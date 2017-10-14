#pragma strict

static var currentScore : int = 0;
//var test = 0;

//function Update(){
//	test = currentScore;
//}

var offSetY : float = 40;
var sizeX : float = 100;
var sizeY : float = 40;

function Start(){
	currentScore = 0;
}

function OnGUI(){
	GUI.Label(new Rect(Screen.height * 0.5 + sizeX/2, offSetY, sizeX, sizeY), "Score : "+currentScore);
}