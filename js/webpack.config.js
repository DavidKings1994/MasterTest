module.exports = {
    entry: {
        main: __dirname + "/public/main.js"
    },
    output: {
        path: __dirname + "/dist/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    resolve: {
        alias: {
            'jquery': __dirname + '/../node_modules/jquery/dist/jquery.js',
            'Backbone': __dirname + '/../node_modules/backbone/backbone.js',
            'underscore': __dirname + '/../node_modules/underscore/underscore.js',
            'bootstrap': __dirname + '/../node_modules/bootstrap/dist/js/bootstrap.js',
        }
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
