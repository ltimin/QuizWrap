// IIFE
(function() {
    'use strict';
    const app = angular.module('QuizWrapApp')
            app.config(RouteSetup);
            
            RouteSetup.$interject = ['$stateProvider'];
            
            function RouteSetup($stateProvider) {
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
