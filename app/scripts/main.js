$(document).ready(function(){
	var target = $(window).height()/2;


	$(window).scroll(function() {
		$(".marker").each(function(){
			var eTop = $(this).offset().top;
			var elementYPosition = (eTop  - $(window).scrollTop());

			if (elementYPosition <= target) {
				$(".marker").css("background", "#ddd");

	    	$(this).css("background", "black");
			};
		});
	});
});
