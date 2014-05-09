$(document).ready(function(){
	var target = $(window).height()/2;

	var menuTop = $('.menu').offset().top;

	var fixMenu = function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop > menuTop) {
		    $('.show-menu').parent().addClass('menu-fixed');
        $('.show-menu').fadeIn();
    } else {
        $('.show-menu').parent().removeClass('menu-fixed');
        $('.show-menu').fadeOut();
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
