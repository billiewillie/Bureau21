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

$(".news__slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
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

const sidebar = document.querySelector('.sidebar');
const sidebarTitle = sidebar.querySelector('h3.title');
const string = window.location.href;
if(sidebar && (string.split('project').length > 1)){
  sidebar.setAttribute('href', '/design.html');
  sidebarTitle.innerHTML = 'назад на страницу дизайн'
}