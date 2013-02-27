$(function() {
	var page=1;
	var pages=3;

	$('.arrow-left').click(function() {
    	$('<div class="left-box box"></div>').appendTo('.box-container');

		$('.center-box').animate({left:'1450px'},500, function() {
			$('.center-box').remove();
		});
		$('.left-box').animate({left:'200px'},500, function() {
			$('.left-box').addClass('center-box').removeClass('left-box');
		});

		page--;
		if(page < 1) {
			page = 3;
		}
  		$('.page-marker').removeClass('active').addClass('page');
  		$('.page-control').children(':nth-child('+page+')').addClass('active').removeClass('page');

	});

	$('.arrow-right').click(function() {
        $('<div class="right-box box"></div>').appendTo('.box-container');
		
		$('.center-box').animate({left:'-1450px'},500, function() {
			$('.center-box').remove();
		});
		$('.right-box').animate({left:'200px'},500, function() {
			$('.right-box').addClass('center-box').removeClass('right-box');

		});

		page++;
		if(page > 3) {
			page = 1;
		}
		$('.page-marker').removeClass('active').addClass('page');
  		$('.page-control').children(':nth-child('+page+')').addClass('active').removeClass('page');
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