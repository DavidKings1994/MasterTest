define(['jquery','Backbone'], function($, Backbone) {
    var ProjectDisplay = Backbone.View.extend({
        tagname: "div",
        className: "ProjectDisplay col-md-4 col-centered",
        initialize: function(parameters) {
            this.projectName = parameters.projectName;
            this.projectDescription = parameters.projectDescription;
            this.projectURL = parameters.projectURL;
            this.projectMainImage = parameters.projectMainImage;
            this.projectSecondaryImage = parameters.projectSecondaryImage;
            this.projectTags = parameters.projectTags;
            var self = this;
            $(window).bind('scroll', function (ev) {
                self.loadMore(ev);
            });
        },
        events: {
	   	   'mouseover' : 'HandleOver',
           'mouseout' : 'HandleOut'
	   	},
        loadMore: function () {
            var scroll = $('body').scrollTop() + $(window).height();
            $(".ProjectContainer .ProjectDisplay").each(function(i){
                if(scroll >= $(this).offset().top) {
                    var scale = Math.min(Math.max((scroll - $(this).offset().top) / $(this).outerHeight(true), 0), 1);
                    console.log(scale);
                    $(this).css('transform',"scale(" + scale + ")");
                    $(this).css('-webkit-transform',"scale(" + scale + ")");
                }
            });
        },
	   	HandleOver: function (event){
            $(this.info).stop().animate({
                opacity: "1"
            }, 'slow');
            $(this.projectName).stop().animate({
                left: "5%"
            }, 'slow');
            $(this.projectDescription).stop().animate({
                left: "5%"
            }, 'slow');
            $(this.projectTags).stop().animate({
                left: "5%"
            }, 'slow');
	   	},
        HandleOut: function(event){
            $(this.info).stop().animate({
                opacity: "0"
            }, 'slow');
            $(this.projectName).stop().animate({
                left: "25%"
            }, 'slow');
            $(this.projectDescription).stop().animate({
                left: "25%"
            }, 'slow');
            $(this.projectTags).stop().animate({
                left: "-15%"
            }, 'slow');
        },
        render: function() {
            var projectUrl = $("<a />", {
                href: this.projectURL
            });
            this.info = $("<div />", {
                css: {
                    "opacity":"0"
                }
            });
            var veil = $("<div />", {
                class: "veil"
            });
            var mainImage = $("<img />", {
                class: "mainImage",
                src: this.projectMainImage
            });
            var secondaryImage = $("<img />", {
                class: "secondaryImage",
                src: this.projectSecondaryImage
            });
            this.projectName = $("<p />", {
                class: "projectName",
                text: this.projectName
            });
            this.projectDescription = $("<p />", {
                class: "projectDescription",
                text: this.projectDescription
            });
            this.projectTags = $("<p />", {
                class: "projectTags",
                text: this.projectTags
            });
            this.info.append(secondaryImage);
            this.info.append(veil);
            this.info.append(this.projectName);
            this.info.append(this.projectDescription);
            this.info.append(this.projectTags);
            projectUrl.append(mainImage);
            projectUrl.append(this.info);
            this.$el.append(projectUrl);
        }
    });
    return ProjectDisplay;
})
