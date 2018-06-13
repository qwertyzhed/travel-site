var gulp = require('gulp'),
postcss = require('gulp-postcss')
autop = require('autoprefixer'),
pcvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssimport, mixins, pcvars, nested, autop]))
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString);
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
