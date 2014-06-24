'use strict';

module.exports = {
    server: require('./tasks/server.js'),
    browserify: require('./tasks/browserify.js'),
    watchify: require('./tasks/watchify.js'),
    sass: require('./tasks/sass.js'),
    watch: require('./tasks/watch.js'),
    clean: require('./tasks/clean.js'),
    copy: require('./tasks/copy.js'),
    replace: require('./tasks/replace.js'),
    compressJS: require('./tasks/compress-js.js'),
    compressCSS: require('./tasks/compress-css.js'),
    imagemin: require('./tasks/imagemin.js'),
    manifest: require('./tasks/manifest.js'),
    jshint: require('./tasks/jshint.js'),
    exec: require('./tasks/exec.js')
};
