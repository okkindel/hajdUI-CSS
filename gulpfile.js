const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildDev() {
  return src("src/**/*.scss").pipe(sass()).pipe(dest("dist"));
}

function buildProd() {
  return src("src/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("dist"));
}

function watchDev() {
  watch(["src/**/*.scss"], buildDev);
}

exports["build-dev"] = buildDev;
exports["build-prod"] = buildProd;
exports["watch"] = watchDev;
