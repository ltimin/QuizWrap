//IIFE
(function () {
    'use strict';
    angular.module('QuizWrapApp')
        .service('LoginService', LoginService);
    
    const api = "https://pacoima-ypi.azurewebsites.net/api/";
    
    LoginService.$inject = ['$http'];

    function LoginService($http) {
        this.login = (loginRequest) => {
            const promise = $http({
                method: "POST",
                url: api + "users/login/force",
                data: loginRequest,
                withCredentials: true
            })
            return promise;
        };
    };
})();