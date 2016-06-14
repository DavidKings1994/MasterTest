define(['jquery', "./../views/upperBar/upperBar", "./../views/downButton/downButton"],  function($, upperBar, downButton) {
	$(document).ready(function() {
		var bar = new upperBar({text : "texto"});
		bar.render();
		$("#upperBar").append(bar.$el);
		var downbutton = new downButton();
		downbutton.render();
		$(downbutton.$el).insertBefore("#mainBoard");
	});
});
