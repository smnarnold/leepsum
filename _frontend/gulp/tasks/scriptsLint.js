var gulp         = require('gulp');
var eslint       = require('gulp-eslint');
var handleErrors = require('../lib/handleErrors');
var path         = require('path');

var paths = {
    src: [
        path.join(global.paths.assets.src, 'js/**/*.js'),
        '!node_modules/**'
    ],
};

var scriptsLintTask = function () {

};

gulp.task('scriptsLint', scriptsLintTask);
module.exports = scriptsLintTask;