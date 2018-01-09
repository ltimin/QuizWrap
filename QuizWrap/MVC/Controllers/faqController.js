// IIFE
(function() {
    'use strict'; 
    angular.module('QuizWrapApp')
        .controller('FaqController', FaqController);

    FaqController.$inject = ['FaqService',"HomeService", '$timeout'];
    
    function FaqController(FaqService, HomeService, $timeout) {
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
                //    this.userQuestion = response.data.items.question;
                //    this.userAnswer =  response.data.items.answer;
                //    this.userCategory = response.data.items.category;

                //    console.log(response.data.items)
                //    $timeout(function(){
                //     $('select').material_select();
                //    });
                    
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

//******************************************This is for functionality populating the name which can be done later */


        // (this.getUser = () => {
        // const promise = HomeService.getName();
        // promise.then(
        //     response => {
        //         this.firstName = response.data.item.firstName;
        //         this.lastName = response.data.item.lastName;
        //     },
        //     error => {
        //         Materialize.toast("Houston, we have a problem!!", 1500);
        //         this.errorMessage = error;
        //     });
        // })();