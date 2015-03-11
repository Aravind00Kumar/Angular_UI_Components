/// <reference path="..\..\Scripts\angular.js" />

(function () {
    // application startup module
    var module = angular.module('app.components',
        [
            'app.components.list',
            'app.components.dropdown',
            //'app.components.searchbox',
        ]);

    //module.constant('PATH', {
    //    'dropdown':'/app/components/dropdown/'
    //});


})();
