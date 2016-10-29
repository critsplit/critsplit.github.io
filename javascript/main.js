$(document).ready(function () {

	var scrollSpeed = 500;
	var scrollOffset = -150;

	$("#header-button-coinspam").click(function () {
		$('html, body').animate({
			scrollTop: $("#coinspam").offset().top + scrollOffset
		}, scrollSpeed);
	});

	$("#header-button-yt").click(function () {
		$('html, body').animate({
			scrollTop: $("#yt").offset().top + scrollOffset
		}, scrollSpeed);
	});

	$("#header-button-welcome").click(function () {
		$('html, body').animate({
			scrollTop: $("#welcome-img").offset().top + scrollOffset
		}, scrollSpeed);
	});

	$("#live-count").click(function () {});
	
});