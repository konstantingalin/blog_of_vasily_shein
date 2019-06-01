$(function(){
	
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
	
	/* Рабочий код
	
	$(".icon_search").click(function(){
		$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".search_mobile_active"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".icon_search").removeClass('active_search').addClass('no_active_search');
		}
			$(".icon_search").click(function(){
				if($('.icon_search').hasClass('no_active_search')){
					$('.icon_search').removeClass('no_active_search').addClass('active_search');
				}else{
					$('.icon_search').removeClass('active_search').addClass('no_active_search');
				}
			});
		}); */
		
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
	
	
    // $('body').fadeOut();
})
/* Прелоудер

$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
});

*/
