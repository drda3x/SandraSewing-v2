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
            controller: function($scope) {
                $scope.isAvailable = function(name) {
                    return name == $scope.showSubScreen;
                }
            },
            template: '<span ng-transclude></span>',
            transclude: true
        }
    });


    app.directive('selectDimension', function() {
        return {
            restrict: 'E',
            controller: function($scope) {
                $scope.dimensions = ['Мерка 1', 'Мерка 2', 'Мерка 3']
            },
            template:'<div class="select_new_dim_overflow"><div ng-repeat="dim in dimensions" class="dimensions"><a href="" class="dimension">{{dim}}</a></div></div>'
        }
    });

    app.directive('addNewDimension', function() {
        return {
            restrict: 'E',
            controller: function($scope) {

                $scope.type = 'man';

                $scope.dimensions = {
                    woman: ['ПОШ','ПОГ','ПОТ','ПОБ','ШГ','ЦГ','ДПТ','ВПКП','ШС','ДСТ','ДСТ-1','ВПКС','ШПЛ','ВБ','ОП','ДР','ДИ'],
                    man: ['ПОШ','ПОГ','ПОТ','ПОБ','ШГ','ДПТ','ШС','ДСТ','ШПЛ','ВБ','ОП','ДР','ДИ']
                };

                $scope.changeType = function(type) {
                    $scope.type = type;
                }
            },
            templateUrl: './templates/new_dimension_tmp.html'
        }
    });

    app.directive('dimensionValuesShortlist', function() {
        return {
            restrict: 'E',
            controller: function($scope) {
                var i = 0;
                $scope.max = 110;
                $scope.min = 50;
                $scope.lines = (function(min, max) {
                    var a = [],
                        start = min;
                    for(var i= 0, j= Math.ceil((max-min)/10); i < j; i++){
                        var b = [];

                        for(var k= start, m= ((start + 10 > max) ? max : start + 10); k<m; k++) {
                            b.push(k);
                        }
                        start+=10;
                        a.push(b);
                    }
                    return a;
                })($scope.min, $scope.max);

            },
            template: '<div ng-repeat="line in lines" class="dimension_values_shortlist"><a ng-repeat="val in line" href="">{{val}}</a></div>'
        }
    });
})();