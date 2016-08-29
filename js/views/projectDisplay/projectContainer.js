define(['jquery','Backbone', 'underscore', './projectDisplay'], function($, Backbone, _, ProjectDisplay) {
    var ProjectContainer = Backbone.View.extend({
        tagname: "div",
        className: "ProjectContainer col-md-12",
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
                    self.info = _.toArray($.parseJSON(msg)['PROJECTS_CONTENT']);
                }
            });
        },
	   	render: function() {
            for (var i = 0; i < _.size(this.info); i++) {
                var row = new ProjectDisplay({
                    projectName: this.info[i]['NAME'],
                    projectDescription: this.info[i]['DESCRIPTION'],
                    projectTags: this.info[i]['TAGS'],
                    projectURL: this.info[i]['URL'],
                    projectMainImage: this.info[i]['MAIN_IMAGE'],
                    projectSecondaryImage: this.info[i]['SECUNDARY_IMAGE']
                });
                row.render();
                this.$el.append(row.$el);
            }
        }
    });
    return ProjectContainer;
})
