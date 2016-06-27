define(['jquery','Backbone'], function($, Backbone) {
    var skillsRow = Backbone.View.extend({
        tagname: "div",
        className: "col-md-6 col-sm-12 col-xm-12",
        initialize: function(options) {
            this.desc = options.desc;
            this.amount = options.amount;
        },
        events: {
	   	   'mouseover' : 'hover',
           'mouseleave' : 'exit',
	   	},
	   	hover: function (event){
            $(this.$el.find(".starsContainer")).stop().animate({
                letterSpacing: "6px"
            }, 'fast');
            this.$el.css("background", "rgb(245, 245, 245)");
	   	},
        exit: function (event){
            $(this.$el.find(".starsContainer")).stop().animate({
                letterSpacing: "3px"
            }, 'fast');
            this.$el.css("background", "transparent");
	   	},
        render: function() {
            var desc = $("<p />", {
                class: "content",
                text: this.desc,
            });
            var amount = $("<p />", {
                class: "starsContainer",
                css: {
                    "text-align": "right",
                    "font-size": "16px",
                    "letter-spacing": "3px"
                }
            });
            var leftCell = $("<div />", {
                class: "col-md-8 col-sm-8 col-xm-8",
            });
            var rightCell = $("<div />", {
                class: "col-md-4 col-sm-4 col-xm-4",
                css: {
                    "padding-top": "6px"
                }
            });

            var temp = 0;
            for (var i = 0; i < 5; i++) {
                if (temp < this.amount) {
                    var star = $("<span />", {
                        class: "glyphicon glyphicon-star",
                        css: {
                            "color": "#22A39F",
                        }
                    });
                } else {
                    var star = $("<span />", {
                        class: "glyphicon glyphicon-star",
                        css: {
                            "color": "rgb(140,140,140)",
                        }
                    });
                }
                temp++;
                amount.append(star);
            }

            var row = $("<div />", {
                class: "row"
            });

            leftCell.append(desc);
            rightCell.append(amount);
            row.append(leftCell);
            row.append(rightCell);
            this.$el.append(row);
        }
    });
    return skillsRow;
})
