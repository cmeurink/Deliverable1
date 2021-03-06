const gulp = require('gulp');
const watch = require('gulp-watch');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('eslint', () => {
    return gulp.src(['**/*.js','!node_modules/**', '!gulpfile.js', '!webpack.config.js', '!Gruntfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint.formatEach('compact', process.stderr));

gulp.task('default', ['eslint',  'sass']);