define(['jquery', "./../views/upperBar/upperBar"],  function($, upperBar) {
	$(document).ready(function() {
		var bar = new upperBar("texto");
		$("#upperBar").append(bar);
	});
});
