define(['jquery','Backbone'], function($, Backbone) {
    var downButton = Backbone.View.extend({
        tagname: "div",
        className: "downButton",
        initialize: function() {

        },
        events: {
	   	   'click' : 'goDown'
	   	},
	   	goDown: function (event){
            $('html, body').animate({
                scrollTop: $("#mainImage").height() - $("#mainImage").scrollTop() 
            }, 'slow');
	   	},
        render: function() {
            var text = $("<p />", {
                class: "buttonText",
                text: "v"
            });
            this.$el.append(text);
        }
    });
    return downButton;
})