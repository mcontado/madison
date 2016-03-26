$(document).ready(function(){

	$(".slider > img").fadeIn(0);
	// $("#01, #11, #21, #31").fadeOut(0);


	$("#01").fadeIn(0);
	$("#11").fadeIn(0);
	$("#21").fadeIn(0);
	$("#31").fadeIn(0);

	$("#02").fadeOut(0);
	$("#12").fadeOut(0);
	$("#22").fadeOut(0);
	$("#32").fadeOut(0);

	$("#03").fadeOut(0);
	$("#13").fadeOut(0);
	$("#23").fadeOut(0);
	$("#33").fadeOut(0);


	$("#04").fadeOut(0);
	$("#14").fadeOut(0);
	$("#24").fadeOut(0);
	$("#34").fadeOut(0);

	// $("#01").fadeOut(0);
	// $("#12").fadeOut(0);
	// $("#23").fadeOut(0);
	// $("#34").fadeOut(0);
	
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

// picture_idx 0-3
function slider(picture_idx, position){
	console.log(picture_idx, position)
	p = picture_idx%4
	pn = (p+1)%4

	idx = p+1
	idxn = pn +1

	if(position)
	{
		$("#0"+idx).fadeOut(0)
		$("#2"+idx).fadeOut(0)
		$("#0"+idxn).fadeIn(300)
		$("#2"+idxn).fadeIn(300)
		setTimeout(function()
		{
			slider(p, false)
		}, 1000)
	}
	else
	{
		$("#1"+idx).fadeOut(0)
		$("#3"+idx).fadeOut(0)
		$("#1"+idxn).fadeIn(300)
		$("#3"+idxn).fadeIn(300)

		setTimeout(function()
		{
			slider(pn, true)
		}, 8000)

	}

}

