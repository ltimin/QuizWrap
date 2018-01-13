// IIFE
(function() {
    'use strict';
    angular.module('QuizWrapApp')
            .controller('MainController', MainController)
MainController.$interject = ['HomeService','$scope'];
            
function MainController (HomeService, $scope) {
    
    $scope.$on('User logged in', (event, isLoggedIn) => {
        this.isLoggedIn = true;
});
        const promise = HomeService.getName();
        promise.then(
            response => {
            this.isLoggedIn = true;
                },
            error => {});  
   
                this.loggingOut = () => {
                    const promise = HomeService.logOut();
                    promise.then(
                        response => {
                            Materialize.toast("Log Out Successful", 1000);
                            setTimeout('window.location = "index.html"', 1200);     
                            $(".button-collapse").sideNav();               
                        },              
                        error => {
                            Materialize.toast("Error| loggingOut() in MainController", 1500);
                        });
            };
        };
})();
