define(['angular'], function(angular) {
	'use strict';

	return angular.module('sdp-example.role', [])
		.factory('roleService', function() {
			var factory = {};
			factory.setRole = function(scope, role) {
				scope.role = role;
			};

			factory.getRole = function(scope) {
				return scope.role;
			};

			return factory;
		})
		.factory('adminRoleService', function() {
			var factory = {};
			factory.getRoleDescription = function() {
				return 'I am the supah admin';
			};

			factory.getDashboardAnalytics = function() {
				return 'This should return 4 metrics and 1 pie chart';
			};

			return factory;
		})
		.factory('publisherRoleService', function() {
			var factory = {};
			factory.getRoleDescription = function() {
				return 'I am publisher';
			};

			factory.getDashboardAnalytics = function() {
				return 'This should return nothing, I don\'t really care';
			};
			return factory;
		})
		.factory('advertiserRoleService', function() {
			var factory = {};
			factory.getRoleDescription = function() {
				return 'I am advertiser';
			};

			factory.getDashboardAnalytics = function() {
				return 'This should return 4 pie charts of nearby advertisement';
			};
			return factory;
		})
		.factory('minorPublisherRoleService', ['publisherRoleService', function(publisherRoleService) {
			var factory = publisherRoleService;

			factory.getRoleDescription = function() {
				return 'I am slightly smaller than a publisher';
			};

			return factory;
		}]);
});

