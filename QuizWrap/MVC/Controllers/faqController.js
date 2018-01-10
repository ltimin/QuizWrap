// IIFE
(function() {
    'use strict'; 
    angular.module('QuizWrapApp')
        .controller('FaqController', FaqController);

    FaqController.$inject = ['FaqService',"HomeService", '$timeout','$state'];
    
    function FaqController(FaqService, HomeService, $timeout, $state) {
        //Materialize JQuery//
        $(".button-collapse").sideNav();
        $('ul.tabs').tabs();
        $('ul.tabs').tabs('select_tab', 'tab_id');
        $('.modal').modal();
        
        (this.getFaq =()=> {
            const promise = FaqService.getFaqCategories();
            promise.then(
                response => {
                   this.faqCategories = response.data.items;
                   $timeout(function(){
                    $('select').material_select();
                   });
                    
                },
                error => {
                    Materialize.toast("Houston, we have a problem!!", 1500);
                    this.errorMessage = error;
                });
        })();

        (this.getUserFaqs =()=> {
            const promise = FaqService.getUserFaq();
            promise.then(
                response => {
                    let fam = response.data.items;
                    fam.sort(function(a,b) {return a['faqCategoryId'] - b['faqCategoryId'] || a['displayOrder'] - b['displayOrder']});
                    this.faqList = fam;
                },
                error => {
                    Materialize.toast("Houston, we have a problem!!", 1500);
                    this.errorMessage = error;
                });
        })();

        this.submit =()=> {
            // intialize the error message
            this.errorMessage = null;
            // gathering request data
            const submitFaqRequest = {
                faqCategoryId: this.category.id,
                displayOrder: this.displayO,
                question: this.question,
                answer: this.answer
            };
            //making a promise aka response
            const promise = FaqService.submitFaq(submitFaqRequest);

            promise.then(
                response => {
                    Materialize.toast("FAQ Posted Successfully", 1000);
                    setTimeout('', 1200);
                },
                error => {
                    Materialize.toast("Error", 1500);
                    this.errorMessage = error;
                });
        };

        this.loggingOut=()=> {
            const promise = HomeService.logOut();
            promise.then(
                response => {
                    Materialize.toast("Log Out Successful", 1000);
                    setTimeout('window.location = "../2-LogIn Page/login.html"', 1200);
                    
                },
                error => {
                    Materialize.toast("Houston, we have a problem!!", 1500);
                    this.errorMessage = error;
                });
        }

    };
})();
