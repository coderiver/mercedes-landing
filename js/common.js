var clock;
head.ready(function() {


	// var clock = $('.your-clock').FlipClock({
	// // ... your options here
	// });

	$(document).ready(function() {

	// Grab the current date
	var currentDate = new Date();

	// Set some date in the future. In this case, it's always Jan 1
	var futureDate  = new Date(currentDate.getFullYear() , 9, 1);

	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	// Instantiate a coutdown FlipClock
	clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
		language: 'ru'
	});
});
$('.slideshow__close').click(function(event) {
	$('.slideshow').fadeOut();
	return false;
});
$('.gallery__pic').click(function(event) {
	$('.slideshow').fadeIn();
	return false;
});
$('.overlay').click(function(event) {
	$('.js-popupform').fadeOut();
});
$('.js-popup').click(function(event) {
	$('.js-popupform').fadeIn();
});
$('.select select').change(function(event) {
	$(this).prev().prev().val($(this).val());
});
$(window).scroll(function() {
	$btn = $('.header .btn');
	if($(window).scrollTop()> 400){
		$btn.addClass('is-active');
	}
	else{
		$btn.removeClass('is-active');
	}
   if($(window).scrollTop() + $(window).height() + 300 > $(document).height()) {
       // alert("bottom!");
       $btn.removeClass('is-active');
   }
});

$(".js-goto").click(function() {
	toto = $(this).data('to');
    $('html, body').animate({
        scrollTop: $('#'+toto).offset().top - 100
    }, 2000);
    return false;
});
$( ".datepicker" ).datepicker();
$('.form__check a').click(function(event) {
	$(this).parent().parent().toggleClass('is-visible');
	return false;
});
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	// console.log($('body').html());

$('.js-header-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	arrows: true,
	focusOnSelect: true,
	centerPadding: '0',
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 1
			}
		},
		{			
			breakpoint: 769,
			settings: {
				slidesToShow: 3
			}
		}
	]
});

});