// IIFE
(function() {
    'use strict'; 
    angular.module('QuizWrapApp')
        .controller('FaqController', FaqController);

    FaqController.$inject = ['FaqService',"HomeService", '$timeout','$state', '$scope'];
    
    function FaqController(FaqService, HomeService, $timeout, $state, $scope, $index) {
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
                });
        })();
        (this.getUserFaqs =()=> {
            const promise = FaqService.getUserFaq();
            promise.then(
                response => {
                    const faqData =  response.data.items;
                    if(faqData) {
                        //If nothing is in the faq list
                    this.categories = {};
                    for(let i of faqData) {
                        if(!this.categories[i.category]){
                        this.categories[i.category] = [];
                        }
                        this.categories[i.category].push(i);
                    };
                }; 
            },
                error => {
                    Materialize.toast("Error|getUserFaqs in FaqController", 1500);
                });
        })();
        this.removeFaq =(item, $index)=>{
            let id = item.id;
            const promise = FaqService.deleteCard(id);
            promise.then(
                response => {
                    Materialize.toast("FAQ Deleted", 1000);
                   let fam = this.categories[this.selectedCategory];
                   fam.splice($index, 1);
                   
                   if(!this.categories[item.category]){
                       this.categories[item.category] = [];
                   };
                   this.categories[item.category].push(item); 
                   console.log(item);
            }, 
                error => {
                    Materialize.toast("Error on Delete", 1500);
                }
            )    
        };
        this.submit =()=> {

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
                    this.getUserFaqs();
                    
                },
                error => {
                    Materialize.toast("Error", 1500);
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
                });
        }
    };
})();
