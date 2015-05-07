define(['angular'], function(angular) {
	'use strict';

	return angular.module('sdp-example.role', [])
		.service('roleService', function() {
			this.setRole = function(scope, role) {
				scope.role = role;
			};

			this.getRole = function(scope) {
				return scope.role;
			};
		})
		.service('adminRoleService', function() {
			this.getRoleDescription = function() {
				return 'I am the supah admin';
			};

			this.getDashboardAnalytics = function() {
				return 'This should return 4 metrics and 1 pie chart';
			};
		})
		.service('publisherRoleService', function() {
			this.getRoleDescription = function() {
				return 'I am publisher';
			};

			this.getDashboardAnalytics = function() {
				return 'This should return nothing, I don\'t really care';
			};
		})
		.service('advertiserRoleService', function() {
			this.getRoleDescription = function() {
				return 'I am advertiser';
			};

			this.getDashboardAnalytics = function() {
				return 'This should return 4 pie charts of nearby advertisement';
			};
		});
});

