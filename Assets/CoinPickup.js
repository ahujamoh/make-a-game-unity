#pragma strict

//function Start () {
//	
//}
//
//function Update () {
//	
//}
var coinEffect : Transform; //use Transform to a

function OnTriggerEnter(info: Collider){
	if(info.tag == "Player"){
		Debug.Log("Coin Picked Up");
		Instantiate(coinEffect, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}
