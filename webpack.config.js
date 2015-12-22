module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/static',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
