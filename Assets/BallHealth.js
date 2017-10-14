#pragma strict

//function Start () {
//	
//}

var GameOverSound : AudioClip;
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
	var audioSource : AudioSource = gameObject.AddComponent.<AudioSource>() as AudioSource;

	audioSource.clip = GameOverSound;
	audioSource.Play();
	yield WaitForSeconds(2 * audioSource.clip.length);
	Application.LoadLevel("Level-01");
	
}