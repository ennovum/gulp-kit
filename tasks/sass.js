'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

function sassTask(src, dest) {
    return function () {
        return gulp.src(src)
            .pipe(sass())
            .pipe(gulp.dest(dest));
    };
};

module.exports = sassTask;
