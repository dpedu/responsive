$(document).ready(function(){
	
	/* Init FitVids - Replace selector with where your videos are */
	$("#thing-with-videos").fitVids();
	
	/* Breakpoints */
	$(window).setBreakpoints({
		distinct: true,
		breakpoints: [
			320,
			480,
			600,
			768,
			992,
			1382
		] 
	});
	$(window).bind('enterBreakpoint320', function() { /* your code */ });
	$(window).bind('enterBreakpoint480', function() { /* your code */ });
	$(window).bind('enterBreakpoint600', function() { /* your code */ });
	$(window).bind('enterBreakpoint768', function() { /* your code */ });
	$(window).bind('enterBreakpoint992', function() { /* your code */ });
	$(window).bind('enterBreakpoint1382',function() { /* your code */ });
	
});