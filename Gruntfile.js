/*
 * grunt-iconfonts
 * https://github.com/ianhorst/grunt-iconfonts
 *
 * Copyright (c) 2015 Ian Horst
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      test: ['tmp']
    },

    iconfonts: {
      icomoon: {
        options: {
          src: 'test/fixtures/icomoon.zip',
          dest: {
            css: 'tmp/styles/_icons.scss',
            fonts: 'tmp/fonts'
          }
        }
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }


  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'iconfonts', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};