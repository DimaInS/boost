$(function(){ 
    
    let header = $('#header');
    let headerH;
    let intro = $('#home');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        headerH = header.innerHeight();
        if ( scrollPos > headerH) {
            header.addClass('background');
        } else {
            header.removeClass('background'); 
        }
    });
    $ ('[data-scroll]').on('click',function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $('html,body').animate( {
            scrollTop: elementOffset - 64
        } ,700 );
    }); 



    $('.accessories__slider').slick({
        adaptiveHeight: false,
        slidesToShow:7,
        slidesToScroll: 1,
         infinite: true,
        variableWidth: true,
        responsive:[
             {
           breakpoint: 375,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1
           }
           } 
         ]
     });

    $('.burger').click(function(event) {
        $('.header__menu').toggleClass('header__menu--active');
        });


// Popup модальное окно

        $('.link__reg').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
        
});