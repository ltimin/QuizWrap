// IIFE
(function () {
    'use strict';
    angular.module('QuizWrapApp')
        .controller("RegisterController", RegisterController);

    RegisterController.$inject = ["RegisterService"];

    function RegisterController(RegisterService) {

        this.submit = () => {
            // reset the error message
            this.errorMessage = null;
            // gathering request data
            const registerRequest = {
                firstName: this.fName,
                lastName: this.lName,
                password: this.pword,
                email: this.email
            };
            //making a promise aka response
            const promise = RegisterService.register(registerRequest);

            promise.then(
                response => {
                    window.location = "../2-LogIn Page/login.html";
                    Materialize.toast("Register Successful", 1500);
                },
                error => {
                    Materialize.toast("Error", 1500);
                    this.errorMessage = error;
                });
        };
    };
})();