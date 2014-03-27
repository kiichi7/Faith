#pragma strict
private var fire1Value : int;
var rightHand : GameObject;
//0表示没攻击,1表示正在攻击,2表示在收回
private var fire1State : int;

function Start () {

}

function Update () {

	switch (fire1State) {
		case 0:
		if (fire1Value == 1) fire1State = 1;
		break;
		case 1: 
		rightHand.transform.localEulerAngles.z += 360*Time.deltaTime;
		if ((rightHand.transform.localEulerAngles.z > 135)&&(rightHand.transform.localEulerAngles.z < 180)) fire1State = 2;
		break;
		case 2:
		rightHand.transform.localEulerAngles.z -= 360*Time.deltaTime;
		if (rightHand.transform.localEulerAngles.z > 270) fire1State = 0;
		break;
	}

}

function SetFire1 (theValue : int) {

	fire1Value = theValue;

}