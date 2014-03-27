#pragma strict
var theAI : GameObject;
var theDeadAI : GameObject;
private var thisDeadAI : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
    if(other.name == "Shovel") {
    	LittleGameController.killNumber ++;
    	GoDie();
    }
}

function GoDie () {
	thisDeadAI = Instantiate(theDeadAI, theAI.transform.position, theAI.transform.rotation);
	thisDeadAI.transform.localEulerAngles.x = Random.Range(-5.0,5.0);
	thisDeadAI.transform.localEulerAngles.z = Random.Range(-5.0,5.0);
	Destroy(theAI);
}