// IIFE
(function() {
    'use strict';
    const app = angular.module('QuizWrapApp')
            app.config(RouteSetup);
            
            RouteSetup.$interject = ['$stateProvider'];
            function RouteSetup($stateProvider) {
		$stateProvider.state({
            // route for the home page
                name: 'home',
				templateUrl : '/views/3-Home Page/index.html',
				controller  : 'HomeController'
			});

			// route for the faq page
			$stateProvider.state({
                name: 'faq',
				templateUrl : '../views/4-Faq Page/faq.html',
				controller  : 'FaqController'
			});

			// route for the quizzes page
			$stateProvider.state({
                name: 'quizzes',
				templateUrl : 'views/5-Quizzes Page/quiz.html',
				controller  : 'QuizzesController'
			});
	};
    app.controller('HomeController', HomeController);

    app.controller('FaqController', FaqController);

    HomeController.$inject = ["HomeService"];
    
    function HomeController(HomeService) { 
        const promise = HomeService.getName();
        promise.then(
            response => {
                this.firstName = response.data.item.firstName;
                this.lastName = response.data.item.lastName;
            },
            error => {
                Materialize.toast("Houston, we have a problem!!", 1500);
                this.errorMessage = error;
            });
            
        this.loggingOut = () => {
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
