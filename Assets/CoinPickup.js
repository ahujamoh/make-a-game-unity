#pragma strict

//function Start () {
//	
//}
//
//function Update () {
//	
//}
function OnTriggerEnter(info: Collider){
	if(info.tag == "Player"){
		Debug.Log("Coin Picked Up");
		Destroy(gameObject);
	}
}
