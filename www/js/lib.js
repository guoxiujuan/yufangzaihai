
$(document).ready(function($) {
	
	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=992 ){
				$('.soBox').stop().slideDown();
				$('.nav').stop().slideDown();
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=992 ){
				$('.soBox').stop().slideUp();
				$('.nav').stop().slideUp();
			}
		}
	});



	
	
});