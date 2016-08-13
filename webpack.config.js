var path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "static"),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3333,
    path: 'static'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" }
    ]
  }
}
