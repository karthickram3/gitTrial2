var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    target: 'node',
    externals: [nodeExternals()] //to make webpack ignore nodemodules
}