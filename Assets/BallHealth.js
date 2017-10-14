#pragma strict

//function Start () {
//	
//}

var maxDepthAllowed = -10;
var isRestarting = false;
function Update () {
	if(transform.position.y <= maxDepthAllowed)
	{
		if (isRestarting == false){
			Debug.Log("Test");
			RestartLevel();
		}
	}
}

function RestartLevel(){
	Debug.Log("Test2");
	isRestarting = true;
	Debug.Log(GetComponent.<AudioSource>().clip.length);
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(2 * GetComponent.<AudioSource>().clip.length);
	Debug.Log(GetComponent.<AudioSource>().clip.length);
	Application.LoadLevel("Level-01");
	
}