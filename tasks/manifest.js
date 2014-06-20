'use strict';

var gulp = require('gulp');
var path = require('path');
var manifest = require('gulp-manifest');

function manifestTask(src, destfile) {
    var filename = path.basename(destfile);
    var dest = path.dirname(destfile);

    return function () {
        return gulp.src(src)
            .pipe(manifest({
                // timestamp: true,
                hash: true,
                network: ['*'],
                dest: dest,
                filename: filename,
                exclude: [filename]
            }))
            .pipe(gulp.dest(dest));
    };
};

module.exports = manifestTask;
