$(document).ready(function(){

	$(".slide > img").fadeOut(0);


	// $("#01").fadeIn(0);
	// $("#11").fadeIn(0);
	// $("#21").fadeIn(0);
	// $("#31").fadeIn(0);

	$('.slider2, .slider4').cycle({
          timeout: 80000,
        });

	$('.slider1, .slider3').cycle({
            delay: 20000,
            timeout: 80000,
          });

	// setTimeout(function()
	// {
	// 	slider(0, true)
	// }, 200)
});

// picture_idx 0-3
// function slider(picture_idx, position){
// 	console.log(picture_idx, position)
// 	p = picture_idx%4
// 	pn = (p+1)%4

// 	idx = p+1
// 	idxn = pn +1

// 	if(position)
// 	{
// 		$("#0"+idx).fadeOut(0)
// 		$("#2"+idx).fadeOut(0)
// 		$("#0"+idxn).fadeIn(3000)
// 		$("#2"+idxn).fadeIn(3000)
// 		setTimeout(function()
// 		{
// 			slider(p, false)
// 		}, 1000)
// 	}
// 	else
// 	{
// 		$("#1"+idx).fadeOut(0)
// 		$("#3"+idx).fadeOut(0)
// 		$("#1"+idxn).fadeIn(3000)
// 		$("#3"+idxn).fadeIn(3000)

// 		setTimeout(function()
// 		{
// 			slider(pn, true)
// 		}, 3000)

// 	}

// }

