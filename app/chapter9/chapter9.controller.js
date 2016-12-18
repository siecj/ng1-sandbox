define(['./module'], function(module) {
    module.controller('Chapter9HomeController', Chapter9HomeController);

    function Chapter9HomeController() {
        var vm = this;
        vm.title = "Home of Chapter 9";
        vm.type = 'error';

        vm.closeAlert = closeAlert;

        activate();

        function activate() {}

        function closeAlert() {
            console.log('close alert');
        }
    }
});