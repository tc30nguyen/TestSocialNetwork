module.exports = {
  entry: './server/server.js',
  target: 'node',
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};