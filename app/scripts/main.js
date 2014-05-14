$(document).ready(function(){
  var target = $(window).height()/2;

  var menuTop = $('.menu').offset().top;

  var fixMenu = function(){
    var scrollTop = $(window).scrollTop()+110;

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


$(document).ready(function(){
  var lastId,
      topMenu = $(".menu"),
      topMenuHeight = topMenu.outerHeight(),
      menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function(){
        var item = $($(this).not("#register").attr("href"));
        if (item.length) { return item; }
      });

  menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  $(window).scroll(function(){
     var fromTop = $(this).scrollTop()+topMenuHeight;

     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         menuItems
           .parent().removeClass("active")
           .end().filter("[href=#"+id+"]").parent().addClass("active");
     }
  });
});
