let gulp = require('gulp');

//copy HTML
gulp.task('html', function(callback){
  return gulp.src(['src/**/*.html'])
  .pipe(gulp.dest('dist/'));
  callback();
});