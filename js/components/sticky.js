/*
$(window).scroll(function(){
  var sticky = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll >= 1) sticky.addClass('fixed', 1000, "easeOutBounce");
  else sticky.removeClass('fixed', 300);
});
*/

$(function(){
 // $('header').data('size','big');
  $('.main').data('size','big');
  //$('.header__inside-wrapper').data('size','big');
  //$('.logo').data('size','big');
  //$('.logo__text').data('size','big');
  //$('span.logo__span').data('size','big');
  //$('span i').data('size','big');
  $('.logo_wrapper').data('size','big');
  $('.header_block').data('size','big');

   //$('header').addClass('header__on-load');
  // $('.header__inside-wrapper').addClass('header__on-load');
   //$('.logo').addClass('logo__on-load');
   //$('.logo__span').addClass('logo__span-on-load');
   //$('span i').addClass('logo__span_i-on-load');

//$('.header__inside-wrapper').removeClass('header__on-load');
//$('.logo').removeClass('logo__on-load');
});
/*
  function updateProgress( progress ) {
      // Do whatever you like
      console.log( progress );
  }
  var progress = 0;

  $(window).on('scroll', function() {
      progress = (document.body.scrollTop / ( document.body.scrollHeight - window.innerHeight ) ) * 100;
      updateProgress( progress );
  });
 */  
/*
  if ($(window).width() > 1023) { 
var pval = 0;
var pval2 = 0;
var pval3 = 0;

$(".header").on('scroll', function() {
   pval += 4; //short for pval =  pval+ 0.1
   pval2 += 5; //short for pval =  pval+ 0.1
   pval3 += 0; //short for pval =  pval+ 0.1
   console.log(pval2);

   var b = $(document).scrollTop();
   var header_height = $('.header__inside-wrapper').height();
   console.log("header height" + " " + header_height);

        //if ($(document).scrollTop() > 0) {
        if ($(".header").scrollTop() > 0) {
          $('.header__inside-wrapper').css({ 'height': 165 - pval + "px" });
       //   $('.logo').css({ 'zoom': 200 - pval + "%", 'top': '0px' });
          $('.logo_wrapper').css({ 'zoom': 220 - pval2 + "%" });
       //   $('span i').css({ 'top': -175 - pval + "px", 'width': 270 - pval + "px" }); 
          $('.main').css({ 'paddingTop': 208 - pval2 + "px"});
          //$('.logo__span').css({ 'zoom': 200 - pval + "%" });
          //if (header_height <= 130 ) {
          if( $('.logo_wrapper').css('zoom') <= '1') {
            $('.logo_wrapper').css({ 'zoom': pval3 + "%" });
            //console.log("zoom < 60");
           // $('.logo_wrapper').css({ 'zoom': 100 + "%" });
            $('.header__inside-wrapper').css({ 'height': 75 + "px", 'position' : 'fixed' });
            $('.main').css({ 'paddingTop': 93 + "px" });
            $('.body ').css({ 'overflow-y' : 'auto' });
            $('.header_overflow ').css({ 'display' : 'none' });
           $('.header ').css({ 'overflow-y' : 'hidden', 'minHeight' : '0', 'position' : 'relative' });
          //  $('.header ').css({ 'overflow-y' : 'initial', 'position' : 'relative', 'minHeight' : 'auto', });
          //  $('.logo').css({ 'top': '-4px' });
       //     $('span i').css({ 'top': -175 - pval * 0.5 + "px", 'width': 270 - pval + "px" });
          }
/*
          if (header_height <= 90 ) {
        //    $('.logo').css({ 'top': '-10px' });
            $('.main').css({ 'paddingTop': 165 - pval2 + "px"});
          }
          if (header_height <= 75 ) {
            $('.header__inside-wrapper').css({ 'height': 75 + "px", 'position' : 'fixed' });
            $('.main').css({ 'paddingTop': 95 + "px" });
            $('.body ').css({ 'overflow-y' : 'auto' });
            $('.header_overflow ').css({ 'display' : 'none' });
            $('.header ').css({ 'overflow-y' : 'hidden', 'minHeight' : '0', 'position' : 'relative' });


        //    $('.logo__span ').css({ 'height' : '45px' });
       //     $('.logo').css({ 'zoom': 100 + "%", 'top': '-4px' });
        //     $('span i').css({ 'top': -234 + "px", 'width': 120 + "px" });
        //    $('.logo__span').css({'position' : 'fixed', 'width': '75%', 'left': '50%', 'marginLeft': '-37.5%', 'top': '59px', 'marginTop': '16px' });
           
           }

          }

});

}
*/
/*
$(window).scroll(function() {
/*
  function header () {
   // $(window).scroll(function() {});
        var b = $(document).scrollTop();
        var header_height = $('.header__inside-wrapper').height();

        if ($(document).scrollTop() > 0) {
          $('.header__inside-wrapper').css({ 'height': 165 - b * 0.5 + "px" });
          $('.logo').css({ 'zoom': 200 - b * 0.5 + "%" });
          $('.logo__span').css({ 'zoom': 200 - b * 0.5 + "%" });
          if (header_height <= 75 ) {
            $('.header__inside-wrapper').css({ 'height': 75 + "px", 'position' : 'fixed' });
            $('.main').css({ 'paddingTop': 75 + "px" });
            $('.logo').css({ 'zoom': 100 + "%" });
            $('.logo__span').css({ 'zoom': 100 + "%", 'top': '59px' });
            
           }
          }
         
    
  }
header();

*/



