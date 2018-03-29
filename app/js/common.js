var clickDelay      = 500,
    clickDelayTimer = null;

$('.burger-click-region').on('click', function () {
  
  if(clickDelayTimer === null) {
  
    var $burger = $(this);
    $burger.toggleClass('active');
    $burger.parent().toggleClass('is-open');

    if(!$burger.hasClass('active')) {
      $burger.addClass('closing');
    }

    clickDelayTimer = setTimeout(function () {
      $burger.removeClass('closing');
      clearTimeout(clickDelayTimer);
      clickDelayTimer = null;
    }, clickDelay);
  }
});

$('.main-menu_btn').click(function(e){
    e.preventDefault();
    $('.main-menu-list').slideToggle();
    $(this).toggleClass('__active');
  });