#pragma strict
private var theFPSInputController : FPSInputController;
private var theMouseLook : MouseLook;
private var theMouseLook2 : MouseLook;
var theEyes : GameObject;
private var thePlayerAttack : PlayerAttack;
function Start() {

	theFPSInputController = GetComponent(FPSInputController);
	theMouseLook = GetComponent(MouseLook);
	theMouseLook2 = theEyes.GetComponent(MouseLook);
	thePlayerAttack = GetComponent(PlayerAttack);

}

function Update () {

	theFPSInputController.SetHorizontalValue(Input.GetAxis("Horizontal"));
	theFPSInputController.SetVerticalValue(Input.GetAxis("Vertical"));
	theFPSInputController.SetJumpValue(Input.GetButton("Jump"));
	theMouseLook.SetMouseXValue(Input.GetAxis("Mouse X"));
	theMouseLook2.SetMouseYValue(Input.GetAxis("Mouse Y"));
	thePlayerAttack.SetFire1(Input.GetAxis("Fire1"));

}