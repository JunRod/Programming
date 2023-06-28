const {series, src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const paths = {
    scss : "src/scss/**/*.scss",
}

function css() {
    return src(paths.scss)
    .pipe(sass())
    .pipe(dest("./build/css"))
}
function watchArchivos() {
    watch (paths.scss, css);
}

exports.default = series(watchArchivos);
