/*$(document).ready(function(){
	$('.toggle-nav').bind('click',function(){
		$('body').toggleClass('active-nav');
	});
});*/

var showMenu = function(){
	$('body').toggleClass('active-nav');
	$('.toggle-nav').toggleClass("active-button");
};

jQuery(document).ready(function($){
	
	// toggle for menu
	$('.toggle-nav').click(function(e){
		e.preventDefault();
		showMenu();
	});

	//waypoints
	$(".imgIntro").waypoint(function(){
	$(this).addClass('seen');
	}, {
		offset: '60%'
	});

	$("figure").waypoint(function(){
	$(this).addClass('seen slideIn');
	}, {
		offset: '80%'
	});

	//flexslider
	$(window).load(function() {
		$('.flexslider').flexslider({
			animation: "slide"
		});
	});

	//magnific 
	// Inline popups
	$('.popup').magnificPopup({
		//delegate: 'a',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});

	$('.gallery-item').magnificPopup({
		//delegate: 'a',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true,
		gallery:{
			enabled:true
		}
	});

	// Sticky nav
	(function($, undefined){
		"use strict";

		var $stickyBar = $(".pageNav"),
		y_pos = $stickyBar.offset().top,
		height = $stickyBar.height();

		$(document).scroll(function(){
			var scrollTop = $(this).scrollTop();
			if (scrollTop > y_pos + height){
			$stickyBar.addClass("pageNav--fixed");
			} else if (scrollTop <= y_pos){
			$stickyBar.removeClass("pageNav--fixed").clearQueue().animate({ top: "0px" }, 0);
			}
		});

	})(jQuery, undefined);

	// Sticky primaryMenuButton
	(function($, undefined){
		"use strict";

		var $stickyButton = $(".primaryMenuButton"),
		y_pos = $stickyButton.offset().top,
		height = $stickyButton.height();

		$(document).scroll(function(){
			var scrollTop = $(this).scrollTop();
			if (scrollTop > y_pos + height){
			$stickyButton.addClass("primaryMenuButton--fixed");
			} else if (scrollTop <= y_pos){
			$stickyButton.removeClass("primaryMenuButton--fixed");
			}
		});

	})(jQuery, undefined);

	//scrollNav
	$(document).ready(function() {
		$('.pageNav').onePageNav({
			scrollThreshold: 0.009,
			changeHash: true
		});
	});



});

//Masonry
var container = document.querySelector('.container--masonry');
var msnry;
//initialize masonry after images have loaded
imagesLoaded( container, function(){
	msnry = new Masonry( container, {
	// options

	itemSelector: '.masonry__item',
	gutter: 22
	});
});





