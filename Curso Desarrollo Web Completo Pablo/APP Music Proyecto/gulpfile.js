const {series, src, dest, watch}= require("gulp");
const sass = require("gulp-sass")(require('sass'));
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");
const concat = require("gulp-concat");

//utilidades CSS
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");

//Utilidades JS
const terser = require("gulp-terser-js");
const rename = require("gulp-rename");

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css(){
    return src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss( [autoprefixer(), cssnano()] ))
    .pipe( sourcemaps.write("."))
    /*para ejecutar multiplesfunciones dentro de postcss
    lo ponemos con sintaxis de arreglo*/
    .pipe(dest("./build/css"))
}

function javascript() {
    return src(paths.js)
    .pipe( sourcemaps.init())
    .pipe( concat("bundle.js"))
    .pipe( terser() )
    .pipe( sourcemaps.write("."))
    .pipe( rename({
        suffix: ".min"
    }) )
    .pipe( dest("./build/js") )
}

function imagenes(){
    return src(paths.imagenes)
        .pipe( imagemin())
        .pipe(dest("./build/img"))
        .pipe( notify( {
            message: 'Imagen Minificada'
        }));
}

function versionWebp () {
    return src(paths.imagenes)
        .pipe( webp())
        .pipe(dest("./build/img"))
        .pipe( notify( {
            message: "Version Webp Lista"
        }));
}

function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.js, javascript);
}

//src/scss/*.scss" = todos los archivos con la extension .scss dentro de scss
//src/scss/*/*.scss" = todos los archivos con la extension .scss de todas las carpetas que esten dentro de scss
//src/scss/**/*.scss = todos los archivos con la extension .scss de todas las carpetas que esten dentro de las carpetas de scss.

exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css, javascript, watchArchivos);
