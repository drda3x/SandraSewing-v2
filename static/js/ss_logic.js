(function() {
    var app = angular.module('s_sewing', []);

    app.directive('mainDirective', function() {
        return {
            restrict: 'A',
            controller: function($scope) {
                $scope.currentWindow = 'main';

                $scope.changeWindow = function(window) {
                    $scope.currentWindow = window;
                }
            }
        };
    });
})();