#pragma strict
private var fire1Value : int;
var leftHand : GameObject;
var rightHand : GameObject;
//0表示没攻击,1表示正在攻击,2表示在收回
private var fire1State : int;

function Start () {

	var offsetValue : float = Random.Range(-15.0, 15.0);
	leftHand.transform.localEulerAngles.z += offsetValue;
	rightHand.transform.localEulerAngles.z -= offsetValue;

}

function Update () {

	switch (fire1State) {
		case 0:
		if (fire1Value == 1) fire1State = 1;
		break;
		case 1: 
		leftHand.transform.localEulerAngles.z -= 120*Time.deltaTime;
		rightHand.transform.localEulerAngles.z += 120*Time.deltaTime;
		if (rightHand.transform.localEulerAngles.z > 285) fire1State = 2;
		break;
		case 2:
		leftHand.transform.localEulerAngles.z += 120*Time.deltaTime;
		rightHand.transform.localEulerAngles.z -= 120*Time.deltaTime;
		if (rightHand.transform.localEulerAngles.z < 255) fire1State = 0;
		break;
	}

}

function SetFire1 (theValue : int) {

	fire1Value = theValue;

}