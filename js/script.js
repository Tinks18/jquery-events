$(document).ready(function() {
 

 	// $("#stream1_btn").click( function() {
	// 	$(".stream1").hide('slow');
	// 	// $(".stream1").show('slow');
	// 	//  $(".stream1").show('medium');
	// 	// $(".stream1").hide('slow');
	// 	// $(".stream1").show('medium');
	// 	// $(".stream1").show('fast');
	// 	 $(".stream1").show(1000);
		 
	// });
	
	// $("#stream1_btn").click( function() {
		
	// 	$(".stream1").show('slow');
	// 	$(".stream1").hide('slow');
	// 	 $(".stream1").hide('medium');
	// 	$(".stream1").hide('fast');
	// 	$(".stream1").hide(1000);

	// });

	// $("#stream1_btn").click( function() {
	// 	$(".stream1").fadeTo(1000,0.5);
		
		
	// });

	// $("#stream1_btn").click( function() {
	// 	$(".stream1").toggle();
	// 	$(".stream1").toggle(1000);
		
		
	// });

	// $("#stream1_btn").click( function() {
	// 	$(".stream1").slideUp();
	// 	$(".stream1").slideUp(1000);
	// 	$(".stream1").slideDown();
	// 	$(".stream1").slideDown(1000);

	// });

	// $("#stream1_btn").click( function() {
	// 	$(".stream1").slideToggle(1000);
	
		
	// });

	// $("#stream1_btn").click( function() {
	// 	$(".stream1").fadeIn(1000);
	//     $(".stream1").fadeOut(500);
	
		
	// });

	$("#stream1_btn").click( function() {
		
	    $(".stream1").fadeTo(500,0.5);
		$(".stream1").fadeToggle(1000);
	
		
	});
	
	
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
