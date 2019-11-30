//= ../../../node_modules/slick-carousel/slick/slick.js

$(function(){

    $('.client__slider').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        asNavFor: '.dots__slider'
    });
    $('.dots__slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        arrows: false,
        asNavFor: '.client__slider',
        focusOnSelect: true
    });
    $('.partners__slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        arrows: true,
        prevArrow: '<img class="slider-arrow__left" src="assets/img/double-left.svg">',
        nextArrow: '<img class="slider-arrow__right"  src="assets/img/double-right.svg">',
        responsive: [
            {
              breakpoint: 1324,
              settings: {
                slidesToShow: 3,
                arrows: false
              }
            },
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 2,
                arrows: false
              }
            },
            {
                breakpoint: 550,
                settings: {
                  slidesToShow: 1,
                  arrows: false
                }
              }
        ]
    });

     //Smooth Scrolling Using Navigation Menu
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
