private var mouseXValue : float;
private var mouseYValue : float;

enum RotationAxes { MouseXAndY = 0, MouseX = 1, MouseY = 2 };
var axes : RotationAxes = RotationAxes.MouseXAndY;
var sensitivityX : float = 15F;
var sensitivityY : float = 15F;

var minimumX : float = -360F;
var maximumX : float = 360F;

var minimumY : float = -60F;
var maximumY : float = 60F;

private var rotationY : float= 0F;

function Start ()
{
	// Make the rigid body not change rotation
	if (rigidbody)
		rigidbody.freezeRotation = true;
}


function Update ()
{
	if (axes == RotationAxes.MouseXAndY)
	{
		rotationX = transform.localEulerAngles.y + mouseXValue * sensitivityX;
			
		rotationY += mouseYValue * sensitivityY;
		rotationY = Mathf.Clamp (rotationY, minimumY, maximumY);
			
		transform.localEulerAngles = new Vector3(-rotationY, rotationX, 0);
	}
	else if (axes == RotationAxes.MouseX)
	{
		transform.Rotate(0, mouseXValue * sensitivityX, 0);
	}
	else
	{
		rotationY += mouseYValue * sensitivityY;
		rotationY = Mathf.Clamp (rotationY, minimumY, maximumY);
			
		transform.localEulerAngles = new Vector3(-rotationY, transform.localEulerAngles.y, 0);
	}
}
	
function SetMouseXValue (theValue : float) {

	mouseXValue = theValue;

}
	
function SetMouseYValue (theValue : float) {

	mouseYValue = theValue;

}