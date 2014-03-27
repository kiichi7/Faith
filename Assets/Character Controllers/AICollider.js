#pragma strict
private var isThereTarget : boolean = false;
private var theTarget : GameObject;

function Start () {

}

function Update () {

	if (theTarget == null) isThereTarget = false;

}

function OnTriggerEnter (other : Collider) {
	if ((other.name == "PlayerController")||(other.name == "PlayerController(Clone)")) {
		isThereTarget = true;
    	theTarget = other.gameObject;
    }
}

function OnTriggerStay (other : Collider) {
	if ((other.name == "PlayerController")||(other.name == "PlayerController(Clone)")) {
		isThereTarget = true;
    	theTarget = other.gameObject;
    }
}

function OnTriggerExit (other : Collider) {
	isThereTarget = false;
}

function GetIsThereTarget () {
	return isThereTarget;
}

function GetTheTarget () {
	return theTarget;
}