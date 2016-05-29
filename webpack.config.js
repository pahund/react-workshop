const webpack = require("webpack");

module.exports = {
    devtool: "#cheap-module-eval-source-map",
    entry: "./src/index.js",
    output: {
        path: "./build",
        filename: "bundle.js",
    }
}
