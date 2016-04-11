describe('Module: App.example', function() {
    describe('Controller: ExampleCtrl', function() {
        require('angular');
        require('angular-mocks');
        require('./example.js');


        var ExampleCtrl, scope;

        beforeEach(angular.mock.module('App.example'));

        beforeEach(angular.mock.inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ExampleCtrl = $controller('ExampleCtrl', {
                $scope: scope
            });
        }));

        it('should instantiate the controller', function() {
            expect(ExampleCtrl).toBeDefined();
        });

        it('should equal true', function() {
            expect(scope.example).toEqual(true);
        });

        it('should always be true', function() {
            expect(true).toBe(true);
        });
    });
});