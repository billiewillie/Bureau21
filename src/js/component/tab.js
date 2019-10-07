function tabFunc() {
  if($('.gallery')){
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tab__list a').click(function(e){
      e.preventDefault();
      var $this = $(this),
          tabgroup = '#'+$this.parents('.tab__list').data('tabgroup'),
          others = $this.closest('li').siblings().children('a'),
          target = $this.attr('href');
      others.removeClass('active');
      $this.addClass('active');
      $(tabgroup).children('div').hide();
      $(target).show();
    });
  }
}

export default tabFunc();