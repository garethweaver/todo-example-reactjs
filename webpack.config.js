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
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
