const path = require('path');

const environment = process.env.NODE_ENV || 'production';

module.exports = {
  mode: environment,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
