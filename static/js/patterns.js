/**
 * Библиотека создания алгоритмов
 *
 * Тут хранится логика создания, расчета и отображения алгоритма как класса
 *
 *
 * Для связи этого кода с angular нужно сделать спец директиву в которой будет работать $compile
 * в эту директиву передавать html в котором будет запрограммировано поведение диалога и отображения шагов
 * внутри директивы компилировать html и подставлять его не странице... Вот как-то так...
 * как тут
 * app.directive('exmpl', function($compile) {
  return {
    restrict: 'A',
    controller: function($scope, $compile, $element) {
      var html = '<input type=text ng-model="abc"><input type="button" value="click me">{{abc}}';

      var link = $compile(html),
          content = link($scope);
          $element.append(content);

    }
  }
});
 */

(function (global) {
    "use strict";


    /**
     * Конструктор класса "Алгоритм"
     * Отвечает за весь алгоритм в целом
     * @constructor
     * @param _name {string} имя алгоритма
     * @param _container {Object} - мост к директиве
     */
    function Algorithm(_name) {
        this.name = _name;
        this.steps = [];
        this.scope = {};
    }

    Algorithm.prototype.clearScope = function() {
        for(var i in this.scope) {
            delete this.scope[i];
        }
    };

    Algorithm.prototype.loadValueToScope = function(name, val) {
        this.scope[name] = parseInt(val);
    };

    Algorithm.prototype.linkToDirecive = function(linkFunc) {
        if(!this.linkFunction) {
            this.linkFunction = linkFunc;
        }
    };

    /**
     * Метод для добавления шагов в цепочку алгоритма
     * todo ПРИМЕЧАНИЕ!!! Учесть что в цепочку может добавляться как один шаг так и группа шагов
     * todo               есть мысль представить группу как маленький алгоритм...
     * @param _steps - {Step || Algorithm} - шаг алгоритма (может быть другим алгоритмом если представлять группу как алгоритм...)
     */
    Algorithm.prototype.addSteps = function(_steps) {

        var steps = (_steps instanceof Array) ? _steps : [_steps],
            step;

        for(var i= 0, j= steps.length; i<j; i++) {

            step = steps[i];

            step.myAlgorithm = this;

            // Т.к. step может быть алгоритмом, то ему нужно передать root_scope его алгоритма-содержателя
            if(step instanceof Algorithm) {
                step.root_scope = this.root_scope;
            }

            step.scope = this.scope;

            var self = this;

            step.call_render = function() {
                    self.render.apply(self, arguments);
            };
            this.steps.push(step);
        }
    };

    /**
     * Метод для рендеринга контента шага алгоритма
     * Его реализация находится в файле с директивами
     */
    Algorithm.prototype.render = function() {
        this.linkFunction.apply(null, arguments);
    };

    /**
     * Метод для запуска обхода шагов алгоритма и обработки каждого из них
     */
    Algorithm.prototype.next = (function() {
        var steps_length, canChange = false, index = 0;

        return function(way) {

            steps_length = (!steps_length) ? this.steps.length : steps_length;

            if(way === 'forward') {
                if(index < steps_length - 1) {
                    if(canChange) {
                        index++;
                    }
                    canChange = this.steps[index].process(way);
                } else {
                    throw 'StopIteration';
                }
            } else {
                if(index >= 0) {
                    if(canChange && index > 0) {
                        index--;
                    }
                    canChange = this.steps[index].process() && index > 0;
                } else {
                    throw 'StopIteration';
                }
            }
        }
    })();

    /**
     * Конструктор класса "Пункт алгоритма"
     * Отвечает за один конкретный шаг алгоритма
     * @constructor
     * @param _string_view {string} строковое представление шага
     * @param _params {Array} список расчетных значений
     * @param _dialog {Object} список действий пользователя перед выполнением шага
     */
    function Step(_string_view, _params, _dialog) {
        this.scope = null;
        this.string_view = _string_view;
        this.params = (_params instanceof Array) ? _params : [_params];
        this.dialog = _dialog;
        this.myAlgorithm = null;

        if(this.dialog) {
            this.queue = {
                elems: [this.dialog, this.string_view],
                index: null
            };
        } else {
            this.queue = null;
        }
    }

    /**
     * Метод для обработки шага
     * Последовательногго вызова: диалога, расчетов и отображения результата
     */
    Step.prototype.process = function(way) {
        /*
        Сил думать прямо в коде сейчас нет, да и не очень это хорошо, а еще я в электричке,
        по этому пока просто подумаю как это должно работать...

        1. Нужно вызвать диалог шага с пользователем, получить от него информацию и где-то ее сохранить
        2. Нужно вызвать расчет параметра и эту величину тоже сохранить
        3. Нужно вызвать отображение на экране

        Мне понадибится интерфейс для общения с пользователем и интерфейс показа информации пользователю
         */

        // Проверяем есть ли у шага диалог с пользователем
        //todo это может не работать)))
        var queue = this.queue;

        if(queue) {
            if(way == 'forward') {
                queue.index = (queue.index) ? queue.index : 0;

                if(queue.index == queue.length - 1) {
                    this.calc_params();
                }

                this.myAlgorithm.render(this.__map(queue.elems[queue.index]));

                if(queue.index == queue.elems.length - 1) {
                    return true;
                } else {
                    queue.index++;
                    return false;
                }
            } else {

                queue.index = (!(queue.index)) ? queue.index : queue.elems.length - 1;

                this.myAlgorithm.render(this.__map(queue.elems[queue.index]));

                if(queue.index == 0) {
                    return true;
                } else {
                    queue.index -= 1;
                    return false;
                }
            }

        } else {
            // Если диалога нет - сразу считаем параметры и выводим пользователю строку отображения
            this.calc_params();
            this.myAlgorithm.render(this.__map(this.string_view));
            return true;
        }
        /*
        if(this.dialog) {
            var self = this;
            try {
                this.myAlgorithm.render(this.dialog.html, function() {
                    self.calc_params();
                    self.myAlgorithm.render(self.__map());
                });
            } catch (e) {
                console.debug(e);
            }
        } else {

        }
        */
    };

    /**
     * Метод для подстановки числовых параметров в строки-отображалки
     * @private
     */
    Step.prototype.__map = function(mapObj) {
        var buffer = mapObj.split(/<<|>>/);

        if(buffer.length > 1) {
            for(var i= 0, j= buffer.length; i<j; i++) {
                if(this.scope.hasOwnProperty(buffer[i])) {
                    buffer[i] = this.scope[buffer[i]];
                }
            }

            return buffer.join('');

        } else {
            return mapObj;
        }

    };

    /**
     * Метод для расчета знчений массива параметров
     */
    Step.prototype.calc_params = (function() {
        /*
        Пока что это самая сложная функция во всей программе.
        Тут нужно:
        1. Обойти массив параметров
            a. Для каждого параметра нужно влезть в scope и найти значения _requirements
            b. Сформировать из полученных _requirements массив аргументов и передать его
                в формулу расчета параметра (_formula)
            c. Вызвать выполнение формулы и сохранить результат в scope под именем _name...
        */

        /**
         * Функция для выдергивания необходимых параметров из scope'a алгоритма
         * @param _req - {Array} - массив параметров
         * @return {Array}  - массив значений для указанных параметров
         */
        function get_requirements(_req) {

            var req = (_req instanceof Array) ? _req : [_req];

            if(!req) {
                return [];
            }
            var values = [];
            for(var i= 0, j= req.length; i < j; i++) {
                values.push(this.scope[req]);
            }
            return values;
        }

        return function() {
            /*
            Обходим список параметров и запускаем расчет для каждого из них
             */
            for(var i= 0, params_len= this.params.length; i < params_len; i++) {
                var param_name = this.params[i].name,
                    calc_function = this.params[i].formula,
                    requirements = get_requirements.call(this, this.params[i].requirements);

                // Сразу сохраняем результат в scope
                this.scope[param_name] = calc_function(requirements);
            }
        }
    })();


    /**
     * Конструктор класса "Расчетное значение"
     * Отвечает за одно конкретное значение в шаге алгоритма
     * @constructor
     * @param _name - {String} Наименование параметра
     * @param _requirements - {Array} Массив необходимых значений которые нужны для расчетов
     * @param _formula - {Function} формула расчета параметра
     */
    function Value(_name, _requirements, _formula) {
        this.name = _name;
        this.requirements = _requirements;
        this.formula = _formula;
    }


    /**
     * Конструктор класса "Диалог"
     * Отвечает за действия пользователя, которые необходимы для работы алгоритма
     * @constructor
     * @param _html {String} - html код диалога для отображения пользователю
     * @param _values {Array} - массив значений, которые булут использованы далее
     */
    function Dialog(_html, _values) {
        this.html = _html;
        this.values = _values;
    }

    if(!global) {
        throw 'There is no global object';
    }

    if(!global.algorithmApi) {
        global.algorithmApi = {}
    }

    global.algorithmApi.Algorithm = Algorithm;
    global.algorithmApi.Step = Step;
    global.algorithmApi.Value = Value;
    global.algorithmApi.Dialog = Dialog;

})(this);