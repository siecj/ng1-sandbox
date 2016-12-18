define(['./module'], function(module) {
    module.directive('alert', alert);

    function alert() {
        var directive = {
            bindToController: true,
            controller: AlertController,
            controllerAs: 'vm',
            replace: true,
            restrict: 'E',
            scope: {
                type: '=',
                close: '&'
            },
            templateUrl: 'chapter9/alert.html',
            transclude: true
        };

        return directive;
    }

    function AlertController() {
        var vm = this;
        activate();
        function activate() {}
    }
});