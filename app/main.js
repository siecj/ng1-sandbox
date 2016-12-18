require.config({
    baseUrl: './app',
    paths: {
        'angular': '../bower_components/angular/angular.min',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'ui.router': '../bower_components/angular-ui-router/release/angular-ui-router.min'
    },
    shim: {
        'angular': {
            'deps': ['jquery'],
            'exports': 'angular'
        },
        'bootstrap': {
            'deps': ['jquery']
        },
        'ui.router': {
            'deps': ['angular']
        }
    }
});

require(['app'], function() {
    angular.bootstrap(document, ['app']);
});