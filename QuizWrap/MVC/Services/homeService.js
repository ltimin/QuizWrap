//IIFE
(function () {
    'use strict';
    angular.module('QuizWrapApp')
        .service("HomeService", HomeService);
    
    const api = "https://pacoima-ypi.azurewebsites.net/api/";
    
    HomeService.$inject = ["$http", "$q"]

    function HomeService($http, $q) {
        this.getName = () => {
            const promise = $http({
                method: "GET",
                url: api + "people/currentuser",
                withCredentials: true
            })
                .then(
                null,
                error => $q.reject(error.data.message || error.data.errors[0])
                );
            return promise;
        };

        this.logOut = () => {
            const promise = $http({
                method: 'GET',
                url: api + "users/logout",
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