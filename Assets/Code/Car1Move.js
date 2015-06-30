#pragma strict
var startpos : Vector3;
var startrot : Quaternion;
var stage : int = 0;
var showGUI = false;
var car2 : GameObject;
function Start () {

}

function Update () {
	rigidbody.centerOfMass = new Vector3(0,-1,0);
	rigidbody.AddRelativeForce(0,-50,0);
	rigidbody.AddRelativeForce(6000,0,0);
	if(transform.position[1]<10 || transform.position[1]>40){
		transform.position = startpos;
		transform.rotation = startrot;
	}
	if(Input.GetKey(KeyCode.A))
		transform.Rotate(Vector3.up * Time.deltaTime*(-100),Space.Self);
	if(Input.GetKey(KeyCode.D))
		transform.Rotate(Vector3.up * Time.deltaTime*(100),Space.Self);
}

function OnTriggerEnter(other : Collider){
   	startpos = transform.position;
   	startrot = transform.rotation;
   	if(other.gameObject.name == "Reborn1" && stage == 0)
   		stage = 1;
   	if(other.gameObject.name == "Reborn2" && stage == 1)
   		stage = 2;
   	if(other.gameObject.name == "Reborn3" && stage == 2)
   		stage = 3;
   	if(other.gameObject.name == "Reborn1" && stage == 3){
   		showGUI  = true;
   		GUI.enabled = true;
   		Destroy(car2);
   	}	
	
}

function OnGUI () {
	if(showGUI){
		if (GUI.Button (Rect (Screen.width/3,Screen.height/3,Screen.width/3,Screen.height/3), "Finish!!! Car1 Win !!!")) {
			Application.LoadLevelAsync ("Racing1");
		}
	}
}