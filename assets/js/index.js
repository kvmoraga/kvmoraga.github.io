$(document).ready(function() {	
//PRELOADER
    setTimeout(function() {
     $('body').addClass('loaded');
    }, 1800);  
    
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
//PRELOADER
  $('.open-overlay').click(function() {
       $('.open-overlay').css('pointer-events', 'none');
       var overlay_navigation = $('.overlay-navigation'),
         top_bar = $('.bar-top'),
         middle_bar = $('.bar-middle'),
         bottom_bar = $('.bar-bottom');

       overlay_navigation.toggleClass('overlay-active');
       if (overlay_navigation.hasClass('overlay-active')) {

         top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
         middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
         bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
         overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
         overlay_navigation.velocity('transition.slideLeftIn', {
           duration: 300,
           delay: 0,
           begin: function() {
             $('nav ul li').velocity('transition.perspectiveLeftIn', {
               stagger: 150,
               delay: 0,
               complete: function() {
                 $('nav ul li a').velocity({
                   opacity: [1, 0],
                 }, {
                   delay: 10,
                   duration: 140
                 });
                 $('.open-overlay').css('pointer-events', 'auto');
               }
             })
           }
         })

       } else {
         $('.open-overlay').css('pointer-events', 'none');
         top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
         middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
         bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
         overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
         $('nav ul li').velocity('transition.perspectiveRightOut', {
           stagger: 150,
           delay: 0,
           complete: function() {
             overlay_navigation.velocity('transition.fadeOut', {
               delay: 0,
               duration: 300,
               complete: function() {
                 $('nav ul li a').velocity({
                   opacity: [0, 1],
                 }, {
                   delay: 0,
                   duration: 50
                 });
                 $('.open-overlay').css('pointer-events', 'auto');
               }
             });
           }
         })
       }
     })
  
//ISOTOPE
$(window).load(function(){
    var $container = $('.portfolioContenedor');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.filtrar a').click(function(){
        $('.filtrar .actual').removeClass('actual');
        $(this).addClass('actual');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});
    
//TYPED
$(function(){
    $("#typed").typed({
      strings: ["Katherine M.<br>Graphic <em>Designer</em>"],
        stringsElement: $('#typed-strings'),
        typeSpeed: 60,
        startDelay: 2500,
        backDelay: 500,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        resetCallback: function() { newTyped(); }
    });

        $(".reset").click(function(){
        $("#typed").typed('reset');
    });

      $("#typed2").typed({
      strings: ["Diseñadora Gráfica^1000", "Desarrolladora Web.^2000"],
        typeSpeed: 160,
        loop: true
    });

        $(".reset").click(function(){
        $("#typed2").typed('reset');
    });
});
	
//MASONRY
$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true

});
	
   /*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
  (function($) {

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 300,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


	

})(jQuery);

	});