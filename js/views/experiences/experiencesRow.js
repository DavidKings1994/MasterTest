define(['jquery','Backbone'], function($, Backbone) {
    var expiriencesRow = Backbone.View.extend({
        tagname: "div",
        initialize: function(options) {
            this.place = options.place;
            this.time = options.time;
            this.degree = options.degree;
            this.desc = options.desc;
        },
        render: function() {
            var place = $("<p />", {
                class: "content",
                text: this.place,
                css: {
                    "font-weight": "bold"
                }
            });
            var time = $("<p />", {
                class: "content",
                text: this.time
            });
            var degree = $("<p />", {
                class: "content",
                text: this.degree,
                css: {
                    "font-weight": "bold"
                }
            });
            var desc = $("<p />", {
                class: "content",
                text: this.desc
            });

            var leftCell = $("<div />", {
                class: "col-md-4",
            });
            var rightCell = $("<div />", {
                class: "col-md-8",
            });
            var row = $("<div />", {
                class: "row",
                css: {
                    "margin-bottom": "30px"
                }
            });

            leftCell.append(place);
            leftCell.append(time);
            rightCell.append(degree);
            rightCell.append(desc);
            row.append(leftCell);
            row.append(rightCell);
            this.$el.append(row);
        }
    });
    return expiriencesRow;
})
