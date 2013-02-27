$(function() {
	var sliderPage=1;
	var sliderPages=3;

	$('.arrow-left').click(function() {
    	$('<div class="left-box box"></div>').appendTo('.box-container');

		$('.center-box').animate({left:'1450px'},500, function() {
			$('.center-box').remove();
		});
		$('.left-box').animate({left:'200px'},500, function() {
			$('.left-box').addClass('center-box').removeClass('left-box');
		});

		sliderPage--;
		if(sliderPage < 1) {
			sliderPage = 3;
		}
  		$('.page-marker').removeClass('sliderActive').addClass('sliderPage');
  		$('.page-control').children(':nth-child('+sliderPage+')').addClass('sliderActive').removeClass('sliderPage');
        

	});

	$('.arrow-right').click(function() {
        $('<div class="right-box box"></div>').appendTo('.box-container');
		
		$('.center-box').animate({left:'-1450px'},500, function() {
			$('.center-box').remove();
		});
		$('.right-box').animate({left:'200px'},500, function() {
			$('.right-box').addClass('center-box').removeClass('right-box');

		});

		sliderPage++;
		if(sliderPage > 3) {
			sliderPage = 1;
		}
        
		$('.page-marker').removeClass('sliderActive').addClass('sliderPage');
  		$('.page-control').children(':nth-child('+sliderPage+')').addClass('sliderActive').removeClass('sliderPage');
	});
});

$(function() {
    $('#button').click(function(e) { // Button which will activate our modal
        $('#modal').reveal({ // The item which will be opened with reveal
            animation: 'fade',                   // fade, fadeAndPop, none
            animationspeed: 600,                 // how fast animtions are
            closeonbackgroundclick: true,
            dismissmodalclass: 'close'    // the class of a button or element that will close an open modal
        });
    return false;
    });
});