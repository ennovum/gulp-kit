'use strict';

var gulp = require('gulp');
var http = require('http');
var ecstatic = require('ecstatic');

function serverTask(root, params) {
    var port = params && params.port || '80';

    return function () {
        var server = http.createServer(ecstatic({
            root: root,
            cache: 'max-age=0, no-cache'
        }));

        server.listen(port)
    };
};

module.exports = serverTask;
