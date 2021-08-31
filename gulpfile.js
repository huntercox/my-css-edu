const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function styles() {
  return gulp.src('./*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./*.scss', styles);
  // gulp.watch('./*.php').on('change', browserSync.reload);
  // gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.styles = styles;
exports.watch = watch;