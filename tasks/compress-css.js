'use strict';

var gulp = require('gulp');
var minify = require('gulp-minify-css');

function compressCSSTask(src, dest) {
    return function () {
        return gulp.src(src)
            .pipe(minify({keepBreaks:true}))
            .pipe(gulp.dest(dest));
    };
};

module.exports = compressCSSTask;
