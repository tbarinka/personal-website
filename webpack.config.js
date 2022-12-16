const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    index: './src/index.js',
    'task-organizer': './src/task-organizer.js',
    javascript: './src/javascript.js',
    battleship: './src/battleship.js'
  },
  devtool: 'inline-source-map',
  //output: {
    //filename: 'main.js',
    //path: path.resolve(__dirname, 'dist'),
  //},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        chunks: ['index'],
        filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/task-organizer.html',
      inject: true,
      chunks: ['task-organizer'],
      filename: 'task-organizer.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/javascript.html',
      inject: true,
      chunks: ['javascript'],
      filename: 'javascript.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/battleship.html',
      inject: true,
      chunks: ['battleship'],
      filename: 'battleship.html'
    }),
    new CleanWebpackPlugin(['dist'])   
  ]
};