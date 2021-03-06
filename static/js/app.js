/**
 * Начало начал.
 * Файл с директивами, контроллерами и всем остальным...
 */

(function(global) {

    // Просто чтобы не засорять код директивы, вынесем таблицу типов размеров сюда
    var dimensionsTypes = {
        man: [
            {name: 'posh', label: 'ПОШ', max: 22, min: 15},
            {name: 'pog', label: 'ПОГ', min: 40, max: 55},
            {name: 'pob', label: 'ПОБ', min: 40, max: 60},
            {name: 'pot', label: 'ПОТ', min: 17, max: 50},
            {name: 'shg', label: 'ШГ', min: 15, max: 25},
            {name: 'vg', label: 'ВГ', max: 40, min: 25},
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
            {name: 'posh', label: 'ПОШ', max: 23, min: 15},
            {name: 'pog', label: 'ПОГ', max: 55, min: 37},
            {name: 'pob', label: 'ПОБ', max: 60, min: 40},
            {name: 'pot', label: 'ПОТ', max: 47, min: 29},
            {name: 'shg', label: 'ШГ', max: 23, min: 15},
            {name: 'tsg', label: 'ЦГ', max: 12, min: 7},
            {name: 'vg', label: 'ВГ', max: 40, min: 20},
            {name: 'dpt', label: 'ДПТ', max: 53, min: 35},
            {name: 'vpkp', label: 'ВПКП', max: 30, min: 18},
            {name: 'shs', label: 'ШС', max: 25, min: 14},
            {name: 'dst', label: 'ДСТ', max: 43, min: 30},
            {name: 'dst-1', label: 'ДСТ-1', max: 47, min: 37},
            {name: 'vpks', label: 'ВПКС', max: 44, min: 36},
            {name: 'shpl', label: 'ШПЛ', max: 16, min: 8},
            {name: 'vb', label: 'ВБ', max: 30, min: 17},
            {name: 'op', label: 'ОП', max: 34, min: 27},
            {name: 'dr', label: 'ДР', max: 65, min: 35},
            {name: 'di', label: 'ДИ', max: 116, min: 40}
        ]
    };

    var app = angular.module('sewing_app', []);

    /**
     * Директива для хранения данных о текущей мерке и открытия и закрытия суб-окна...
     * todo: этой дирктиве нужно имя получше
     */
    app.directive('appMain', function() {
        return {
            restrict: 'A',
            controller: function($scope) {

                // Хранилище размеров
                $scope.dimensions = {
                    current: {
                        name: 'Тестовая мерка 1',
                        type: 'man',
                        values: [{name: 'posh', value: 25},{name: 'pot', value: 60},{name: 'pob', value: 90},{name: 'pog', value: 90},{name: 'shg', value: 25},{name: 'vg', value: 30},{name: 'dpt', value: 50},{name: 'shs', value: 50},{name: 'dst', value: 70},{name: 'shpl', value: 40},{name: 'vb', value: 50},{name: 'op', value: 70},{name: 'dr', value: 30},{name: 'di', value: 100}]
                    },
                    list: [
                        {
                            name: 'Тестовая мерка 1',
                            type: 'man',
                            values: [{name: 'posh', value: 25},{name: 'pot', value: 60},{name: 'pob', value: 90},{name: 'pog', value: 90},{name: 'shg', value: 25},{name: 'vg', value: 30},{name: 'dpt', value: 50},{name: 'shs', value: 50},{name: 'dst', value: 70},{name: 'shpl', value: 40},{name: 'vb', value: 50},{name: 'op', value: 70},{name: 'dr', value: 30},{name: 'di', value: 100}]
                        },
                        {
                            name: 'Тестовая мерка 2',
                            type: 'woman',
                            values: [{name: 'posh', value: 25},{name: 'pot', value: 60},{name: 'pob', value: 90},{name: 'pog', value: 90},{name: 'shg', value: 25},{name: 'tsg', value: 20},{name: 'vg', value: 30},{name: 'dpt', value: 50},{name: 'vpkp', value: 50},{name: 'shs', value: 50},{name: 'dst', value: 70},{name: 'dst-1', value: 50},{name: 'vpks', value: 60},{name: 'shpl', value: 40},{name: 'vb', value: 50},{name: 'op', value: 70},{name: 'dr', value: 30},{name: 'di', value: 101}]
                        },{
                            name: 'Тестовая мерка 3',
                            type: 'woman',
                            values: [{name: 'posh', value: 25},{name: 'pot', value: 60},{name: 'pob', value: 90},{name: 'pog', value: 90},{name: 'shg', value: 25},{name: 'tsg', value: 20},{name: 'vg', value: 30},{name: 'dpt', value: 50},{name: 'vpkp', value: 50},{name: 'shs', value: 50},{name: 'dst', value: 70},{name: 'dst-1', value: 50},{name: 'vpks', value: 60},{name: 'shpl', value: 40},{name: 'vb', value: 50},{name: 'op', value: 70},{name: 'dr', value: 30},{name: 'di', value: 102}]
                        }
                    ],
                    select: function(dim) {
                        this.current = dim;
                    },
                    save: function(dim) {
                        this.list[this.list.indexOf(this.current)] = dim;
                        this.current = dim;
                    },
                    add: function(dim) {
                       this.list.push(dim);
                        this.current = dim;
                    },
                    copy: function() {
                        var clone = JSON.parse(JSON.stringify(this.current));
                        clone.name += ' - копия';
                        this.current = clone;
                        this.add(this.current);
                    },
                    del: function() {
                        delete this.list[this.list.indexOf(this.current)];
                        this.list.sort();
                        this.list.length -= 1;
                        this.current = (this.list.length > 0) ? this.list[0] : null;
                    }
                };

                // Имя текущего открытого доп. экрана (если false - все экраны закрыты)
                $scope.showSubScreen = false;

                /**
                 * Метод для открытия или закрытия доп. экрана
                 * @type {showOrHideSubScreen}
                 */
                this.showOrHideSubScreen = $scope.showOrHideSubScreen = function(name) {
                    return $scope.showSubScreen = (($scope.showSubScreen == name) ? false : name);
                };

                // Сохраняем размер
                this.saveDimension = function(dim, context) {
                    $scope.dimensions[context](dim);
                };

                // Добавляем новый размер
                this.addDimension = function(dim) {
                    $scope.dimensions.add(dim);
                };

                // Копируем размер
                this.copyDimension = function() {
                    $scope.dimensions.copy();
                };

                // Удаляем размер
                this.deleteDimension = function() {
                    $scope.dimensions.del();
                }
            }
        }
    });

    app.directive('selectDimension', function() {
        return {
            restrict: 'E',
            scope: {
                dimensions: '='
            },
            require: '^appMain',
            link: function(scope, element, attrs, ctrls) {
                scope.appMainCtrl = ctrls;
            },
            controller: function($scope) {

                var firstEvent;

                $scope.reg_event = function(param, dim) {
                    if(param === 'first') {
                        firstEvent = new Date();
                    } else {
                        if(!firstEvent) {
                            return;
                        }
                        var laetEvent = new Date();
                        if(laetEvent - firstEvent > 150) {
                            $scope.appMainCtrl.showOrHideSubScreen('edit', dim);
                        } else {
                            $scope.appMainCtrl.showOrHideSubScreen(false, dim);
                        }
                    }
                }
            },
            template:'<div class="select_new_dim_overflow">' +
                        '<div ng-repeat="dim in dimensions.list track by $index" class="dimensions">' +
                            '<a href="" class="dimension" ng-mousedown="reg_event(\'first\')" ng-mouseup="dimensions.select(dim); clk(); reg_event(\'last\', dim)"">{{dim.name}}</a>' +
                        '</div>' +
                     '</div>'
        }
    });

    app.directive('editScreen', function() {
        return {
            restrict: 'E',
            require: '^appMain',
            link: function(scope, element, attrs, ctrls) {
                scope.appMainCtrl = ctrls;
            },
            scope: {
                context: '=',
                show: '=',
                current: '='
            },
            controller: function($scope) {

                $scope.dimensions_types = dimensionsTypes;

                var inputs = $scope.inputs = [],
                    getFormModel = (function() {
                        var types = $scope.dimensions_types;

                        return function(type) {
                            var t = types[type],
                                a = {};

                            for(var i= 0, j= t.length; i<j; i++) {
                                a[t[i].name] = null;
                            }
                            return a;
                        }
                    })();

                $scope.type = ($scope.current && $scope.current.type) ? $scope.current.type : 'man';

                $scope.dimension_name = null;

                $scope.$watch('current.name', function(value) {
                    $scope.dimension_name = value;
                });

                $scope.changeFormModel = function(type) {
                    $scope.type = type;
                    $scope.formModel = getFormModel(type);
                    $scope.formModel.new = clearForm;
                    $scope.formModel.edit = setForm;
                };

                $scope.changeFormModel($scope.type);

                // todo это еще один УЖООООООСССССС
                $scope.$watch('context', function(value) {
                    if($scope.formModel.hasOwnProperty(value)) {
                        $scope.dimension_name = $scope.current.name;
                        $scope.changeFormModel($scope.current.type);
                        $scope.formModel[value]();
                    }
                });

                $scope.selectedInput = {
                    name: null,
                    index: null
                };

                /**
                 * Функция для наполнения массива полей ввода размеров
                 * @param input
                 */
                this.addInput = function(input, clear) {
                    if(clear) {
                        $scope.inputs = inputs = [];
                    }
                    inputs.push(input);
                };

                $scope.setInputVal = function(val) {
                    try{
                        $scope.formModel[$scope.selectedInput.name] = val;
                        $scope.inputs[$scope.selectedInput.index + 1].focus();
                    } catch (e) {
                        console.log(e);
                        console.log('index is grater then array length, it\'s OK!');
                    }

                };

                $scope.saveDimension = function() {
                    var newValues = [],
                        context = ($scope.context === 'new') ? 'add' : 'save';

                    for(var i in $scope.formModel) {
                        if(typeof $scope.formModel[i] !== 'function') {
                            newValues.push({
                                name: i,
                                value: $scope.formModel[i]
                            });
                        }
                    }

                    $scope.appMainCtrl.saveDimension({
                        name: $scope.dimension_name,
                        type: $scope.type,
                        values: newValues
                    }, context);
                };

                /**
                 * Функция для установки значений в форму
                 */
                function setForm() {
                    var values = $scope.current.values;
                    for(var i= 0, j= values.length; i<j; i++) {
                        if(typeof this[values.name] !== 'function') {
                            this[values[i].name] = values[i].value;
                        }
                    }
                    action = null;
                }

                /**
                 * Функция для очистки формы
                 */
                function clearForm() {
                    for(var i in this) {
                        if(typeof this[i] !== 'function') {
                            this[i] = null;
                        }
                    }
                    $scope.dimension_name = null;
                    $scope.type = 'man';
                    action = null;
                }
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
            },
            replace: false
        }
    });

    app.directive('focusMe', function() {
        return {
            restrict: 'A',
            require: '^editScreen',
            link: function(scope, element, attrs, editScreenCtrl) {
                element[0].selected = null;
                editScreenCtrl.addInput(element[0], scope.$first);
            },
            controller: function($scope, $element) {
                $scope.isFirst = function(isFirst) {
                }
            }
        }
    });

    app.directive('checkMe', function() {
        return {
            restrict: 'A',
            require: '^editScreen',
            controller: function($scope, $element, $attrs) {
                $scope.$watch('type', function(val) {
                    $attrs.$set('checked',
                        (($attrs.myType === val) ? 'checked' : undefined)
                    );
                });
            }
        }
    });

    app.directive('calcResults', function() {
        return {
            restrict: 'A',
            require: '^appMain',
            controller: function($scope) {
                $scope.$watch('dimensions.current', function(val) {
                    var arr = dimensionsTypes[val.type];
                    $scope.dim_names = {};

                    for(var i= 0, j= arr.length; i<j; i++) {
                        $scope.dim_names[arr[i].name] = arr[i].label;
                    }
                });
            },
            template:
                '<div id="footer">' +
                    '<a href="" class="current">Размеры</a>' +
                    '<a href="">Результаты расчета</a>' +
                    '<table id="measurement_results">' +
                        '<tr>' +
                            '<th ng-if="value.value && value.name" ng-repeat="value in dimensions.current.values">{{dim_names[value.name]}}</th>' +
                        '</tr>' +
                        '<tr>' +
                            '<td ng-if="value.value && value.name" ng-repeat="value in dimensions.current.values">{{value.value}}</td>' +
                        '</tr>' +
                    '</table>' +
                '</div>',
            replace: true
        }
    });

    app.directive('products', function() {
        return {
            restrict: 'E',
            transclude: true,
            controller: function($scope, $element) {

                function createControl(product, code, label, values) {
                    return {
                        product: product,
                        code: code,
                        label: label,
                        values: values,
                        selected: null,
                        show: false
                    };
                }

                function createProductType(code, label) {
                    return {
                        code: code,
                        label: label,
                        selected: false
                    }
                }

                $scope.product_types = [
                    createProductType('panes', 'Брюки'),
                    createProductType('skirt', 'Юбка'),
                    createProductType('dress', 'Платье'),
                    createProductType('shirt', 'Рубашка')
                ];

                $scope.controls = [
                    createControl('panes', 'x', 'X', ['X', '2X', '3X']),
                    createControl(['panes', 'skirt', 'dress', 'shirt'], 'tb', 'ТБ', [17, 18, 19, 20]),
                    createControl(['panes', 'skirt'], 'tuck', 'Длина вытачки на передней половинке', [8, 9, 10]),
                    createControl('panes', 'codpiece', 'Гульфик', ['будет', 'не будет']),
                    createControl('panes', 'tuck_back', 'Длина вытачки на задней половинке', ['7 (если будет карман)', 12, 13, 14]),
                    createControl('skirt', 'side_cut', 'Боковой срез', ['будет', 'не будет']),
                    createControl('skirt', 'wl_low_back', 'Понижение линии талии сзади', [0.5, 1, 1.5, 2, 2.5, 3]),
                    createControl('skirt', 'wl_low_front', 'Понижение линии талии спереди', [0.5, 1, 1.5, 2]),
                    createControl('skirt', 'belt', 'Пояс (длина ОТ +)', [0, 5, 6, 7, 8, 9, 10]),
                    createControl('skirt', 'narrow', 'Заужение', ['будет', 'не будет']),
                    createControl('dress', 'pg', 'Припуск на груди (ПГ)', [0, 2, 2.5, 3]),
                    createControl('dress', 'pt', 'Припуск на талии (ПТ)', [0, 1, 1.5, 2]),
                    createControl('dress', 'pb', 'Припуск по бедрам (ПБ)', [0, 1, 1.5, 2]),
                    createControl('dress', 'pshgs', 'Припуск к ширине горловины спинки (ПГС)', [0, 1]),
                    createControl('dress', 'pspr', 'Припуск к скуску проймы (ПСПР)', [0, 2, 2.5, 3]),
                    createControl('dress', 'ptsg', 'Припуск к центру груди (ПЦГ)', [0, 0.5, 1]),
                    createControl('dress', 'pvg', 'Припуск к высоте груди (ПВГ)', [0, 0.5, 1]),
                    createControl('dress', 'pop', 'Припуск к обхвату плеча (ПОП)', [0, 3, 3.5, 4])
                ];

                $scope.selectControl = function(control, value) {
                    control.selected = value;
                    $scope.calcParams[control.code] = getControlValue(control);
                };

                $scope.checkControlSelected = function(control, value) {
                    return control.selected == value;
                };

                function getControl(name) {
                    for(var i= $scope.controls.length - 1; i>=0; i--) {
                        if($scope.controls[i].code == name) return $scope.controls[i]
                    }

                    return NaN;
                }

                function getControlValue(control) {
                    var context = $scope.calcParams,
                        formuls = {
                            x: function(param) {
                                var f = {
                                    'X': context.pob/10,
                                    '2X': 11*context.pob/100,
                                    '3X': 23*context.pob/200
                                };

                                return f[param];
                            },
                            codpiece: function(param) {
                                return param == 'будет'
                            },
                            tuck_back: function() {
                                return parseInt(control.selected, 10)
                            },
                            side_cut: function(param) {
                                return param == 'будет'
                            },
                            narrow: function(param) {
                                return param == 'будет'
                            }
                        };

                    try {
                        return formuls[control.code](control.selected);
                    } catch(e) {
                        return control.selected;
                    }
                }

                $scope.calculateValue = function(valName) {
                    // todo переделать
                    var context = this,
                        formuls = {
                            tya: (context.dimensions.current.type == 'man') ? context.calcParams.pob / 2 + 3 : context.calcParams.pob / 2 - 1,
                            tuckBackLen: (function() {
                                var x = context.calcParams.x,
                                    tb = context.calcParams.tb,
                                    di = context.calcParams.di,
                                    pot = context.calcParams.pot;

                                return Math.round((Math.sqrt(Math.pow(2*x - x/2 + (3*x+tb*( (-0.5*x-1)/(3*tb-di) )), 2) + Math.pow(x / 2, 2)) - pot / 2 ) / 2)
                            })()
                        };

                    if(!formuls.hasOwnProperty(valName)) return NaN;

                    return formuls[valName];
                };

                function resetCalcParams() {
                    var temp = {};

                    $scope.dimensions.current.values.forEach(function(val) {
                        temp[val.name] = val.value;
                    });

                    $scope.calcParams = temp;
                }

                resetCalcParams();

                $scope.$watch('dimensions.current', function() {
                    resetControlSelected();
                    resetCalcParams();
                });

                function resetControlSelected() {
                    $scope.controls.forEach(function(control) {
                        control.selected = null;
                    });
                }

                var currentType = null;

                $scope.showAlgorithm = function(type) {
                    return currentType == type;
                };

                $scope.showStep = function(_controls) {

                    var controls = (_controls instanceof Array) ? _controls : [_controls];

                    for(var i= 0, j= controls.length; i<j; i++) {
                        if(!$scope.calcParams.hasOwnProperty(controls[i]) || _in([false, null, undefined], $scope.calcParams[controls[i]])) {
                            return false;
                        }
                    }

                    return true;
                };

                $scope.selectType = function(type) {
                    $scope.product_types.forEach(function(element) {
                         element.selected = false;
                    });
                    type.selected = true;
                    currentType = type.code;
                    showControl(type);
                    resetControlSelected();
                    resetCalcParams();
                };

                function showControl(type) {
                    $scope.controls.forEach(function(control) {
                        if(control.product instanceof Array) {
                            control.show = _in(control.product, type.code);
                        } else {
                            control.show = (control.product == type.code);
                        }
                    });
                }

                function _in(array, val) {
                    var i = array.length - 1;

                    while(i >= 0) {
                        if (array[i] === val) return true;
                        i--;
                    }
                    return false;
                }
            },
            templateUrl: './templates/main_window.html',
            replace: true
        }
    });

    app.directive('panesStep', function() {
        return {
            restrict: 'E',
            require: '^products',
            scope: {
                index: '=',
                special: '=',
                end: '='
            },
            transclude: true,
            link: function(scope, element, attr, panesCtrl) {
                scope.canShow = panesCtrl.canShow;
                scope.checkEnd = panesCtrl.checkEnd;
                panesCtrl.stepsCounter(scope.index);
                panesCtrl.addStep(scope);
            },
            controller: function($scope) {
                $scope.onEnd = function() {
                    if($scope.end != undefined) {
                        return $scope.checkEnd() == $scope.end;
                    }
                    return true;
                }
            },
            template: '<div ng-show="canShow({{index}}) && onEnd()" ng-transclude></div>'
        }
    });

    app.filter('round', function() {
        return function(input) {
            return Math.round(input);
        }
    });

})(this);