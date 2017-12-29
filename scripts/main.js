//Call Owl Carousel Plugin
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		padding: 10,
		nav: true,
		responsive:{
			0:{
				items: 1
			},
			640:{
				items: 2
			},
			1280:{
				items: 4
			}
		}
	});
});

// Hide Hero Chevron on Scroll Down
$(window).on('scroll', function() {
	if($(window).scrollTop() > $(window).height() * .5) {
		$('#hero-chevron').fadeOut();
	} else {
		$('#hero-chevron').fadeIn();
	}
});

// Expandable About + Training Sections
$(document).ready(function(){
	$('#more-about').on('click', function() {
		$(this).next().slideToggle(250);
		$('#more-about').toggleClass('rotate');
	})
});

$(document).ready(function(){
	$('#more-training').on('click', function() {
		$(this).next().slideToggle(250);
		$('#more-training').toggleClass('rotate');
	})
});
