#pragma strict
var thePlayer : GameObject;
var theDeadPlayer : GameObject;
private var thisDeadPlayer : GameObject;
var gameController : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerStay (other : Collider) {
    if(other.name == "AIArm") {
    	LittleGameController.deadNumber ++;
    	GoDie();
    }
}

function GoDie () {

	LittleGameController.isPlayerAlive = false;
	thisDeadPlayer = Instantiate(theDeadPlayer, thePlayer.transform.position, thePlayer.transform.rotation);
	thisDeadPlayer.transform.localEulerAngles.x = Random.Range(-5.0,5.0);
	thisDeadPlayer.transform.localEulerAngles.z = Random.Range(-5.0,5.0);
	Destroy(thePlayer);
	
}