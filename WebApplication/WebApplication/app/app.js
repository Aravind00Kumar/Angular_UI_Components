/// <reference path="..\Scripts\angular.js" />

(function () {
    // application startup module
    angular.module('app', ['app.components'])

        .controller('AppController',['$scope', function ($scope) {

            $scope.areas = {
                list: ['Google', 'Yahoo', 'MSN', 'Altavista'],
                current: 'Google'
            }

            $scope.apps = {
                list: ['C#', 'Java', 'JavaScript', 'PHP'],
                current: 'Java'
            }

            $scope.searchQuery = '';

        }]);


    

})();
