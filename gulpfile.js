'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
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

gulp.task('sass', function() {
    return gulp.src('css/sass/main.scss')
        .pipe(plug.sass().on('error', plug.sass.logError))
        .pipe(plug.sass({
            outputStyle: 'compressed'
        }))
        .pipe(plug.rename('main.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('bump', function() {
    return gulp
        .src(['./bower.json', './package.json'])
        .pipe(plug.bump({
            version: args.version
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('index.html', ['htmlhint']);
    gulp.watch('js/**/*.js', ['jshint']);
    gulp.watch('css/sass/*.scss', ['sass']);
});

gulp.task('default', ['htmlhint', 'jshint', 'watch']);