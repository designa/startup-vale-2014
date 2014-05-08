$(document).ready(function(){
	var target = $(window).height()/2;

	var menuTop = $('.menu').offset().top;  
		  
	var fixMenu = function(){  
		var scrollTop = $(window).scrollTop();  
		       
		if (scrollTop > menuTop) {   
		    $('.menu').addClass('menu-fixed');  
		} else {  
		    $('.menu').removeClass('menu-fixed');   
		}  
	};

	fixMenu();  

	$(window).scroll(function() {
		$(".marker").each(function(){
			var eTop = $(this).offset().top;
			var elementYPosition = (eTop  - $(window).scrollTop());

			if (elementYPosition <= target) {
				$(".marker").css("background", "#ddd");

	    	$(this).css("background", "#96ce38");
			};
		});

		var scroll = $(document).scrollTop();

    if (scroll > 0) {
      $(".back-to-top").fadeIn();
    }
    else {
    	$(".back-to-top").fadeOut();	
    }

    fixMenu();  
	});
});
