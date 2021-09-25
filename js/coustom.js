


$( document ).ready(function() {
 new WOW().init();

  
    
});
// counter up
$('.counter').counterUp({
    delay: 10,
    time: 1000
    });

  $('.image-link').magnificPopup({
    type:'image',
    gallery: {
          enabled:true
        }

  });

  // init Isotope
var $grid = $('.protfolio_items').isotope({
  // options
});
// filter items on button click
$('.isotop_button').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// filter items on button click

$(document).on( 'click', '.isotop_button li', function() {
  $(this).addClass("active").siblings().removeClass("active");
});

// owl-carousel
 $(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});

 // Testimonials carousel (uses the Owl Carousel library)
  $(".owl-carousel").owlCarousel({
    autoplay: Boolean,
    dots:Boolean,
    loop:Boolean,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 2
      }
    }
  });

