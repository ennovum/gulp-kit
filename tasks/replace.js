'use strict';

var gulp = require('gulp');
var replace = require('gulp-batch-replace');

function replaceTask(src, dest, match, replacement) {
    return function () {
        return gulp.src(src)
            .pipe(replace([[match, replacement]]))
            .pipe(gulp.dest(dest));
    };
};

module.exports = replaceTask;
