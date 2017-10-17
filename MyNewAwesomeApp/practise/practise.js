angular.module('practise', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('practise').config(function($stateProvider) {

    /* Add New States Above */
    $stateProvider.state('home',{
    		url:'/home',
    		templateUrl:'practise/partial/home/home.html',
    		controller:'HomeCtrl'
    }).state('signup',{
    		url:'/signup',
    		templateUrl:'practise/partial/signup/signup.html',
    		controller:'SignupCtrl'
    }).state('login',{
    		url:'/login',
    		templateUrl:'practise/partial/login/login.html',
    		controller:'LoginCtrl'
    }).state('restuarent',{
            url:'/restuarent',
            templateUrl:'practise/partial/main-page/main-page.html',
            controller:'MainPageCtrl',
            resolve:{
                sessionUser:['exampleService',function (exampleService) {
               return exampleService.getSessionUser();
                    }]
            }
    });

});

