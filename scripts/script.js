$(document).ready(function() {
    $('.top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
 	$("#yes").on('click', function() {
 		$(".begin, .question1").show();
 		$(".question2, .end, .statement1, .statement2, .statement3").hide();
 	$('html,body').animate({
        scrollTop: $(".question1").offset().top},
        'slow');
 	});

 	$("#no").on('click', function() {
 		$(".begin, .statement1").show();
 		$(".statement2, .statement3, .question1, .question2, .end").hide();
 	$('html,body').animate({
        scrollTop: $(".statement1").offset().top},
        'slow');
 	});

 	$("#yes1").on('click', function() {	
 		$(".begin, .question1, .question2").show();
 		$(".end, .statement1, .statement2, .statement3").hide();
  	$('html,body').animate({
        scrollTop: $(".question2").offset().top},
        'slow');
 	});

 	$("#no1").on('click', function() {	
 		$(".begin, .question1, .statement2").show();
 		$(".question2, .end, .statement1, .statement3").hide();
 	$('html,body').animate({
        scrollTop: $(".statement2").offset().top},
        'slow');
 	});

 	$("#yes2").on('click', function() {
 		$(".begin, .question1, .question2, .end").show();
 		$(".statement1, .statement2, .statement3").hide();
	$('html,body').animate({
        scrollTop: $(".end").offset().top},
        'slow');
 	});

 	$("#no2").on('click', function() {
 		$(".begin, .question1, .question2, .statement3").show();
 		$(".end, .statement1, .statement2").hide();
 	$('html,body').animate({
        scrollTop: $(".statement3").offset().top},
        'slow'); 		
 	});
});
