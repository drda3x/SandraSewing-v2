/**
 * Начало начал.
 * Файл с директивами, контроллерами и всем остальным...
 */

(function() {
    var app = angular.module('sewing_app', []);

    /**
     * Показываем или скрываем доп. экран
     */
    app.controller('mainAppCtrl', ['$scope', function($scope) {
        $scope.showSubScreen = false;

        $scope.showOrHideSubScreen = function(name) {
            $scope.showSubScreen = (($scope.showSubScreen == name) ? false : name);
        };

        /**
         * Структура сущности "Мерка"
         * {
         *      name: 'Мерка 1', // {String} имя мерки
         *      type: 'woman' // {String} тип (мужская, женская)
         *      values: [
         *          {name: 'posh', value: 10},  // {Dimension} - сущность "Размер"
         *          {name: 'pot', value: 11},
         *          {name: 'pod', value: 12},
         *          ...
         *      ]
         * }
         *
         * Структура сущности "Размер"
         * {
         *      name: 'pot' // {String} Имя размера
         *      value: 15 // {Int} Значение размера
         * }
         */

        // Тестовые данные
        $scopt.dimensions = {
            current: {
                name: 'Тестовая мерка 1',
                type: 'woman',
                values: [
                    {name: 'posh', value: 25},
                    {name: 'pot', value: 60},
                    {name: 'pob', value: 90},
                    {name: 'pog', value: 90},
                    {name: 'shg', value: 25},
                    {name: 'tsg', value: 20},
                    {name: 'vg', value: 30},
                    {name: 'dpt', value: 50},
                    {name: 'vpkp', value: 50},
                    {name: 'shs', value: 50},
                    {name: 'dst', value: 70},
                    {name: 'dst-1', value: 50},
                    {name: 'vpks', value: 60},
                    {name: 'shpl', value: 40},
                    {name: 'vb', value: 50},
                    {name: 'op', value: 70},
                    {name: 'dr', value: 30},
                    {name: 'di', value: 100}
                ]
            },
            list: [
                {
                    name: 'Тестовая мерка 1',
                    type: 'woman',
                    values: [
                        {name: 'posh', value: 25},
                        {name: 'pot', value: 60},
                        {name: 'pob', value: 90},
                        {name: 'pog', value: 90},
                        {name: 'shg', value: 25},
                        {name: 'tsg', value: 20},
                        {name: 'vg', value: 30},
                        {name: 'dpt', value: 50},
                        {name: 'vpkp', value: 50},
                        {name: 'shs', value: 50},
                        {name: 'dst', value: 70},
                        {name: 'dst-1', value: 50},
                        {name: 'vpks', value: 60},
                        {name: 'shpl', value: 40},
                        {name: 'vb', value: 50},
                        {name: 'op', value: 70},
                        {name: 'dr', value: 30},
                        {name: 'di', value: 100}
                    ]
                },
                {
                    name: 'Тестовая мерка 2',
                    type: 'woman',
                    values: [
                        {name: 'posh', value: 25},
                        {name: 'pot', value: 60},
                        {name: 'pob', value: 90},
                        {name: 'pog', value: 90},
                        {name: 'shg', value: 25},
                        {name: 'tsg', value: 20},
                        {name: 'vg', value: 30},
                        {name: 'dpt', value: 50},
                        {name: 'vpkp', value: 50},
                        {name: 'shs', value: 50},
                        {name: 'dst', value: 70},
                        {name: 'dst-1', value: 50},
                        {name: 'vpks', value: 60},
                        {name: 'shpl', value: 40},
                        {name: 'vb', value: 50},
                        {name: 'op', value: 70},
                        {name: 'dr', value: 30},
                        {name: 'di', value: 100}
                    ]
                },{
                    name: 'Тестовая мерка 3',
                    type: 'woman',
                    values: [
                        {name: 'posh', value: 25},
                        {name: 'pot', value: 60},
                        {name: 'pob', value: 90},
                        {name: 'pog', value: 90},
                        {name: 'shg', value: 25},
                        {name: 'tsg', value: 20},
                        {name: 'vg', value: 30},
                        {name: 'dpt', value: 50},
                        {name: 'vpkp', value: 50},
                        {name: 'shs', value: 50},
                        {name: 'dst', value: 70},
                        {name: 'dst-1', value: 50},
                        {name: 'vpks', value: 60},
                        {name: 'shpl', value: 40},
                        {name: 'vb', value: 50},
                        {name: 'op', value: 70},
                        {name: 'dr', value: 30},
                        {name: 'di', value: 100}
                    ]
                }
            ]
        };

        $scope.dimensions = {
            current:,
            list:
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