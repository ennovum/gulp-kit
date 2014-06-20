'use strict';

var gulp = require('gulp');

function watchTask(src, params) {
    var types = params && params.types || ['added', 'changed', 'deleted'];
    var tasks = params && params.tasks || [];

    return function () {
        gulp.run.apply(this, tasks);

        var watcher = gulp.watch(src, {errLogToConsole: true}, function (event) {
            if (~types.indexOf(event.type)) {
                gulp.run.apply(gulp, tasks);
            }
        });
    };
};

module.exports = watchTask;
