'use strict';

var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    args = require('yargs').argv,
    source = require('vinyl-source-stream'),
    plug = require('gulp-load-plugins')();

gulp.task('htmlhint', function() {
    return gulp.src('src/index.html')
        .pipe(plug.htmlhint())
        .pipe(plug.htmlhint.reporter());
});

gulp.task('jshint', function() {
    return gulp.src('src/app/*.js')
        .pipe(plug.jshint())
        .pipe(plug.jshint.reporter());
});

gulp.task('sass', function() {
    return gulp.src('src/css/base.scss')
        .pipe(plug.sass().on('error', plug.sass.logError))
        .pipe(plug.sass({
            outputStyle: 'compressed'
        }))
        .pipe(plug.rename('main.min.css'))
        .pipe(gulp.dest('src/dist'));
});

gulp.task('bundle', function() {
    browserify({
        entries: 'src/app/entrance.js'
    })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('src/dist'));
});

gulp.task('bump', function() {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(plug.bump({
            version: args.version
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('src/index.html', ['htmlhint']);
    gulp.watch('src/app/*.js', ['jshint', 'bundle']);
    gulp.watch('src/css/*.scss', ['sass']);
});

gulp.task('default', ['htmlhint', 'jshint', 'watch']);