$(document).ready(function() {	
//PRELOADER
    setTimeout(function() {
     $('body').addClass('loaded');
    }, 1800);  

//Tooltip Booststrap
    $('[data-toggle="tooltip"]').tooltip();

  
//Desplazamiento boton
    $(".btn-works").on("click", function(){
    $("html,body").animate({ scrollTop : $("#portfolio").offset().top}, 1500 );
});

      $(".btn-about").on("click", function(){
      $("html,body").animate({ scrollTop : $("#about").offset().top}, 1600 );
});

      $(".btn-contact").on("click", function(){
      $("html,body").animate({ scrollTop : $("#contacto").offset().top}, 1700 );
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
         overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down');
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
             });
           }
         });

       } else {
         $('.open-overlay').css('pointer-events', 'none');
         top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
         middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
         bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
         overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
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
         });
       }
     });
  
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
      $("#typed2").typed({
      strings: ["Diseño Gráfico^1000", "Desarrollo Web^2000"],
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

  //FORM VALIDATION
(function($) {

jQuery(document).ready(function(){
	$('#cform').on( "submit", function() {

	var action = $(this).attr('action');

	$("#message").slideUp(750,function() {
	$('#message').hide();
	$('#submit')
	
	.before('<div class="text-center"><img src="./img/loader.gif" class="contact-loader" /></div>')
	.attr('disabled','disabled');

  $.post(action, {
    name: $('#name').val(),
    companyname: $('#companyname').val(),
    email: $('#email').val(),
    tel: $('#tel').val(),
    comments: $('#comments').val(),
  },
  function(data){
    document.getElementById('message').innerHTML = data;
    $('#message').slideDown('slow');
    $('#cform img.contact-loader').fadeOut('slow',function(){$(this).remove();});
    $('#submit').removeAttr('disabled');
    if(data.match('success') != null) $('#cform').slideUp('slow');
  }
  );
});
		return false;
	});
});

}(jQuery));
  
	});