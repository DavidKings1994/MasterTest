define(['jquery', "./../views/upperBar/upperBar", "./../views/downButton/downButton"],  function($, upperBar, downButton) {
	$(document).ready(function() {
		var bar = new upperBar({text : "texto"});
		bar.render();
		$("#upperBar").append(bar.$el);
		var downbutton = new downButton();
		downbutton.render();
		$("#mainBoardFront").append(downbutton.$el);
		$("#mainImage").animate({
			opacity: 1
		}, 1500);
		$(".mainTitlePortrait, .mainTitleLandscape").animate({
			opacity: 1,
			top: "50%"
		}, 1000);
	});
});
