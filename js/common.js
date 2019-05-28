$(function(){
	/* Меню
	
	$('#my-menu').mmenu({
		extensions: ['widescreen', 'fx-menu-slide', "fx-listitems-slide", "pagedim-black", "position-right"],
		navbar: {
			title: '<img src="img/logo.svg" alt="Ай-Ван лецензированная автошкола">'
		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});
	
	Меню */
	
	
	/* Карусель
	
	$('.price-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	
	Карусель */
	
	/* К верху
	
	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		}else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	
	Конец */
	
    // $('body').fadeOut();
});

/* Прелоудер

$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
});

*/