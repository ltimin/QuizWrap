//IIFE
(function () {
    'use strict';
    angular.module('QuizWrapApp')
        .service("HomeService", HomeService);
    
    const api = "https://pacoima-ypi.azurewebsites.net/api/";
    
    HomeService.$inject = ["$http"]

    function HomeService($http) {
        this.getName = () => {
            const promise = $http({
                method: "GET",
                url: api + "people/currentuser",
                withCredentials: true
            })
            return promise;
        };

        this.logOut = () => {
            const promise = $http({
                method: 'GET',
                url: api + "users/logout",
                withCredentials: true
            })
            return promise;
        };
    }
})();