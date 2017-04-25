var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    path: path.resolve(__dirname, './asset'),
    filename: 'js/result.js',
  },
  watch: true,
  module:{
      loaders:[
        {
          test:/\.jsx|.js$/,
          exclude:/node_modules/,
          loader:'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      ]
    }
};