#pragma strict
private var theFPSInputController : FPSInputController;
private var theMouseLook : MouseLook;
private var theAIAttack : AIAttack;

var isLocking : boolean = false;
private var lockTarget : GameObject;
var theEyesight : GameObject;
private var theCollider : AICollider;

private var mouseXValue : float;

function Start() {

	theFPSInputController = GetComponent(FPSInputController);
	theMouseLook = GetComponent(MouseLook);
	theAIAttack = GetComponent(AIAttack);
	theCollider = theEyesight.GetComponent(AICollider);

}

//通过LaterUpdate来先检测,再运行
function LateUpdate () {

	isLocking = theCollider.GetIsThereTarget();
	lockTarget = theCollider.GetTheTarget();
	if (isLocking) {
		theFPSInputController.SetVerticalValue(0.8);
		if (TurnDirection()) mouseXValue = -0.2;
		else mouseXValue = 0.2;
	}
	else {
		theFPSInputController.SetVerticalValue(0.4);
		mouseXValue = Random.Range(-0.2, 0.2);
		//mouseXValue = Mathf.Clamp(mouseXValue, -0.2, 0.2);
	}
	
	//theFPSInputController.SetHorizontalValue(Input.GetAxis("Horizontal"));
	//theFPSInputController.SetJumpValue(Input.GetButton("Jump"));

	
	theMouseLook.SetMouseXValue(mouseXValue);
	theAIAttack.SetFire1(1);

}

function TurnDirection () {
	var positionJudge : float;
	positionJudge = Mathf.Atan((lockTarget.transform.position.z - transform.position.z)/(lockTarget.transform.position.x - transform.position.x));
	positionJudge = positionJudge * 180 / Mathf.PI;
	if ((lockTarget.transform.position.x - transform.position.x)<0) positionJudge += 180;
	if (positionJudge < 0) positionJudge += 360;
	if ((positionJudge + transform.localEulerAngles.y)%360 > 90) return true;
	else return false;

}

