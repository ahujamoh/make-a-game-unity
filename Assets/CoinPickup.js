#pragma strict

var coinEffect : Transform; //use Transform to a

function OnTriggerEnter(info: Collider){
	if(info.tag == "Player"){
		Debug.Log("Coin Picked Up");
		GameMaster.currentScore += 1;
		Instantiate(coinEffect, transform.position, transform.rotation);
//		Destroy(effect.gameObject, 3); //stop particle here after 3 second
		Destroy(gameObject);
	}
}
