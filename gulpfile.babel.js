import gulp from 'gulp';
import htmlhint from 'gulp-htmlhint';
import jshint from 'gulp-jshint';
import sass from 'gulp-sass';

gulp.task('htmlhint', () => {
  return gulp.src('src/index.html')
    .pipe(htmlhint())
    .pipe(htmlhint.reporter());
});

gulp.task('jshint', () => {
  return gulp.src('src/app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('sass', () => {
  return gulp.src('src/css/base.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('src/dist'));
});

gulp.task('watch', () => {
  gulp.watch('src/index.html', ['htmlhint']);
  gulp.watch('src/app/*.js', ['jshint']);
  gulp.watch('src/css/*.scss', ['sass']);
});

gulp.task('default', ['htmlhint', 'jshint', 'watch']);