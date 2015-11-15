var total = 0; 

/*
If 0 button is clicked

if +5 button is clicked
*/

$('#zero').click(reset);
function reset(){
	//total = total - total;
	total = 0;
	$("#result").html(total);
	//
}
$('#add5').click(add5);
function add5(){
	total = total + 5;
	$('#result').html(total);
}

$('#add10').click(add10);
function add10(){
	total = total + 10;
	$('#result').html(total);
}

$('#sub1').click(sub1);
function sub1() {
  total = total - 1;
  
  $('#result').html(total);
}

/*
total goes up by 5 
update the display value 

if +10 button is clicked
if -1 button is clicked

*/