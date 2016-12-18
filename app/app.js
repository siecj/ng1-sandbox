define([
        'ui.router'
    ],
    function() {
        angular.module('app', ['ui.router'])
            .config(function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/home');

                $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl: 'home/home.html',
                    })
            });
    }
);