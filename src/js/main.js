import "slick-carousel";
import "lightbox2";
// import check from "./component/scroll";
import tab from "./component/tab";

$(".slider").slick({
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$("form.form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "./assets/php/mail.php", //Change
    data: th.serialize()
  }).done(function() {
    alert("Спасибо! Мы с вами скоро свяжемся.");
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

$('.scroll').on('click', function(e){
  e.preventDefault();
  var $this = $(this);
  var attr = $this.attr('href');
  $("html, body").animate({
    scrollTop: $(attr).offset().top
  }, 500);
});