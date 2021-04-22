let gulp = require('gulp'),
  clean = require('gulp-clean');

// clean dist directory
gulp.task('clean', () => {
  return gulp.src('dist/*', { read: false }).pipe(clean());
});

// default task
gulp.task(
  'default',
  gulp.series(
    ['clean', 'html', 'styles', 'webpack', 'watch'],
    () => {}
  )
);

// build
// gulp.task(
//   'build',
//   gulp.series(
//     ['clean', 'html', 'styles', 'webpack-prod', 'images', 'fonts'],
//     (callback) => {
//       callback();
//     }
//   )
// );
