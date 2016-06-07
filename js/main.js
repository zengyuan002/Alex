jQuery(function($) {
	'use strict',

	// accordian
	$('.accordion-toggle').on('click', function() {
		$(this).closest('.panel-group').children().each(function() {
			$(this).find('>.panel-heading').removeClass('active');
		});

		$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event) {
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function() {
				form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
			}
		}).done(function(data) {
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});

	//toTop
	$(function() {
		$(window).scroll(function() {
			var scrolltop = $(this).scrollTop();
			if (scrolltop >= 300) {
				$(".toTop").show();
			} else {
				$(".toTop").hide();
			}
		});
		$(".toTop").click(function() {
			$("html,body").animate({
				scrollTop: 0
			}, 500);
		});
	});

});
