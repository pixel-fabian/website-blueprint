let gulp = require('gulp');

//copy assets
gulp.task('assets', function(callback){
  return gulp.src(['src/assets/**'])
  .pipe(gulp.dest('dist/assets'));
  callback();
});