define(['jquery','Backbone', 'underscore'], function($, Backbone, _) {
    var navbar = Backbone.View.extend({
        tagname: "div",
        className: "navigationbar",
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
                    lang: "es"
                },
                success:function(msg){
                    self.section = $.parseJSON(msg);
                    self.section = _.toArray(self.section['SECTIONS']);
                }
            });
        },
        loadMore: function () {
            var scroll = $('body').scrollTop();
            if(scroll >= ($("#mainImage").height() - ($("#mainImage").height()/100)*5)) {
                $(".navigationbar").addClass('fixed');
                $("#mainBody .section").each(function(i){
                    if(scroll >= $(this).offset().top) {
                        if(!$(".navigationbar .button").eq(i).hasClass('selected')) {
                            $(".navigationbar .button.selected").removeClass("selected");
                            $(".navigationbar .button").eq(i).addClass('selected');
                        }
                    }
                });
            }
            else {
                $(".navigationbar").removeClass('fixed');
                $('.navigationbar a .button.selected').removeClass('selected');
                $('.navigationbar a .button:first').addClass('selected');
            }
        },
        render: function() {
            for (var i = 0; i < this.info.length; i++) {
                var button = $("<div />", {
                    class: "button",
                    id: "button"+i
                });
                var anchor = $("<a />", {
                    href: "#"+this.info[i]
                });
                var self = this;
                anchor.click(function(){
                    $('html, body').animate({
                        scrollTop: $( $(this).attr('href') ).offset().top
                    }, 500);
                });
                var buttonText = $("<p />", {
                    text: this.section[i],
                });
                button.append(buttonText);
                anchor.append(button);
                this.$el.append(anchor);
            }
        }
    });
    return navbar;
})
