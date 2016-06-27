define(['jquery', "./../views/upperBar/upperBar", "./../views/downButton/downButton", "./../views/experiences/experiences", "./../views/habilities/skills"],  function($, upperBar, downButton, experiences, skills) {
	$(document).ready(function() {
		window.twttr = (function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0],
			t = window.twttr || {};
			if (d.getElementById(id)) return t;
			js = d.createElement(s);
			js.id = id;
			js.src = "https://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);

			t._e = [];
			t.ready = function(f) {
				t._e.push(f);
			};

			return t;
		}(document, "script", "twitter-wjs"));

		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v2.6&appId=747075528746735";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		var eduContent = new experiences();
		eduContent.render();
		$("#experiencesContent").append(eduContent.education);
		$("#careersContent").append(eduContent.career);

		var downbutton = new downButton();
		downbutton.render();
		$("#mainBoardFront").append(downbutton.$el);

		var habilitiesContent = new skills();
		habilitiesContent.render();
		$("#skillsContent").append(habilitiesContent.skills);
		$("#languagesContent").append(habilitiesContent.languages);
		$("#toolsContent").append(habilitiesContent.tools);

		$("#mainImage").animate({
			opacity: 1
		}, 1500);
		$(".mainTitlePortrait, .mainTitleLandscape").animate({
			opacity: 1,
			top: "50%"
		}, 1000);
	});
});
