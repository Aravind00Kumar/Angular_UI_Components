/// <reference path="..\..\..\Scripts\angular.js" />

(function () {
    angular.module('app.components.list', [])
    .directive('uiList', function () {
        return {
            restrict: 'E',
            transclude:true,
            scope: {
                items: "=",
                selected:"="
            },
            templateUrl: '/app/components/list/ui-list-tpl.html',
            link: function (scope, elem, attrs) {
                //scope.items = JSON.parse(attrs.items);
                //scope.selected = attrs.selected;

                scope.selectedItem = function (item) {
                    scope.selected = item;
                }
            }
        };
    });

    angular.module('app.components.list')
    .directive('uiDropdown', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                items: "=",
                selected: "="
            },
            templateUrl: '/app/components/list/ui-list-tpl.html',
            link: function (scope, elem, attrs) {
                //scope.items = JSON.parse(attrs.items);
                //scope.selected = attrs.selected;

                scope.toggleTarget= function (item) {
                    scope.targetOpen = !scope.targetOpen;
                }
            }
        };
    });



    // var target  = templ.find('[transclude-id="${itd}"]');
})();