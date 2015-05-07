module.exports = function(config) {
  'use strict';
  config.set({

    basePath: '../',

    frameworks: ['jasmine', 'requirejs'],

    files: [
      { pattern: 'app/scripts/**/*.js', included: false },
      { pattern: 'app/lib/**/*.js', included: false },
      { pattern: 'test/unit/**/*.js', included: false },
      'test/test-main.js'
    ],

    exclude: [
      'app/scripts/main.js'
    ],

    preprocessors: {
      'app/scripts/**/*.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
