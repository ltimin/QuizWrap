// IIFE
(function() {
    'use strict';
    angular.module('QuizWrapApp')
            .controller('MainController', MainController);
MainController.$interject = ['$scope'];
            function MainController ($scope) {
                $(".button-collapse").sideNav();
            };
})();
