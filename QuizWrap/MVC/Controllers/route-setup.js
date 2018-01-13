// IIFE
(function() {
    'use strict';
    const app = angular.module('QuizWrapApp')
            app.config(RouteSetup);
            
        RouteSetup.$interject = ['$stateProvider', '$urlRouterProvider'];
            
        function RouteSetup($stateProvider, $urlRouterProvider) {
            
            //Default Page
            $urlRouterProvider.otherwise('login');
                
            // route for the register page
            $stateProvider.state({
                name: 'register',
                url: '/register',
				templateUrl : '1-Register Page/register.html',
			}); 
            // route for the login page
            $stateProvider.state({
                name: 'login',
                url: '/login',
                templateUrl : '2-LogIn Page/login.html',
                
            }); 
                   
            // route for the home page
            $stateProvider.state({
                name: 'home',
                url: '/home',
				templateUrl : '3-Home Page/home.html',
			});

			// route for the faq page
			$stateProvider.state({
                name: 'faq',
                url: '/faq',
				templateUrl : '4-Faq Page/faq.html',
			});

			// route for the quizzes page
			$stateProvider.state({
                name: 'quizzes',
                url: '/quizzes',
                templateUrl : '5-Quizzes Page/quiz.html',
            });       
    };
})();
