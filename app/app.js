define([
        'ui.router',
        './chapter9/index.js'
    ],
    function() {
        angular.module('app', ['ui.router', 'app.chapter9'])
            .config(function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/home');

                $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl: 'home/home.html',
                    })
                    .state('chapter9', {
                        controller: 'Chapter9HomeController',
                        controllerAs: 'vm',
                        templateUrl: 'chapter9/chapter9.html',
                        url: '/chapter9'
                    });
            });
    }
);