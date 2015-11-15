/*
<<<<<<< HEAD
If button pressed once, turn it on
Change background color to white

*/


/*
If button is pressed again, turn it off
Change background color to black
=======
If button pressed once, turn it on 
background color is white 

If button pressed again, turn it off
background color is black 

>>>>>>> ga-students/master

*/

var lights = "on";
<<<<<<< HEAD
$('#light_switch').click(switchLights);

function switchLights(){
	if (lights == "on"){
		$('body').addClass('dark');
		lights = "off";
	}
	else {
		$('body').removeClass('dark');
		lights = "on";
	}
}
=======

$('#light_switch').click(switchLights);

function switchLights(){
	if(lights == "on"){
		$('body').addClass('dark');
		lights = "off";
	}
	else{
		$('body').removeClass('dark');
		lights = "on";
	}

}
>>>>>>> ga-students/master