/*
function scrollTop () {
  var b = $(document).scrollTop();
  var header_height = $('.header__inside-wrapper').height();
  console.log(b);
  if ($(document).scrollTop() < 164) {
    $('.header__inside-wrapper').css({ 'height': 165 - b + "px" });
  } if ( header_height == 74 ) {
     $('.header__inside-wrapper').css({ 'height': 65 + "px" });
    $('.header__inside-wrapper').addClass('header__on-load');
    console.log("tadam!");
  } else {

  }
}
scrollTop();
*/

if ($(window).width() > 1023) { 

//$(window).scroll(function() {
    $(".header").scroll(function() {
/*
  var header_height = $('.header__inside-wrapper').height();

    $(window).on("mousewheel", function(event, delta) {
        if (delta > 0) {
            add_height = parseInt(header_height) + 1;
            console.log(header_height);
        } else {
            if (parseInt(header_height) > 0) {
               add_height = parseInt(header_height) - 1;
            }
        }
        console.log(add_height);
      //  return false;
     });

//});

*/

//0
/*
  if ($(document).scrollTop() > 0) {

    if ($('.logo__text').data('size') == 'big') {
        $('.logo__text').data('size','small');
        $('.logo__text').stop().animate({
            opacity: '0'
        }, 600);
    }
} 
*/
/*
else {
    if ($('.logo__text').data('size') == 'small') {
        $('.logo__text').data('size','big');
        $('.logo__text').stop().animate({
            opacity: '1'
        },600);
      }  
  }
*/





//1


  if ($(".header").scrollTop() > 0) {

    if ($('.header__inside-wrapper').data('size') == 'big') {
        $('.header__inside-wrapper').data('size','small');
        $('.header__inside-wrapper').stop().animate({
            height: '75px'
           //'height': 'calc(165px - 26%)'
        }, 600);
    }
    if ($('.header_block').data('size') == 'big') {
        $('.header_block').data('size','small');
        $('.header_block').stop().animate({
            height: '75px'
           //'height': 'calc(165px - 26%)'
        }, 600);
    }
    //$('header').addClass('header__on-load');
} 
if ($(".header").scrollTop() > 1) {
    $('.body ').css({ 'overflow-y' : 'auto' });
    $('.header ').css({ 'overflow-y' : 'hidden', 'minHeight' :'74px' });
}
/* else {
    if ($('.header__inside-wrapper').data('size') == 'small') {
        $('.header__inside-wrapper').data('size','big');
        $('.header__inside-wrapper').stop().animate({
            height:'280px'
        },600);
      }  
  }
*/
//2
/*
  if ($(document).scrollTop() > 0) {

    if ($('span i').data('size') == 'big') {
        $('span i').data('size','small');
        $('span i').stop().animate({
            zoom: '80%'
        }, 600);
    }
}
*/
/*else {
    if ($('span i').data('size') == 'small') {
        $('span i').data('size','big');
        $('span i').stop().animate({
            zoom:'100%'
        },600);
      }  
  }
*/
// 3
/*
  if ($(document).scrollTop() > 0) {

    if ($('span.logo__span').data('size') == 'big') {
        $('span.logo__span').data('size','small');
        $('span.logo__span').stop().animate({
         zoom: '100%'
        }, 600);
    }
} 
*/
/*else {
    if ($('span.logo__span').data('size') == 'small') {
        $('span.logo__span').data('size','big');
        $('span.logo__span').stop().animate({
               marginTop: '30px',
               zoom:'220%'
        },600);
      }  
  }
*/

if ($(".header").scrollTop() > 0) {
//if ($(document).scrollTop() > 0) {
/*
    if ($('.main').data('size') == 'big') {
        $('.main').data('size','small');
        $('.man').stop().animate({
            'paddingTop': 93 + "px",
        }, 600);
    }
    */
    $('.main').css({ 'paddingTop': 74 + "px" });
} 

//4

if ($(".header").scrollTop() > 0) {
    //if ($(document).scrollTop() > 0) {

    if ($('.logo_wrapper').data('size') == 'big') {
        $('.logo_wrapper').data('size','small');
        $('.logo_wrapper').stop().animate({
            zoom: '100%'
   
        }, 600);
         //$('.logo').removeClass('logo__on-load');
        $('.logo_wrapper').css({
            'transform' : 'scale(1)'
        });
    }
 
} 

/* else {
    if ($('.logo').data('size') == 'small') {
        $('.logo').data('size','big');
        $('.logo').stop().animate({
            zoom:'220%',
            top: '48px'
        },600);
        $('.logo').addClass('logo__on-load');
      }  
  }
  */

  //5



});
}