'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

function cleanTask(src) {
    return function () {
        return gulp.src(src)
            .pipe(clean({force: true}));
    };
};

module.exports = cleanTask;
