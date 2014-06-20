'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;

function execTask(command) {
    return function () {
        var proc = exec(command, null, function (err, stdout, stderr) {
            stdout && console.log(stdout);
            stderr && console.log(stderr);
        });
    };
};

module.exports = execTask;
