//IIFE
(function () {
    'use strict';
    angular.module('QuizWrapApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ["LoginService", ];

    function LoginController(LoginService) {
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
                    setTimeout('window.location = "../3-Home Page/index.html"', 1200);
                },
                error => {
                    Materialize.toast("Houston, we have a problem!!", 1500);
                    this.errorMessage = error;
                });
        };
    };
})();