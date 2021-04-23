let gulp = require('gulp'),
  clean = require('gulp-clean');

// clean dist directory
gulp.task('clean', () => {
  return gulp.src('dist/*', { read: false }).pipe(clean());
});

// default task, run for development
gulp.task(
  'default',
  gulp.series(
    ['clean', 'html', 'styles', 'webpack', 'assets', 'watch'],
    () => {}
  )
);

// build for production
gulp.task(
  'build',
  gulp.series(
    ['clean', 'html', 'styles', 'webpack-prod', 'assets'],
    (callback) => {
      callback();
    }
  )
);
