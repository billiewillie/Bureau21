import "slick-carousel";
import "lightbox2";
import check from "./component/scroll";
import tab from "./component/tab";

$("#slider-1").slick({
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 4000,
  mobileFirst: true,
});

$("#slider-2").slick({
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 4000,
  mobileFirst: true,
});