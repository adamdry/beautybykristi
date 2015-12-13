function fixFooter() {
	var winWidth = $(window).width();
	var outterDivWidth = $('.outterDiv').width();
	
	if (outterDivWidth > winWidth) {
		$('.footerDiv').width(outterDivWidth);
	}
	else {
		$('.footerDiv').width(winWidth);
	}
}
function fixMenu() {

	// make the padding in the menu items evenly divided based on width
	var outterDivWidth = $('.outterDiv').width();
	var totalLisWidth = 0;
	var itemCount = 0;
	
	$('#cssmenu ul li').each(function(index) {
		totalLisWidth += $(this).width();
		itemCount++;
	});
	
	var difference = outterDivWidth - totalLisWidth;
	
	if (0 !== difference) {
		
		var amountPerLiToAlter = difference / itemCount;
		var existingPadding = (parseInt($('#cssmenu li a').css('padding-left')) * 2);
		var newPadding = existingPadding + amountPerLiToAlter;

        // adjusted for smaller screens - the last menu item was dropping to a new line
		newPadding -= 1;
	
		$('#cssmenu li a').css('padding-left', (newPadding / 2) + 'px');
		$('#cssmenu li a').css('padding-right', (newPadding / 2) + 'px');
	}
}