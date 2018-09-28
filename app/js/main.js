$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items:1,
        merge:false,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        onInitialized: theThing,
    });

    function theThing(event){
      $(".active .owl-video-play-icon").trigger("click")
    };


    // $('.owl-dot').click(function(){
    //     playVideo();
    // });

    // function playVideo(){
    //   if ($('.owl-item').hasClass("active")) {
    //     $('.owl-item').trigger("click");
    //   }
    // };


});


//jQuery is required to run this code
// $( document ).ready(function() {

//     scaleVideoContainer();

//     initBannerVideoSize('.video-container .poster img');
//     initBannerVideoSize('.video-container .filter');
//     initBannerVideoSize('.video-container video');

//     $(window).on('resize', function() {
//         scaleVideoContainer();
//         scaleBannerVideoSize('.video-container .poster img');
//         scaleBannerVideoSize('.video-container .filter');
//         scaleBannerVideoSize('.video-container video');
//     });

// });

// function scaleVideoContainer() {

//     var height = $(window).height() + 5;
//     var unitHeight = parseInt(height) + 'px';
//     $('.homepage-hero-module').css('height',unitHeight);

// }

// function initBannerVideoSize(element){

//     $(element).each(function(){
//         $(this).data('height', $(this).height());
//         $(this).data('width', $(this).width());
//     });

//     scaleBannerVideoSize(element);

// }

// function scaleBannerVideoSize(element){

//     var windowWidth = $(window).width(),
//     windowHeight = $(window).height() + 5,
//     videoWidth,
//     videoHeight;

//     console.log(windowHeight);

//     $(element).each(function(){
//         var videoAspectRatio = $(this).data('height')/$(this).data('width');

//         $(this).width(windowWidth);

//         if(windowWidth < 1000){
//             videoHeight = windowHeight;
//             videoWidth = videoHeight / videoAspectRatio;
//             $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

//             $(this).width(videoWidth).height(videoHeight);
//         }

//         $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

//     });
// }