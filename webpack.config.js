var path = require('path');

module.exports = {
    entry: "./app/components/routes.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: 'jsx-loader?harmony'}
        ]
    }
};