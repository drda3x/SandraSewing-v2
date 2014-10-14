/**
 * Начало начал.
 * Файл с директивами, контроллерами и всем остальным...
 */

(function() {
    var app = angular.module('sewing_app', []);

    /**
     * Показываем или скрываем доп. экран
     */
    app.controller('showsSubScreenCtrl', ['$scope', function($scope) {
        $scope.showSubScreen = false;

        $scope.showOrHideSubScreen = function(name) {
            $scope.showSubScreen = (($scope.showSubScreen == name) ? false : name);
        }
    }]);

    app.directive('subScreen', function() {
        return {
            restrict: 'A',
            templateUrl: './templates/sub_screen_tmp.html'
        }
    });

    app.directive('screen', function() {
        return {
            restrict: 'E',
            require: '^screensList',
            controller: function($scope) {
                $scope.isAvailable = function(name) {
                    return name == $scope.showSubScreen;
                }
            },
            template: '<span ng-transclude></span>',
            transclude: true
        }
    });

})();