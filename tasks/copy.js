'use strict';

var gulp = require('gulp');

function copyTask(src, dest) {
    return function () {
        return gulp.src(src)
            .pipe(gulp.dest(dest));
    };
};

module.exports = copyTask;
