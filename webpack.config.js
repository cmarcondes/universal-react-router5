//./webpack.config.js
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./app/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  target: "node"
};
