/// <reference path="..\..\..\Scripts\angular.js" />

(function () {

    angular.module('app.components.dropdown',[]).directive('uiDropdown', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            template: '<div class="ui-dropdown" ng-transclude ng-click="toggleTarget()"></div>',
            controller: ['$scope', function ($scope) {
                var vm = this;
                $scope.toggleTarget = function () {
                    vm.targetOpen = !vm.targetOpen;
                }
                vm.targetOpen = false;
            }]
        };
    });

    angular.module('app.components.dropdown').directive('uiTarget', function () {
        return {
            restrict: 'E',
            require: '^uiDropdown',
            transclude: true,
            template: '<div class="ui-target" ng-show="ctrl.targetOpen" ng-transclude></div>',
            link: function (scope, elem, attrs, ctrl) {
                scope.ctrl = ctrl;
            }
        };
    });

    angular.module('app.components.dropdown').directive('uiTrigger', function () {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div class="ui-trigger"><span ng-transclude></span><i style="float:right" class="fa fa-caret-down"></i></div>',
        };
    });



    // var target  = templ.find('[transclude-id="${itd}"]');
})();