const path = require('path');

module.exports = {
  entry: './opsi.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'bundle.js',
  },
};