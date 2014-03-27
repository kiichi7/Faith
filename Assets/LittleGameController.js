#pragma strict
var startPlayer : GameObject;
private var startPosition : Vector3;
private var startRotation : Quaternion;
static var isPlayerAlive : boolean;
var thePlayer : GameObject;

static var deadNumber : int;
static var killNumber : int;

function Start () {

	Screen.lockCursor = true;
	Screen.showCursor = false;

	isPlayerAlive = true;
	deadNumber = 0;
	killNumber = 0;
	startPosition = startPlayer.transform.position;
	startRotation = startPlayer.transform.rotation;

}

function Update () {

	//if(Input.GetKeyDown(KeyCode.Escape))Application.Quit();

	if((!isPlayerAlive)&&(Input.GetKeyDown(KeyCode.R))){
		Instantiate(thePlayer, startPosition, startRotation);
		isPlayerAlive = true;
	}

}

function OnGUI () {

	GUI.Label (Rect (10, 10, 800, 30), "死亡后按R可以复活,锄头碰到敌人身体致死,敌人手碰到自己致死");
	GUI.Label (Rect (10, 30, 200, 30), "游戏时间:" + Time.time);
	GUI.Label (Rect (10, 50, 200, 30), "死亡次数:" + deadNumber);
	GUI.Label (Rect (10, 70, 200, 30), "杀敌数量:" + killNumber);

}
