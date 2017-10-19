var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);
gulp.task('serve:before',['sass','watch']);
gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});
gulp.task('style',function () {
  gulp.src('./www/css/style.css')
    .pipe(cleanCss())
    .pipe(rename({extname:'min.css'}))
    .pipe(gulp.dest('./www/css/'));
});
gulp.task('concatJS',function () {
  gulp.src('./www/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./www/'))
    .pipe(uglify())
    .pipe(rename({extname:'min,js'}))
    .pipe(gulp.dext('./www/'))
});

gulp.task('watch', ['sass','style'], function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch('./www/style/style.css',['style']);
});
