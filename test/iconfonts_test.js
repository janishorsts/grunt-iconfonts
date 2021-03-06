'use strict';

var grunt = require('grunt');

exports.iconfonts = {
  css: function (test) {
    var actual = grunt.file.read('tmp/styles/_icons.scss');
    var expected = grunt.file.read('test/expected/styles/_icons.scss');

    test.equal(actual, expected, 'should be imported with correct fonts base url');
    test.done();
  },
  fonts: function (test) {
    var extensions = ['woff', 'ttf', 'svg', 'eot'];

    extensions.forEach(function (ext) {
      var actual = grunt.file.read('tmp/fonts/icomoon.' + ext);
      var expected = grunt.file.read('test/expected/fonts/icomoon.' + ext);

      test.equal(actual, expected, 'should be imported');
    });

    test.done();
  },
  zip: function (test) {
    var zipFiles = grunt.file.expand({cwd: 'tmp'}, '*.zip');

    test.equal(zipFiles.length, 1, 'should contain single zip file');

    var isArchivedZip = /icomoon\.\d{8}-\d{6}\.zip/.test(zipFiles[0]);
    test.ok(isArchivedZip, 'should match archived filename "<name>.<YYYYMMDD-HHMMSS>.zip", actual filename "' + zipFiles[0] + '"');
    test.done();

  }
};