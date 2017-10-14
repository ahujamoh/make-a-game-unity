#pragma strict

//function Start () {
//	
//}
private var isFalling = false;
var rotationSpeed = 100;
var jumpHeight = 8;

var Hit01 : AudioClip;
var Hit02 : AudioClip;
var Hit03 : AudioClip;
private var playOnce = true;

function Update () {
	var rotation : float = Input.GetAxis("Horizontal")*rotationSpeed;
	rotation *= Time.deltaTime;
	GetComponent.<Rigidbody>().AddRelativeTorque(Vector3.back * rotation);

	if(Input.GetKeyDown(KeyCode.W) && isFalling == false){
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;
		playOnceTrue();
	}
	isFalling = true;
}

function OnCollisionStay(){
	if(playOnce == true){
		var theHit = Random.Range(0,4);
		var audioSource : AudioSource = gameObject.AddComponent.<AudioSource>() as AudioSource;
		
		if (theHit == 0){
			audioSource.clip = Hit01 as AudioClip;
		}
		else if (theHit == 1){
			audioSource.clip = Hit02 as AudioClip;
		}
		else{
			audioSource.clip = Hit03 as AudioClip;
		}
		audioSource.pitch = Random.Range(0.9, 1.15);
		audioSource.Play();
		playOnce = false;
	}
	isFalling = false;
}

function playOnceTrue(){
	yield WaitForSeconds(0.1);
	playOnce = true;
}
