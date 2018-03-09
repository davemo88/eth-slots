module.exports = {
  context: __dirname + "/src",
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: "assets/",
    filename: 'eth-slots.bundled.js',
    libraryTarget: 'var',
    library: 'slots',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['env'],
        },
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      }
    ],
  },
  externals: {
    "THREE": "THREE",
  },
};
