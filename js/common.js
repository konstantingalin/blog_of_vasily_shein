$(function(){
	
	/* Выпадающий поиск */
	$(".icon_search").click(function(){
		if($('.icon_search').hasClass('no_active_search')){
			$('.icon_search').removeClass('no_active_search').addClass('active_search');
		}
		$(document).mouseup(function (e){ 
		var div = $(".search_mobile_active"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			$(".icon_search").removeClass('active_search').addClass('no_active_search');
		}
		});
	});
	
	/* Конец выпадающего поиска */
	
	/* Карусель */
	
	$('.article-carousel').owlCarousel({
		loop: false,
		smartSpeed: 700,
		nav: true,
		navText: ['<span></span>', '<span></span>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});
	
	/*  Конец Карусели */

	/* Скролл-кнопка вверх */
	
	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()/4) {
			$('.top').addClass('active');
		}else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	
		/* Конец Скролла-кнопки вверх */
	
    // $('body').fadeOut();
})
/* Прелоудер

$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
});

*/
