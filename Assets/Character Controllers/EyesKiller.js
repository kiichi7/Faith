#pragma strict

function Start () {

}

function Update () {

	if (LittleGameController.isPlayerAlive) Destroy(gameObject);

}