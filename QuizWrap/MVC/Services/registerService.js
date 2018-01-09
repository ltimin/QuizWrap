//IIFE
(function () {
    'use strict';
    angular.module('QuizWrapApp')
        .service("RegisterService", RegisterService);

    const api = "https://pacoima-ypi.azurewebsites.net/api/";

    RegisterService.$inject = ["$http", "$q"]

    function RegisterService($http, $q) {
        this.register = (registerRequest) => {
            const promise = $http({
                method: "POST",
                url: api + "users/register/employer",
                data: registerRequest,
                withCredentials: true
            })
            .then(
                null,
                error => $q.reject(error.data.message || error.data.errors[0])
                );
            return promise;
        };
    }

})();