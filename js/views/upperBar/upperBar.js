define(['jquery','Backbone'], function($, Backbone) {
    var upperBar = Backbone.View.extend({
        tagname: "div",
        className: "upperBar",
        initialize: function(options) {
            this.text = options.text;
        },
        events: {
	   	   'click' : 'descargar'
	   	},
	   	descargar: function (event){
            console.log("click");
	   	},
        render: function() {
            var text = $("<p />", {
                class: "generalText",
                text: this.text,
                css: {
                    "display": "inline-block",
                    "margin": "auto",
                    "text-align": "center",
                    "vertical-align": "middle",
                    "width": "100%",
                    "height": "100%"
                }
            });
            this.$el.append(text);
        }
    });
    return upperBar;
})
