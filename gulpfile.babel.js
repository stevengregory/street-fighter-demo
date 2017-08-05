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
  return gulp.src('src/sass/style.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', () => {
  gulp.watch('src/index.html', ['htmlhint']);
  gulp.watch('src/app/*.js', ['jshint']);
  gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);