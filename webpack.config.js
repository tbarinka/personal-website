const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: {
    index: './src/index.js',
    'task-organizer': './src/task-organizer.js',
    javascript: './src/javascript.js',
    battleship: './src/battleship.js',
    philosophy: './src/philosophy.js'
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
    new CopyPlugin({
      patterns: [
        { from: "src/site-contents/attachments/plato-virtue-law.docx", to: "attachments" },
        { from: "src/site-contents/attachments/barinka_aesthetics.docx", to: "attachments" },
      ],
    }),
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
    new HtmlWebpackPlugin({
      template: './src/philosophy.html',
      inject: true,
      chunks: ['philosophy'],
      filename: 'philosophy.html'
    }),
      new HtmlWebpackPlugin({
      template: './src/teaching.html',
      inject: true,
      chunks: ['teaching'],
      filename: 'teaching.html'
    }),
    new CleanWebpackPlugin(['dist'])   
  ]
};