let gulp = require('gulp'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  cssmin = require('gulp-cssnano'),
  normalize = require('node-normalize-scss');

// Options
const sassOptions = {
  outputStyle: 'expanded',
  includePaths: normalize.includePaths
};

const prefixerOptions = {
  browsers: ['last 2 versions']
};

const paths = {
  css:        './src/css',
  cssmin:     './dist/css',
  sourcemaps: './maps',
  sass:       './src/css/scss/**/*.scss',
  sassFile:   './src/css/scss/style.scss',
 };

/*
 * compile sass
 * inkl. autoprefixer, normalize and sourcemaps
 */
gulp.task('styles', function() {
	return gulp.src(paths.sassFile)
    .pipe(sourcemaps.init())
		.pipe(sass(sassOptions))
		.on('error', function(errorMsg) {
			console.log(errorMsg.toString());
			this.emit('end');
		})
		.pipe(prefix(prefixerOptions))
		.pipe(rename('style.css'))
		.pipe(gulp.dest(paths.css))
		.pipe(cssmin())
		.pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write(paths.sourcemaps))
		.pipe(gulp.dest(paths.cssmin))
});