define(['jquery','Backbone', './skillRow'], function($, Backbone, skillRow) {
    var expiriences = Backbone.View.extend({
        tagname: "div",
        initialize: function() {
            this.info = [
                ["C++",5],
                ["C#",5],
                ["Java",5],
                ["HTML",5],
                ["CSS",5],
                ["Bootstrap",5],
                ["Javascript",5],
                ["Jquery",5],
                ["MVC Pattern",5],
                ["Object Oriented Programming",5],
                ["Singleton Pattern",5],
                ["Backbone",4],
                ["SQL",4],
                ["MySQL",4],
                ["AngularJS",4],
                ["PHP",3],
                ["Synfony",3],
                ["ElasticSearch",2],
            ];
            this.info2 = [
                ["Spanish (mother tongue)",5],
                ["English",4],
            ];
            this.info3 = [
                ["Nodejs",5],
                ["Webpack",5],
                ["Git",5],
                ["Subversion",5],
                ["Atom",5],
                ["Sublime Text",5],
                ["Windows",5],
                ["MS Office",5],
                ["Visual Studio",5],
                ["SQL Server 2008 R2",5],
                ["MySQL Workbench 6.0",5],
                ["Netbeans",5],
                ["Eclipse",4],
                ["Mac",4],
                ["FileZilla",3],
                ["Adobe Photoshop",2],
            ];
        },
        render: function() {
            this.skills = $("<div />", {
                class: "row"
            });
            this.languages = $("<div />", {
                class: "row"
            });
            this.tools = $("<div />", {
                class: "row"
            });
            for (var i = 0; i < this.info.length; i++) {
                var row = new skillRow({desc: this.info[i][0], amount: this.info[i][1]});
                row.render();
                this.skills.append(row.$el);
            }
            for (var i = 0; i < this.info2.length; i++) {
                var row = new skillRow({desc: this.info2[i][0], amount: this.info2[i][1]});
                row.render();
                this.languages.append(row.$el);
            }
            for (var i = 0; i < this.info3.length; i++) {
                var row = new skillRow({desc: this.info3[i][0], amount: this.info3[i][1]});
                row.render();
                this.tools.append(row.$el);
            }
        }
    });
    return expiriences;
})
