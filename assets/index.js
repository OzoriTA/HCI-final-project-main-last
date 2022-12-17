$(document).ready(function(){
    $('.culture--content').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true, 
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:true,
                infinite:true,
                dots: true
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                infinite:false
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                infinite:false
              }
            }
           
          ]
    });
  });