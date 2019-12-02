//= vendor/fullpage.min.js
//= vendor/scrolloverflow.min.js

$(document).ready(function() {
	$('.fullpage').fullpage({
		//options here
		//autoScrolling:true,
		scrollOverflow: true,
		scrollOverflowOptions: {click: false},
		afterRender: function() {
			$('.projects__last').html($('.projects__slides').length);
		},
		afterSlideLoad: function(section, origin, destination) {
			$('.projects__first').html(++destination.index);
		}
	});

	$(document).on('click', '.projects__mini a', changeImg);

		function changeImg(event) {
			event.preventDefault();
			$('.projects__big img').attr('src', $(this).attr("data-src"));
		}

	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});

        $('.header__hamburger').on('click', function() {
            $(this).toggleClass('header__hamburger-span--active');
            $('.header__menu').toggleClass('header__menu--open');
            
            $('.header__menu-link').on('click', function() {
                $('.header__hamburger').removeClass('header__hamburger-span--active');
                $('.header__menu').removeClass('header__menu--open');
            }); 
        });

		

});

     //Smooth Scrolling Using Navigation Menu


