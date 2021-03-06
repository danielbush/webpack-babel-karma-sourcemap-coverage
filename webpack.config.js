// This webpack file is intened to be used in karma.
// You can also test it using 'npm run webpack'.

var path = require('path');

module.exports = {
  devtool: 'inline-source-map', // inline to work with karma
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015' ]}
      }
    ]
  }
  
};
