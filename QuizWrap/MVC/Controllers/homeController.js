// IIFE
(function() {
    'use strict';
    angular.module('QuizWrapApp')
    .controller('HomeController', HomeController);

    HomeController.$inject = ["HomeService"];
    
    function HomeController(HomeService) { 
        const promise = HomeService.getName();
        promise.then(
            response => {
                this.userName = response.data.item.firstName + " " + response.data.item.lastName;
            },
            error => {
                Materialize.toast("Something is wrong with *getName()* in HomeController!!", 2000);
            });           
    };
})();
