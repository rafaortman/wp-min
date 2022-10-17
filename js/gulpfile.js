var gulp = require("gulp"),
    sass = require("gulp-sass"),
//  sass = require('gulp-sass')(require('sass')),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

var paths = {
    scss: {
        src: "../scss/**/*.scss",
        dest: "../"
    }
};

function scss() {
    return (
        gulp
        .src(paths.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass()).on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(browserSync.stream())
    );
}

function noSrcMap() {
    return (
        gulp
        .src(paths.scss.src)
        .pipe(sass()).on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest(paths.scss.dest))
    );
}

function reload() {
    browserSync.reload();
}

function watch() {
    scss();
    browserSync.init({
        //O proxy deve ser alterado para a pasta do projeto
        proxy: "localhost/",
        port: 3000
    });
    gulp.watch(paths.scss.src, scss)
    gulp.watch("../**/*.php").on('change', reload);
    gulp.watch("../**/*.js").on('change', reload);
}

exports.default = watch
exports.scss = scss
exports.noSrcMap = noSrcMap
