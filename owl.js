

  $(document).ready(function(){
    "use strict";
      
  
    var owl=$('.testimonial-carousel');
    owl.owlCarousel({
      items:3,
      margin:0,
      
      loop:true,
      autoplay:true,
      smartSpeed:1000,
      
      //nav:false,
      //navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      
      dots:false,
      autoplayHoverPause:false,
    
      responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          640:{
            items:2
          },
          992:{
            items:3
          }
        }
      
      
    });

    var owl=$('.brand-carousel');
    owl.owlCarousel({

      items:6,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:false,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:3
						},
						1000:{
							items:6
						}
					}
				});
				

  });

  