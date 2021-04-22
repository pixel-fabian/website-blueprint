let gulp = require('gulp'),
  webpack = require('webpack');

// Use webpack to bundle JS and compile TS
// development env
gulp.task('webpack', (callback) => {
  webpack(require('../webpack.config'), (err, stats) => {
    if (err) {
      throw err;
    }
    console.log(stats.toString());
    callback();
  });
});

// Use webpack to bundle JS and compile TS
// production ready
gulp.task('webpack-prod', (callback) => {
  webpack(require('../webpack.config.prod'), (err, stats) => {
    if (err) {
      throw err;
    }
    console.log(stats.toString());
    callback();
  });
});
