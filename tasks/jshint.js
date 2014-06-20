'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

function jshintTask(src) {
    return function () {
        return gulp.src(src)
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    };
};

module.exports = jshintTask;
