define(['jquery','Backbone', 'underscore'], function($, Backbone, _) {
    var navbar = Backbone.View.extend({
        tagname: "div",
        className: "navigationbarContainer",
        initialize: function() {
            var self = this;
            $(window).bind('scroll', function (ev) {
                self.loadMore(ev);
            });
            this.info = [
                ["profile"],
                ["experiences"],
                ["habilities"],
                ["projects"],
                ["contact"]
            ];
            $.ajax({
                url:"./php/languages.php",
                type:"POST",
                dataType:"text",
                async : false,
                data: {
                    lang: $('html').attr('lang')
                },
                success:function(msg){
                    self.section = $.parseJSON(msg);
                    self.section = _.toArray(self.section['SECTIONS']);
                }
            });
        },
        toggle: function () {
            var navigationbar = $(".navigationbar");
            if(navigationbar.css("height") != "40px") {
                navigationbar.stop().animate({
                    height: "40px"
                }, 'fast');
            } else {
                navigationbar.stop().animate({
                    height: "60vmax"
                }, 'fast');
            }
        },
        loadMore: function () {
            var scroll = $('body').scrollTop();
            if(scroll >= ($("#mainImage").height() - ($("#mainImage").height()/100)*5)) {
                $(".navigationbarContainer").addClass('fixed');
                $("#hamburger").addClass('fixed');
                $("#mainBody .section").each(function(i){
                    if(scroll >= $(this).offset().top && scroll <= $(this).offset().top + $(this).outerHeight(true)) {
                        if($(".navigationbarContainer .button").eq(i).hasClass("selected") == false) {
                            $(".navigationbarContainer .button.selected").removeClass("selected");
                            $(".navigationbarContainer .button").eq(i).addClass("selected");
                        }
                    }
                });
            }
            else {
                $(".navigationbarContainer").removeClass('fixed');
                $("#hamburger").removeClass('fixed');
                $('.navigationbarContainer a .button.selected').removeClass('selected');
                $('.navigationbarContainer a .button:first').addClass('selected');
            }
        },
        render: function() {
            var navigation = $("<div />", {
                class: "navigationbar"
            });
            for (var i = 0; i < this.info.length; i++) {
                var button = $("<div />", {
                    class: "button",
                    id: "button"+i
                });
                var anchor = $("<a />", {
                    href: "#"+this.info[i]
                });
                var self = this;
                anchor.click(function(event){
                    event.preventDefault();
                    var href = $.attr(this, 'href');
                    $('html, body').animate({
                        scrollTop: $( $(this).attr('href') ).offset().top
                    }, 500, function () {
                        window.location.hash = href;
                    });
                    if($("#hamburger").css("display") != "none") {
                        $(".navigationbar").stop().animate({
                            height: "40px"
                        }, 'fast');
                    }
                });
                var buttonText = $("<p />", {
                    text: this.section[i],
                });
                button.append(buttonText);
                anchor.append(button);
                navigation.append(anchor);
            }

            var mobileMenu = $("<div />", {
                class: "glyphicon glyphicon-menu-hamburger",
                id: "hamburger"
            });
            var self = this;
            mobileMenu.click(function(){
                self.toggle();
            });

            this.$el.append(navigation);
            this.$el.append(mobileMenu);
        }
    });
    return navbar;
})
