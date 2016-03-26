$(document).ready(function(){

	$(".slider > img").fadeIn(0);
	$("#01, #11, #21, #31").fadeOut(0);
	$("#01").fadeIn(0);
	$("#02").fadeIn(0);
	$("#03").fadeIn(0);
	$("#04").fadeIn(0);

	$("#11").fadeOut(0);
	$("#12").fadeOut(0);
	$("#13").fadeOut(0);
	$("#14").fadeOut(0);


	$("#21").fadeOut(0);
	$("#22").fadeOut(0);
	$("#23").fadeOut(0);
	$("#24").fadeOut(0);

	$("#31").fadeOut(0);
	$("#32").fadeOut(0);
	$("#33").fadeOut(0);
	$("#34").fadeOut(0);
	
	// myLoop(4,1,0);
	// myLoop(4,1,2);
	// setTimeout(myLoop(4,1,1), 2000);
	// setTimeout(myLoop(4,1,3), 2000);
	// console.log([1,2,3,4,6], true, !true)
	// slider(1,2)

	setTimeout(function()
	{
		slider(0, true)
	}, 200)
});

function slider(panel, position){
	console.log(panel, position)
	p = panel%4
	pn = (p+1)%4

	if(position)
	{
		$("#"+p+"1").fadeOut(0)
		$("#"+p+"3").fadeOut(0)
		$("#"+pn+"1").fadeIn(300)
		$("#"+pn+"3").fadeIn(300)
		setTimeout(function()
		{
			slider(p, false)
		}, 1000)
	}
	else
	{
		$("#"+p+"2").fadeOut(0)
		$("#"+p+"4").fadeOut(0)
		$("#"+pn+"2").fadeIn(300)
		$("#"+pn+"4").fadeIn(300)

		setTimeout(function()
		{
			slider(pn, true)
		}, 8000)

	}

}

