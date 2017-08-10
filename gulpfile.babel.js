import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('sass', () => {
  return gulp.src('src/sass/style.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', () => {
  gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);