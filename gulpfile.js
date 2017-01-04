var gulp        = require('gulp');
var sass        = require('gulp-sass');
var pug         = require('gulp-pug');
var postcss     = require('gulp-postcss');
var errNotify   = require('gulp-notify');

var browserSync = require('browser-sync').create();

var autoprefixer = require('autoprefixer');
var resType = require('postcss-responsive-type');


gulp.task('serve', ['sass', 'pug'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: 'index.html'
        }
    });

    gulp.watch('src/stylesheets/**', ['sass']);
    gulp.watch('src/pugfiles/**', ['pug']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});


gulp.task('sass', function () {
    var processors = [
      autoprefixer,
      resType
    ];
    return gulp.src('src/stylesheets/main.scss')
        .pipe(sass())
        .on('error', errNotify.onError(function(error) {
          return error;
        }))
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/assests/css'))
        .pipe(browserSync.reload({stream:true}));
});


gulp.task('pug', function(){
  return gulp.src('src/pugfiles/index.pug')
  .pipe(pug({
    pretty: true
  }))
  .on('error', errNotify.onError(function(error) {
    return error;
  }))
  .pipe(gulp.dest('dist/'))
  .pipe(browserSync.reload({stream:true}));
});


gulp.task('default', ['serve']);
