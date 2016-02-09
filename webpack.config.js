var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    "app": "./app/main.jsx"
  },
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
    ],
    noParse: [ path.join(__dirname, 'node_modules', 'bundles') ]
  }
};
