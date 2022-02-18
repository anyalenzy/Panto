$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		infinite: true,
		adaptiveHeight:true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	});

	$(document).ready(function(){
		$('.test_slider').slick({
			arrows: true,
		infinite: true,
		adaptiveHeight:true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
		  }
		},
		{
		  breakpoint: 670,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
		});



