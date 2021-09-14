// webpack.config.js
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    entry: [
      'regenerator-runtime/runtime.js',
      './js/popup.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts.js',
  },
  plugins: [new ESLintPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        },
      },
    ],
  },
};
