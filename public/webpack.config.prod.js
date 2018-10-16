const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./index.js"],

  output: {
    path: path.resolve(__dirname, "./../dist"),
    filename: "[name].bundle.js"
  },

  plugins: [
    new CleanWebpackPlugin(["./../dist"]),
    new HtmlWebpackPlugin({
      title: "Quora-API",
      filename: "index.html",
      template: "index.html"
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "/public"), // serve your static files from here
    watchContentBase: true, // initiate a page refresh if static content changes
    proxy: [
      // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ["/api"],
        target: "http://localhost:5000", // server and port to redirect to
        secure: false
      }
    ],
    port: 3030 // port webpack-dev-server listens to, defaults to 8080
  }
};
