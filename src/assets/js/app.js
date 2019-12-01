//= vendor/fullpage.min.js
//= vendor/scrolloverflow.min.js

$(document).ready(function() {
	$('.fullpage').fullpage({
		//options here
		//autoScrolling:true,
		scrollOverflow: true
	});

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


