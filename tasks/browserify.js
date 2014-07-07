'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var map = require('map-stream');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var opath = require('object-path');

var pkg = require('./../package.json');
var transform = opath.get(pkg, 'browserify.transform', []);

function browserifyTask(src, dest) {
    return function () {
        return gulp.src(src)
            .pipe(map(function (file, done) {
                var bundler = browserify(file.path, {paths: ['./node_modules/', './browser_modules/']});

                for (var i = 0, l = transform.length; i < l; i++) {
                    bundler.transform(transform[i]);
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

                bundler.on('log', log);

                return rebundle();
            }));
    };
};

module.exports = browserifyTask;
