define(['app', 'angular.mocks'], function () {
	'use strict';

	beforeEach(module('sdp-example.home'));

	describe('Home controller', function() {
		beforeEach(inject(function($controller, $rootScope, _roleService_, _adminRoleService_, _publisherRoleService_) {
			this.scope = {};
			this.rootScope = $rootScope;
			this.roleService = _roleService_;
			this.adminRoleService = _adminRoleService_;
			this.publisherRoleService = _publisherRoleService_;
			this.controller = $controller;
		}));

		it('should assign role to publisher', function() {
			this.controller('homeController', {
				$scope: this.scope,
				$rootScope: this.rootScope
			});
			expect(this.rootScope.role).toBeDefined();
			expect(this.rootScope.role).toBe(this.publisherRoleService);
		});

		it('should load properly for dashboard to scope', function() {
			this.controller('homeController', {
				$scope: this.scope,
				$rootScope: this.rootScope
			});

			expect(this.scope.analytics).toBeDefined();
			expect(this.scope.analytics).toBe('This should return nothing, I don\'t really care');
		});

		describe('Role switch', function() {
			it('should be defined', function() {
				this.controller('homeController', {
					$scope: this.scope,
					$rootScope: this.rootScope
				});

				expect(this.scope.switchRole).toBeDefined();
			});

			it('should load properly for dashboard scope upon role changing', function() {
				this.controller('homeController', {
					$scope: this.scope,
					$rootScope: this.rootScope
				});
				this.scope.switchRole(this.rootScope, this.adminRoleService);

				expect(this.rootScope.role).toBe(this.adminRoleService);
				expect(this.scope.analytics).toBe('This should return 4 metrics and 1 pie chart');
			});
		});

	});
});
