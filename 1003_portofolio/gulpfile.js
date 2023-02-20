// Initialize modules
// const {gulp} = require('gulp');
const {
    src,dest,watch,series,parallel
} = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

// File path variable
const files = {
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/js/**/*.js',
}

// sass Pipeline on Build
function scssTask(){
    return src(files.scssPath)                          // get file on path
        .pipe(sourcemaps.init())                        // combine file
        .pipe(sass())                                   // compile sass to css
        .pipe(postcss([ autoprefixer(), cssnano() ]))   // css prettify
        .pipe(sourcemaps.write("."))                    // write
        .pipe(dest("dist"))                             // save to folder dist
}

// js Pipeline on Build
function jsTask(){
    return src(files.jsPath)                            // get file on path
        .pipe(uglify())                                 // compress text
        .pipe(dest("dist"))                             // save to folder dist
}

// Cachebusting task
const latest = new Date().getTime();
function cacheBustingTask(){
    return src(['index.html'])                              // get file on path
        .pipe(replace(/version=\d+/g,'version='+latest))    // change index.html to use latest version on new compiled js 
                                                            // Browser will fetch new js/css if version path is changed
                                                            // (<script src="dist/all.js?version=123"></script>)
        .pipe(dest("."))                                    // save to folder dist
}

// Watch task  (Nodemon alternative)
function watchTask(){
    watch([files.scssPath, files.jsPath],parallel(scssTask,jsTask))                              // save to folder dist
}

// Default task
exports.default = series(
    parallel(scssTask,jsTask),
    cacheBustingTask,
    watchTask
)


