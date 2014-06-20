'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var map = require('map-stream');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

function watchifyTask(src, dest, params) {
    var transforms = params && params.transforms || [];

    return function () {
        return gulp.src(src)
            .pipe(map(function (file, done) {
                var bundler = watchify(file.path, {paths: ['./node_modules/', './browser_modules/']});

                for (var i = 0, l = transforms.length; i < l; i++) {
                    bundler.transform(transforms[i]);
                }

                function rebundle() {
                    return bundler.bundle(null, rebundled)
                        .pipe(source(path.basename(file.path)))
                        .pipe(gulp.dest(dest));
                };

                function rebundled(err, result) {
                    if (err) {
                        gutil.beep();
                        errlog(err);
                        throw err;
                    }

                    done();
                };

                function log(msg) {
                    gutil.log(gutil.colors.cyan('watchify'), msg);
                };

                function errlog(err) {
                    gutil.log(gutil.colors.cyan('watchify'), gutil.colors.red(err));
                };

                bundler.on('update', rebundle);
                bundler.on('log', log);

                return rebundle();
            }));
    };
};

module.exports = watchifyTask;
