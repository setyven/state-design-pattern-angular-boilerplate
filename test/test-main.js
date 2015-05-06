'use strict';

var allTestFiles = ['angular.mocks'];
// var TEST_REGEXP = /(SSpec)\.js$/i;
var TEST_REGEXP = /(spec|test|Spec)\.js$/i;

var pathToModule = function(path) {
	return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
	if (TEST_REGEXP.test(file)) {
		// Normalize paths to RequireJS module names.
		allTestFiles.push(pathToModule(file));
	}
});

console.log(allTestFiles);

require.config({
	// Karma serves files under /base, which is the basePath from your config file
	baseUrl: '/base/app/scripts',

	packages: ['home', 'role'],

	paths: {
		'angular': '../lib/bower/angular/angular',
		'angular.route': '../lib/bower/angular-route/angular-route',
		'jquery': '../lib/bower/jquery/dist/jquery',
		'test': '../../test',
		'angular.mocks': '../lib/bower/angular-mocks/angular-mocks'
	},

	shim: {
		'angular' : {
			deps: ['jquery'],
			exports: 'angular'
		},
		'angular.route': ['angular'],
		'angular.mocks' : {
			deps: ['angular'],
			exports: 'angular.mock'
		}
	},

	// dynamically load all test files
	deps: allTestFiles,

	// we have to kickoff jasmine, as it is asynchronous
	callback: window.__karma__.start
});
