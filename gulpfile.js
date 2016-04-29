var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('default', function() {
  sass();
});

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});

