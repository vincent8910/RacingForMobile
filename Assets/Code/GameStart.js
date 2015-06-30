#pragma strict
var car1 : GameObject;
var car2 : GameObject;
var gametime : float;
var showtime : float;
var showStartTime = true;
var showGameTime = false;

function Start () {
	car1.rigidbody.isKinematic = true;
	car2.rigidbody.isKinematic = true;
}

function Update () {
	gametime = Time.time;
	showtime = 3 - gametime;
	
	if(gametime > 3){
		showStartTime = false;
		showGameTime = true;
		showtime = gametime -3;
		car1.rigidbody.isKinematic = false;
		car2.rigidbody.isKinematic = false;
	}
}

function OnGUI () {
	if(showStartTime){
		GUI.Label(new Rect((Screen.width/2-50),(Screen.height/2-15),100,30),showtime.ToString("f2"));
	}
	if(showGameTime){
		GUI.Label(new Rect(10,Screen.height/2,100,30),showtime.ToString("f2"));
	}
}