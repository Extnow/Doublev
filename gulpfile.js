const gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create(),
  run = require("run-sequence"),
  plumber = require("gulp-plumber");


gulp.task("scss", function () {
  return gulp.src("src/scss/main.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("build/css"));
});


gulp.task("build", function (fn) {
  run("scss", fn);
});

gulp.task("serve", function () {
  browserSync.init({
    server: "."
  });

  gulp.watch("src/scss/**/*.scss", ["scss"]);
  browserSync.watch("*.html").on("change", browserSync.reload);
});

gulp.task("default", function (fn) {
  gulp.start("build", "serve", fn);
});