module.exports = {
  entry: './server/server.js',
  target: 'node',
  output: {
    path: __dirname + '/public/js',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};