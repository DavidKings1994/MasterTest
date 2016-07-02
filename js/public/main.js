define([
	'jquery',
	"./../views/downButton/downButton",
	"./../views/experiences/experiences",
	"./../views/habilities/skills",
	"./../views/navbar/navbar"
],  function($, downButton, experiences, skills, navbar) {
	$(document).ready(function() {
		$("#mainImage").stop().delay(1000).animate({
			opacity: 1
		}, "slow");
		$(".mainTitlePortrait, .mainTitleLandscape").stop().delay(1200).animate({
			opacity: 1,
			top: "50%"
		}, "slow");

		var downbutton = new downButton();
		downbutton.render();
		$("#mainBoardFront").append(downbutton.$el);

		var navigation = new navbar();
		navigation.render();
		$("body").append(navigation.$el);
		$(window).scroll();

		var eduContent = new experiences();
		eduContent.render();
		$("#experiencesContent").append(eduContent.education);
		$("#careersContent").append(eduContent.career);

		var habilitiesContent = new skills();
		habilitiesContent.render();
		$("#skillsContent").append(habilitiesContent.skills);
		$("#languagesContent").append(habilitiesContent.languages);
		$("#toolsContent").append(habilitiesContent.tools);

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

		window.fbAsyncInit = function() {
			FB.init({
				appId      : '205154059880871',
				xfbml      : true,
				version    : 'v2.6'
			});
		};

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	});
});
