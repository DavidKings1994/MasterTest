define(['jquery', "./../views/upperBar/upperBar", "./../views/downButton/downButton", "./../views/experiences/experiences"],  function($, upperBar, downButton, experiences) {
	$(document).ready(function() {
		var eduContent = new experiences();
		eduContent.render();
		$("#experiencesContent").append(eduContent.education);
		$("#careersContent").append(eduContent.career);
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
