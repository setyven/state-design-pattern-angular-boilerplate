define(['app', 'angular.mocks'], function () {
	'use strict';

	beforeEach(module('sdp-example.role'));

	describe('Role service', function() {
		beforeEach(inject(function(_roleService_) {
			this.roleService = _roleService_;
		}));
		
		it('should be defined', function() {
			expect(this.roleService).toBeDefined();
		});

		describe('Role setter', function() {
			it('should be defined', function() {
				expect(this.roleService.setRole).toBeDefined();
			});

			it('should set role to scope', function() {
				var scope = {};
				this.roleService.setRole(scope, 'aRole');
				expect(scope.role).toBe('aRole');
			});
		});

		describe('Role getter', function() {
			it('should be defined', function() {
				expect(this.roleService.getRole).toBeDefined();
			});

			it('should get role from scope', function() {
				var scope = { role: 'myRole' };
				var role = this.roleService.getRole(scope);

				expect(role).toBe('myRole');
			});
		});
	});

});
