define([
	'jquery',
	"./../views/downButton/downButton",
	"./../views/experiences/experiences",
	"./../views/habilities/skills",
	"./../views/navbar/navbar",
	"./../views/projectDisplay/ProjectContainer",
],  function($, downButton, experiences, skills, navbar, ProjectContainer) {
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

		var projectsDisplay = new ProjectContainer();
		projectsDisplay.render();
		$(".projectsContent").append(projectsDisplay.$el);

		$('#contact input[type="button"]').click(function(){
			var ready = true;
			if($('#contact input[name="name"]').val().trim() == ''){
				$('#contact input[name="name"]').addClass('needToFill');
				ready = false;
			}
			if($('#contact input[name="mail"]').val().trim() == ''){
				$('#contact input[name="mail"]').addClass('needToFill');
				ready = false;
			}
			if($('#contact textarea[name="message"]').val().trim() == ''){
				$('#contact textarea[name="message"]').addClass('needToFill');
				ready = false;
			}
			if(ready) {
				$.ajax({
	                url: "./php/mail.php",
	                type: "POST",
	                dataType: "text",
	                data: $('#contact form').serialize(),
	                success: function(msg) {
						if (msg != 'error') {
							$('#contact input[name="name"]').val('');
							$('#contact input[name="mail"]').val('');
							$('#contact textarea[name="message"]').val('');
							$('#contact input[name="name"]').removeClass('needToFill');
							$('#contact input[name="mail"]').removeClass('needToFill');
							$('#contact textarea[name="message"]').removeClass('needToFill');
						}
						alert(msg);
	                }
	            });
			}
		});

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
