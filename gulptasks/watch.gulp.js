let gulp = require('gulp');

gulp.task('watch', () => {
  // watch for changes in .html files
  gulp.watch(['src/**/*.html'], gulp.series('html'));

  // watch for changes in .scss files
  gulp.watch('src/css/scss/**/*.scss', gulp.series('styles'));

  // watch for changes in .ts files
  gulp.watch(['src/js/**/*.ts', '!src/js/**/*.min.ts'], gulp.series('webpack'));
});
