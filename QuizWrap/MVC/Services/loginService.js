//IIFE
(function () {
    'use strict';
    angular.module('QuizWrapApp')
        .service('LoginService', LoginService);
    
    const api = "https://pacoima-ypi.azurewebsites.net/api/";
    
    LoginService.$inject = ['$http', '$q'];

    function LoginService($http, $q) {
        this.login = (loginRequest) => {
            const promise = $http({
                method: "POST",
                url: api + "users/login/force",
                data: loginRequest,
                withCredentials: true
            })
                .then(
                null,
                error => $q.reject(error.data.message || error.data.errors[0])
                );
            return promise;
        };
    };
})();