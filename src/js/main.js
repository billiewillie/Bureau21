import "slick-carousel";
import "lightbox2";
import "jquery-validation";
// import check from "./component/scroll";
import tab from "./component/tab";

function sliderStart(el) {
  el.slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}

sliderStart($(".slider"));
sliderStart($(".slider__photo"));
sliderStart($(".slider-ideas"));
sliderStart($(".news-slider"));

$(".slider__models").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
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
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

$("#sendform").validate({
  submitHandler: function(form){
    var form = document.forms.sendform;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./assets/php/mail-file.php");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert("Спасибо! Мы с вами скоро свяжемся.");
        setTimeout(function() {
          $("#sendform").trigger("reset");
        }, 1000);
      }
    };
    xhr.send(formData);
  }
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
} else if(sidebar && (string.split('news-').length > 1)) {
  sidebar.setAttribute('href', '/news.html');
  sidebarTitle.innerHTML = 'назад к новостям'
}

if($('.file__status')){
  $('#upload').change(function(){
    $('.file__status').html('Файл загружен')
  })
}