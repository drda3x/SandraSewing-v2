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
        $scope.dimensions = {
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
            ],
            config: {
                 types: {
                     man: [
                         {name: 'posh', label: 'ПОШ', max: 22, min: 15},
                         {name: 'pog', label: 'ПОГ', min: 40, max: 55},
                         {name: 'pob', label: 'ПОБ', min: 40, max: 60},
                         {name: 'pot', label: 'ПОТ', min: 17, max: 50},
                         {name: 'shg', label: 'ШГ', min: 15, max: 25},
                         {name: 'dpt', label: 'ДПТ', min: 20, max: 45},
                         {name: 'shs', label: 'ШС', min: 15, max: 25},
                         {name: 'dst', label: 'ДСТ', min: 20, max: 45},
                         {name: 'shpl', label: 'ШПЛ', min: 10, max: 18},
                         {name: 'vb', label: 'ВБ', min: 15, max: 25},
                         {name: 'op', label: 'ОП', min: 25, max: 40},
                         {name: 'dr', label: 'ДР', min: 55, max: 70},
                         {name: 'di', label: 'ДИ', min: 50, max: 110}
                     ],
                     woman: [
                         {name: 'posh', label: 'ПОШ'},
                         {name: 'pog', label: 'ПОГ'},
                         {name: 'pob', label: 'ПОБ'},
                         {name: 'pot', label: 'ПОТ'},
                         {name: 'shg', label: 'ШГ'},
                         {name: 'tsg', label: 'ЦГ'},
                         {name: 'dpt', label: 'ДПТ'},
                         {name: 'vpkp', label: 'ВПКП'},
                         {name: 'shs', label: 'ШС'},
                         {name: 'dst', label: 'ДСТ'},
                         {name: 'dst-1', label: 'ДСТ-1'},
                         {name: 'vpks', label: 'ВПКС'},
                         {name: 'shpl', label: 'ШПЛ'},
                         {name: 'vb', label: 'ВБ'},
                         {name: 'op', label: 'ОП'},
                         {name: 'dr', label: 'ДР'},
                         {name: 'di', label: 'ДИ'}
                     ]
                 }
            },
            select: function(dim) {
                this.current = dim;
            },
            add: function(dim) {
                this.list.push(dim);
                this.current = dim;
                console.log(dim);
            }
        };


        /*$scope.dimensions = {
            current:,
            list:
        }*/
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

                var firstEvent;

                $scope.reg_event = function(param) {
                    if(param === 'first') {
                        firstEvent = new Date();
                    } else {
                        if(!firstEvent) {
                            return;
                        }
                        var laetEvent = new Date();
                        if(laetEvent - firstEvent > 10) {
                            showOrHideSubScreen('new_dim');
                        } else {
                            showOrHideSubScreen(false);
                        }
                    }
                }
            },
            template:'<div class="select_new_dim_overflow"><div ng-repeat="dim in dimensions.list" class="dimensions"><a href="" class="dimension" ng-mousedown="reg_event(first)" ng-click="dimensions.select(dim); showOrHideSubScreen(false)"">{{dim.name}}</a></div></div>'
        }
    });

    app.directive('addNewDimension', function() {
        return {
            restrict: 'E',
            controller: function($scope, $element) {

                $scope.type = null;
                $scope.dimension_name = null;
                $scope.formInfo = null;
                $scope.selectedInput = {
                    name: null,
                    index: null
                };
                $scope.inputs = [];

                $scope.changeType = function(type) {
                    $scope.inputs = [];
                    $scope.type = type;
                    $scope.formInfo = (function() {
                        var a = {},
                            src = $scope.dimensions.config.types[type];

                        for(var i in src) {
                            a[src[i].name] = null;
                        }
                        return a;
                    })();
                };

                $scope.changeType('man');

                $scope.addInput = function(input) {
                    $scope.inputs.push(input);
                };

                /**
                 * Функция для сбора информации из формы и создания новой мерки...
                 * */
                 $scope.createNewDimension = function()  {
                     if(!$scope.dimension_name || $scope.dimension_name.length == 0) {
                         alert('Заполните название мерки');
                         return;
                     }
                     var values = [];
                     for(var i in $scope.formInfo) {
                         values.push({
                             name: i,
                             value: parseInt($scope.formInfo[i])
                         });
                     }
                     $scope.dimensions.add({
                        name:  $scope.dimension_name,
                        type: $scope.type,
                        values: values
                     });
                 };

                $scope.setInputVal = function(val) {
                    try{
                        $scope.formInfo[$scope.selectedInput.name] = val;
                        $scope.inputs[$scope.selectedInput.index + 1].focus();
                    } catch (e) {
                        console.log('index is grater then array length, it\'s OK!');
                    }

                };
            },
            templateUrl: './templates/new_dimension_tmp.html'
        }
    });

    app.directive('valuesCalculator', function() {
        return {
            restrict: 'A',
            controller: function($scope) {
                var values = $scope.values;

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
                })(values.min, values.max);
            }
        }
    });

    app.directive('focusMe', function() {
        return {
            restrict: 'A',
            require: '^addNewDimension',
            link: function(scope, element, attrs, addNewDimensionCtrl) {
                scope.addInput(element[0]);
            },
            controller: function($scope, $element) {
                $scope.isFirst = function(isFirst) {
                    console.log(isFirst);
                }
            }
        }
    });
})();