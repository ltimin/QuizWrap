//IIFE
(function () {
    'use strict';
    angular.module('QuizWrapApp')
        .service("FaqService", FaqService);

    const api = "https://pacoima-ypi.azurewebsites.net/api/";
    
    FaqService.$inject = ["$http"]

    function FaqService($http) {
        //Getting the FAQ tabs
        this.getFaqCategories=()=> {
            const promise = $http({
                method: "GET",
                url: api + "faqcategories",
                withCredentials: true
            })
            return promise;
        };
        //Submitting FAQ
        this.submitFaq = (submitFaqRequest) => {
            const promise = $http({
                method: "POST",
                url: api + "faqs",
                withCredentials: true,
                data: submitFaqRequest,
            })
            return promise;
        };
        //Getting User's FAQ
        this.getUserFaq = () => {
            const promise = $http({
                method: "GET",
                url: api + "faqs/user",
                withCredentials: true
            })
           return promise;
        };

        //Getting User's {id} for edit
        this.getIdUserFaq = () =>{
            const promise = $http({
                method: "GET",
                url: api + "faqs/user",
                withCredentials: true
            })
            return promise;
        };
        //Logging Out
        this.logOut = () => {
            const promise = $http({
                method: "GET",
                url: api + "users/logout",
                withCredentials: true
            })
            return promise;
        };
    }
})();