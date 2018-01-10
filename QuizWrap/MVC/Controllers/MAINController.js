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

                this.loggingOut = () => {
                    const promise = HomeService.logOut();
                    promise.then(
                        response => {
                            Materialize.toast("Log Out Successful", 1000);
                            setTimeout('window.location = "index.html"', 1200);
                            
                        },              
                        error => {
                            Materialize.toast("Houston, we have a problemss!!", 1500);
                        });
                };
            };
})();
