define(['jquery','Backbone', './experiencesRow'], function($, Backbone, experiencesRow) {
    var expiriences = Backbone.View.extend({
        tagname: "div",
        initialize: function() {
            this.info = [
                [
                    "UANL",
                    "Aug 2011 - Today",
                    "Bachelor - Multimedia and Digital Animation",
                    "The education was mainly C++ programming, but I also learned about SQL, PHP, MVC, OOP and more."
                ],
                [
                    "UANL Highschool #7",
                    "Aug 2009 - Jul 2011",
                    "Highschool",
                    "I graduated highschool, where I realized in my second year of school that I wanted to do something with programming"
                ]
            ];
            this.info2 = [
                [
                    "Milenio",
                    "Feb 2016 - May 2016",
                    "Internship - Web Developer",
                    "I did my first internship at Milenio group. There I learned to apply my knowledge of PHP and javascript and also learned new stuff like synfony, backbonejs, nodejs and how to work in team using github"
                ]
            ];
        },
        render: function() {
            this.education = $("<div />");
            this.career = $("<div />");
            for (var i = 0; i < this.info.length; i++) {
                var row = new experiencesRow({place: this.info[i][0], time: this.info[i][1], degree: this.info[i][2], desc: this.info[i][3]});
                row.render();
                this.education.append(row.$el);
            }
            for (var i = 0; i < this.info2.length; i++) {
                var row = new experiencesRow({place: this.info2[i][0], time: this.info2[i][1], degree: this.info2[i][2], desc: this.info2[i][3]});
                row.render();
                this.career.append(row.$el);
            }
        }
    });
    return expiriences;
})
