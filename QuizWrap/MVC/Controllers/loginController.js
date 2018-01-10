//IIFE
(function () {
    'use strict';
    angular.module('QuizWrapApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService','$state', '$scope'];

    function LoginController(LoginService, $state, $scope) {
        this.pword = "#1groceryeate";
        this.email = "kevingates@eb.com";

        this.submit = () => {
            const loginRequest = {
                email: this.email,
                password: this.pword
            };
            const promise = LoginService.login(loginRequest);

            promise.then(
                response => {
                    Materialize.toast("Login Successful!", 1000);
                    $scope.$emit('User logged in', this.userName);
                    $state.go('home');
                },
                error => {
                    Materialize.toast("Houston, we have a problems!!", 1500);
                });
        };
    };
})();