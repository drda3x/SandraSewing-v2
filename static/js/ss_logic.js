(function() {
    var app = angular.module('s_sewing', []);

    app.directive('mainDirective', function() {
        return {
            restrict: 'A',
            controller: function($scope) {

                $scope.appWindows = {
                    currentWindow: 'main',
                    changeCurrent: function(window) {
                        this.currentWindow = window;
                    }
                };
            }
        };
    });
})();