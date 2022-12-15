$(function () {

	"use strict";

	// =====================================================
	// FORM VALIDATION
	// =====================================================
	$('#form').parsley();

	// Clear parsley empty elements
	if ($('#form').length > 0) {
		$('#form').parsley().on('field:success', function () {
			$('ul.parsley-errors-list').not(':has(li)').remove();
		});
	}

	// =====================================================
	// PRELOADER
	// =====================================================
	function anim1() {
		$('html').removeClass('is-preload');
	}

	function anim2() {
		$('.cucu-photo-frame').addClass('cucu-active');
		$('.cucu-big-menu .cucu-photo-frame').removeClass('cucu-active');
	}

	function anim3() {
		$('.cucu-big-menu .cucu-photo-frame').toggleClass('cucu-active');
	}
	$(document).ready(function () {
		setTimeout(anim1, 1500);
		$('.cucu-loader').addClass('cucu-active');
		setTimeout(anim2, 2000);
	});

	// =====================================================
	// SWUP
	// =====================================================
	const options = {
		containers: ['#cucu-dynamic-content'],
		animateHistoryBrowsing: true,
		linkSelector: 'a:not([data-no-swup])',
	};
	const swup = new Swup(options);

	// =====================================================
	// FANCYBOX
	// =====================================================
	$('[data-fancybox="gallery"]').fancybox({
		animationEffect: "zoom-in-out",
		animationDuration: 600,
		transitionDuration: 1200,
		backFocus: false
	});
	$.fancybox.defaults.hash = false;

	// =====================================================
	// MOBILE HEIGHT FIX
	// =====================================================	
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// =====================================================
	// MENU
	// =====================================================
	$('.cucu-menu-btn').on('click', function () {
		$('.cucu-menu-btn , .cucu-big-menu-frame, .cucu-big-menu').toggleClass('cucu-active');
		$('.cucu-top-menu-frame').toggleClass('cucu-menu-opened');
		setTimeout(anim3, 300);
	});

	$('.cucu-fs-menu .cucu-has-children').on('click', function () {
		$('.cucu-fs-menu .cucu-has-children ul').removeClass('cucu-active');
		$(this).children('ul').addClass('cucu-active');
	});

	// =====================================================
	// SLIDERS
	// =====================================================	
	var swiper = new Swiper('.cucu-slider-1s', {
		slidesPerView: 1,
		speed: 1200,
		parallax: true,
		pagination: {
			el: '.cucu-pagination',
			type: "fraction",
		},
		navigation: {
			prevEl: '.cucu-prev',
			nextEl: '.cucu-next',
		},
	});

	var swiper = new Swiper('.cucu-slider-3s', {
		slidesPerView: 3,
		initialSlide: 1,
		speed: 1200,
		centeredSlides: true,
		parallax: true,
		navigation: {
			prevEl: '.cucu-prev',
			nextEl: '.cucu-next',
		},
		breakpoints: {
			992: {
				slidesPerView: 2,
			},
			768: {
				initialSlide: 0,
				spaceBetween: 40,
				slidesPerView: 1,
			},
		},
	});

	var swiper = new Swiper('.cucu-banner-slider', {
		slidesPerView: 1,
		speed: 1500,
		parallax: true,
		loop: true,
		effect: 'fade',
		pagination: {
			el: '.cucu-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 4000,
		},
		navigation: {
			prevEl: '.cucu-prev',
			nextEl: '.cucu-next',
		},
	});

	var swiper = new Swiper('.cucu-slideshow', {
		slidesPerView: 1,
		speed: 1200,
		parallax: true,
		effect: 'fade',
		pagination: {
			el: '.cucu-pagination',
			type: "fraction",
		},
		autoplay: {
			delay: 4000,
		},
		navigation: {
			prevEl: '.cucu-prev',
			nextEl: '.cucu-next',
		},
	});

	// =====================================================
	// REINIT
	// =====================================================
	document.addEventListener("swup:contentReplaced", function () {

		// =====================================================
		// FORM VALIDATION
		// =====================================================
		$('#form').parsley();

		// Clear parsley empty elements
		if ($('#form').length > 0) {
			$('#form').parsley().on('field:success', function () {
				$('ul.parsley-errors-list').not(':has(li)').remove();
			});
		}

		// =====================================================
		// START ANIMATONS
		// =====================================================
		if ($('html').hasClass('is-rendering')) {
			$("html, body").animate({
				scrollTop: 0
			}, {
				duration: 0,
				complete: function () { }
			});
		}
		$('.cucu-photo-frame').removeClass('cucu-active');
		setTimeout(anim2, 300);

		// =====================================================
		// FANCYBOX
		// =====================================================
		$('[data-fancybox="gallery"]').fancybox({
			animationEffect: "zoom-in-out",
			animationDuration: 600,
			transitionDuration: 1200,
			backFocus: false
		});
		$.fancybox.defaults.hash = false;

		// =====================================================
		// MOBILE HEIGHT FIX
		// =====================================================
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// =====================================================
		// MENU
		// =====================================================
		$('.cucu-menu-btn').on('click', function () {
			$('.cucu-menu-btn , .cucu-big-menu-frame, .cucu-big-menu').toggleClass('cucu-active');
			$('.cucu-top-menu-frame').toggleClass('cucu-menu-opened');
			setTimeout(anim3, 300);
		});

		$('.cucu-fs-menu .cucu-has-children').on('click', function () {
			$('.cucu-fs-menu .cucu-has-children ul').removeClass('cucu-active');
			$(this).children('ul').addClass('cucu-active');
		});

		// =====================================================
		// SLIDERS
		// =====================================================
		var swiper = new Swiper('.cucu-slider-1s', {
			slidesPerView: 1,
			speed: 1200,
			parallax: true,
			pagination: {
				el: '.cucu-pagination',
				type: "fraction",
			},
			navigation: {
				prevEl: '.cucu-prev',
				nextEl: '.cucu-next',
			},
		});

		var swiper = new Swiper('.cucu-slider-3s', {
			slidesPerView: 3,
			initialSlide: 1,
			speed: 1200,
			centeredSlides: true,
			parallax: true,
			navigation: {
				prevEl: '.cucu-prev',
				nextEl: '.cucu-next',
			},
			breakpoints: {
				992: {
					slidesPerView: 2,
				},
				768: {
					initialSlide: 0,
					spaceBetween: 40,
					slidesPerView: 1,
				},
			},
		});

		var swiper = new Swiper('.cucu-banner-slider', {
			slidesPerView: 1,
			speed: 800,
			parallax: true,
			loop: true,
			effect: 'fade',
			pagination: {
				el: '.cucu-pagination',
				clickable: true,
			},
			autoplay: {
				delay: 4000,
			},
			navigation: {
				prevEl: '.cucu-prev',
				nextEl: '.cucu-next',
			},
		});

		var swiper = new Swiper('.cucu-slideshow', {
			slidesPerView: 1,
			speed: 1200,
			parallax: true,
			effect: 'fade',
			pagination: {
				el: '.cucu-pagination',
				type: "fraction",
			},
			autoplay: {
				delay: 4000,
			},
			navigation: {
				prevEl: '.cucu-prev',
				nextEl: '.cucu-next',
			},
		});
	});

});
