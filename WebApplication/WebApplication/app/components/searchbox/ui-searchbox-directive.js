/// <reference path="..\..\..\Scripts\angular.js" />

(function () {

    angular.module('app.components.searchbox',[]).directive('uiSearchbox', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            template: '<div class="ui-searchbox"><input type="text" ng-bind></div>',
            controller: ['$scope', function ($scope) {
                var vm = this;
                $scope.toggleTarget = function () {
                    vm.targetOpen = !vm.targetOpen;
                }
                vm.targetOpen = false;
            }]
        };
    });

})();