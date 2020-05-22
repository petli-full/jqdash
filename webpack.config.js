const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/jq.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        library: 'jqdash',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.wasm$/,
                exclude: /node_modules/,
                type: 'webassembly/experimental',
            }
        ]
    },
    node: {
        fs: "empty"
    }
};
