/*!
 * g3
 * Copyright(c) 2016 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var gulp = require("gulp");
var babel = require("gulp-babel");
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');

gulp.task("clean", () => {
  return gulp.src("dist/*").pipe(clean({ force: true }));
});

gulp.task("default", ['copy1', 'copy1_1',
                      'copy2', 'copy2_1',
                      'copy3', 'copy3_1',
                      'copy4', 'copy4_1',
                      'copy5', 'copy5_1',
                      'copy6', 'copy6_1',
                      'copy7', 'copy7_1', 'copy7_2', 'copy7_3', 'copy7_4', 'copy7_5'], () => {
});

gulp.task("copy1", () => {
  return gulp.src("src/biz/**/*.js")
          .pipe(babel())
          .pipe(uglify({ mangle: { toplevel: true } }))
          .pipe(gulp.dest("dist/biz"));
});

gulp.task("copy1_1", () => {
  return gulp.src("src/biz/package.json")
          .pipe(gulp.dest("dist/biz"));
});

gulp.task("copy2", () => {
  return gulp.src("src/cfg/**/*.js")
          .pipe(babel())
          .pipe(uglify({ mangle: { toplevel: true } }))
          .pipe(gulp.dest("dist/cfg"));
});

gulp.task("copy2_1", () => {
  return gulp.src("src/cfg/package.json")
          .pipe(gulp.dest("dist/cfg"));
});

gulp.task("copy3", () => {
  return gulp.src("src/db/**/*.js")
          .pipe(babel())
          .pipe(uglify({ mangle: { toplevel: true } }))
          .pipe(gulp.dest("dist/db"));
});

gulp.task("copy3_1", () => {
  return gulp.src("src/db/package.json")
          .pipe(gulp.dest("dist/db"));
});

gulp.task("copy4", () => {
  return gulp.src("src/handle/**/*.js")
          .pipe(babel())
          .pipe(uglify({ mangle: { toplevel: true } }))
          .pipe(gulp.dest("dist/handle"));
});

gulp.task("copy4_1", () => {
  return gulp.src("src/handle/package.json")
          .pipe(gulp.dest("dist/handle"));
});

gulp.task("copy5", () => {
  return gulp.src("src/lib/**/*.js")
          .pipe(babel())
          .pipe(uglify({ mangle: { toplevel: true } }))
          .pipe(gulp.dest("dist/lib"));
});

gulp.task("copy5_1", () => {
  return gulp.src("src/lib/package.json")
          .pipe(gulp.dest("dist/lib"));
});

gulp.task("copy6", () => {
  return gulp.src("src/model/**/*.js")
          .pipe(babel())
          .pipe(uglify({ mangle: { toplevel: true } }))
          .pipe(gulp.dest("dist/model"));
});

gulp.task("copy6_1", () => {
  return gulp.src("src/model/package.json")
          .pipe(gulp.dest("dist/model"));
});

gulp.task("copy7", () => {
  return gulp.src(["src/u/**/*.js", "!src/u/node_modules/**/*"])
          .pipe(babel())
          .pipe(uglify({ mangle: { toplevel: true } }))
          .pipe(gulp.dest("dist/u"));
});

gulp.task("copy7_1", () => {
  return gulp.src(["src/u/**/*.html", "!src/u/node_modules/**/*"])
          .pipe(gulp.dest("dist/u"));
});

gulp.task("copy7_2", () => {
  return gulp.src(["src/u/**/*.css", "!src/u/node_modules/**/*"])
          .pipe(gulp.dest("dist/u"));
});

gulp.task("copy7_3", () => {
  return gulp.src(["src/u/**/*.ico", "!src/u/node_modules/**/*"])
          .pipe(gulp.dest("dist/u"));
});

gulp.task("copy7_4", () => {
  return gulp.src(["src/u/run.*", "!src/u/node_modules/**/*"])
          .pipe(gulp.dest("dist/u"));
});

gulp.task("copy7_5", () => {
  return gulp.src(["src/u/package.json", "!src/u/node_modules/**/*"])
          .pipe(gulp.dest("dist/u"));
});
