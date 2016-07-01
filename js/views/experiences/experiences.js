define(['jquery','Backbone', 'underscore', './experiencesRow'], function($, Backbone, _, experiencesRow) {
    var expiriences = Backbone.View.extend({
        tagname: "div",
        initialize: function() {
            var self = this;
            $.ajax({
                url:"./php/languages.php",
                type:"POST",
                dataType: "text",
                async : false,
                data: {
                    lang: $('html').attr('lang')
                },
                success:function(msg){
                    self.info = _.toArray($.parseJSON(msg)['EXPERIENCE_EDUCATIONS_CONTENT']);
                    self.info2 = _.toArray($.parseJSON(msg)['EXPERIENCE_CAREERS_CONTENT']);
                }
            });
        },
        render: function() {
            this.education = $("<div />");
            this.career = $("<div />");
            for (var i = 0; i < _.size(this.info); i++) {
                var row = new experiencesRow({
                    place: this.info[i]['PLACE'],
                    time: this.info[i]['TIME'],
                    degree: this.info[i]['DEGREE'],
                    desc: this.info[i]['DESC']
                });
                row.render();
                this.education.append(row.$el);
            }
            for (var i = 0; i < _.size(this.info2); i++) {
                var row = new experiencesRow({
                    place: this.info2[i]['PLACE'],
                    time: this.info2[i]['TIME'],
                    degree: this.info2[i]['DEGREE'],
                    desc: this.info2[i]['DESC']
                });
                row.render();
                this.career.append(row.$el);
            }
        }
    });
    return expiriences;
})
