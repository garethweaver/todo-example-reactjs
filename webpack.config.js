module.exports = {
  entry:   './src',
  debug:   true,
  devtool: 'eval',

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        include: /src/,
        loaders: ['babel']
      },
      {
        test:    /\.css$/,
        loader: 'style!css!postcss?browsers=last 2 versions'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
