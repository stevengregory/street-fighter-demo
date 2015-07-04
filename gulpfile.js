var gulp = require('gulp'),
    plug = require('gulp-load-plugins')();

gulp.task('htmlhint', function() {
    return gulp.src('index.html')
        .pipe(plug.htmlhint())
        .pipe(plug.htmlhint.reporter());
});

gulp.task('jshint', function() {
    return gulp.src('js/**/*.js')
        .pipe(plug.jshint())
        .pipe(plug.jshint.reporter());
});

gulp.task('watch', function() {
    gulp.watch('index.html', ['htmlhint']);
    gulp.watch('js/**/*.js', ['jshint']);
});

gulp.task('default', ['htmlhint', 'jshint', 'watch']);