#pragma strict

//function Start () {
//	
//}

var maxDepthAllowed = -10;
function Update () {
	if(transform.position.y <= maxDepthAllowed)
	{
		Debug.Log("Test");
		Application.LoadLevel("Level-01");
	}
}
