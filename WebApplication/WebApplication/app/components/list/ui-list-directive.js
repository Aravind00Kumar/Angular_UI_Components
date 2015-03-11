/// <reference path="..\..\..\Scripts\angular.js" />

(function () {
    angular.module('app.components.list', []).directive('uiList', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                items: '=',
                selected: '=',
                orientation:'@'
            },
            templateUrl: '/app/components/list/ui-list-tpl.html',
            link: function (scope, elem, attrs) {
                if (scope.orientation === undefined) {
                    scope.orientation = 'vertical'
                }
                scope.selectedItem = function (item) {
                    scope.selected = item;
                }
            }
        };
    });

    // var target  = templ.find('[transclude-id="${itd}"]');
})();