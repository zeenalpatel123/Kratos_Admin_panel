
$(function() {
    $('.inner_menu').slideUp();
    $('.title_menu.active').next().slideDown();
    $('.title_menu').click(function(j) {   
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.title_menu').removeClass('active');
        $(this).next().slideUp();
      }
      else {
        $('.title_menu').removeClass('active');
        $('.inner_menu').slideUp();
        $(this).addClass('active');
        $(this).next().slideDown();
      }     
    });
  });

