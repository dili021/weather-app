const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [

      {
        test: /\.s[ac]ss/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpe?g$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      title: 'Weather App',
    }),
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['!index.html'] }),
  ],
};