module.exports = {
  entry: ['./src/app.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'css-loader' },
      { test: /\.jsx$/, loader: 'babel-loader', query: {presets:['es2015', 'react']} }
    ]
  }
};
