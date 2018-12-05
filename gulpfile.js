var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
gulp.task("sass", function () {
    return gulp.src("./src/scss/*.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./src/css"));
});
gulp.task("watch", function () {
    gulp.watch("./src/scss/*.scss",  ["sass"]);
});