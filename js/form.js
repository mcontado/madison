$(document).ready(function(){

	$(".slider > img").fadeOut(0);
	$("#01, #11, #21, #31").fadeIn(0);
	
	myLoop(4,1,0);
	myLoop(4,1,2);
	setTimeout(myLoop(4,1,1), 2000);
	setTimeout(myLoop(4,1,3), 2000);
});

function slider(panel, position){
	if (position != 1) {
		$("#"+panel+(position-1)).fadeOut(0);
		$("#"+panel+position).fadeIn(300);
	}
	else {
		$("#"+panel+(($("img").size() -2)/4)).fadeOut(0);
		$("#"+panel+position).fadeIn(300);
	}
}

function myLoop (iterations, current, panel) {          
   setTimeout(function () {   
      slider(panel, current);
      if (current < iterations) myLoop(iterations, ++current, panel);
      else myLoop(iterations, 1, panel);
   }, 8000)
}        