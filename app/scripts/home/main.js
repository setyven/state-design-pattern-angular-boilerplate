define(['angular'], function(angular) {
	'use strict';

	return angular.module('sdp-example.home', [])
		.controller('homeController', ['$scope', '$rootScope', 'roleService', 'adminRoleService', 'publisherRoleService', function($scope, $rootScope, roleService, adminRoleService, publisherRoleService) {
			roleService.setRole($rootScope, publisherRoleService);

			var role = roleService.getRole($rootScope);

			$scope.analytics = role.getDashboardAnalytics($rootScope);

			$scope.switchRole = function() {
				roleService.setRole($rootScope, adminRoleService);
				role = roleService.getRole($rootScope);
				$scope.analytics = role.getDashboardAnalytics($rootScope);
			};
		}]);

});