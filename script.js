$ (document).ready(function() {
 	$("#yes1").on('click', function() {
 		$("#statement1").fadeIn();
 		$("#question2").fadeOut();
 	})

 	$("#no1").on('click', function () {
 		$("question2").fadeIn();
 		$("#statement1").fadeOut();
 	})
});



 //     $("#yes1").click(function(){
 // 	$("#question2").show();
 //  	});
 //  	$("#no1").click(function(){
 //   		$("#statement1").show();
 //   	});	
