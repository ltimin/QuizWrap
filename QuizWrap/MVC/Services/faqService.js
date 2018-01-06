//IIFE
(function () {
    'use strict';
    angular.module('QuizWrapApp')
        .service("FaqService", FaqService);

    const api = "https://pacoima-ypi.azurewebsites.net/api/";
    
    FaqService.$inject = ["$http", "$q"]

    function FaqService($http, $q) {
        //Getting the FAQ tabs
        this.getFaqTabs=()=> {
            const promise = $http({
                method: "GET",
                url: api + "faqcategories",
                withCredentials: true
            })
            .then(
                response => {null
                    // response.data.items.forEach(function (element) {
                    //     console.log(element.name)
                    // })
                },
                error => $q.reject(error.data.message || error.data.errors[0])
                );
            return promise;
        };
        //Submitting FAQ
        this.submitFaq = () => {
            const promise = $http({
                method: "POST",
                url: api + "faqs",
                withCredentials: true,
                data: submitFaqRequest,
            })
            .then(
              null,
                error => $q.reject(error.data.message || error.data.errors[0])
                );
            return promise;
        };
        //Getting User's FAQ
        this.getUserFaq = () => {
            const promise = $http({
                method: "GET",
                url: api + "faqs/user",
                withCredentials: true
            })
            .then(
                null,
                error => $q.reject(error.data.message || error.data.errors[0])
        );
            return promise;
        };
        //Getting User's {id} for edit
        this.getIdUserFaq = () =>{
            const promise = $http({
                method: "GET",
                url: api + "faqs/user",
                withCredentials: true
            })
            .then(
                null,
                error => $q.reject(error.data.message || error.data.errors[0])
                );
            return promise;
        };
        //Logging Out
        this.logOut = () => {
            const promise = $http({
                method: "GET",
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