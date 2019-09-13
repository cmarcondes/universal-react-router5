// ./webpack.config.client.js
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./app/client.js",
  output: {
    path: path.resolve(__dirname, "dist", "client"),
    filename: "client.bundle.js"
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
  target: "web" //Now the target will be web
};
