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
     */
    function Algorithm(_name) {
        this.name = _name;
        this.steps = [];
        this.scope = {};
    }

    /**
     * Метод для добавления шагов в цепочку алгоритма
     * todo ПРИМЕЧАНИЕ!!! Учесть что в цепочку может добавляться как один шаг так и группа шагов
     * todo               есть мысль представить группу как маленький алгоритм...
     * @param step - {Step || Algorithm} - шаг алгоритма (может быть другим алгоритмом если представлять группу как алгоритм...)
     */
    Algorithm.prototype.addStep = function(step) {
        step.scope = this.scope;
        this.steps.push(step);
    };

    /**
     * Метод для запуска обхода шагов алгоритма и обработки каждого из них
     */
    Algorithm.prototype.next = (function(context) {
        var index = 0,
            steps_length = context.steps.length;

        return function() {
            if(index < steps_length) {
                context.steps[index].process();
                index++;
            } else {
                throw 'StopIteration';
            }
        }
    })(Algorithm);

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
        this.params = _params;
        this.dialog = _dialog;
    }

    /**
     * Метод для обработки шага
     * Последовательногго вызова: диалога, расчетов и отображения результата
     */
    Step.prototype.process = function() {
        /*
        Сил думать прямо в коде сейчас нет, да и не очень это хорошо, а еще я в электричке,
        по этому пока просто подумаю как это должно работать...

        1. Нужно вызвать диалог шага с пользователем, получить от него информацию и где-то ее сохранить
        2. Нужно вызвать расчет параметра и эту величину тоже сохранить
        3. Нужно вызвать отображение на экране

        Мне понадибится интерфейс для общения с пользователем и интерфейс показа информации пользователю
         */

        // Проверяем есть ли у шага диалог с пользователем
        if(this.dialog) {
            try {

            }
        } else {
            // Если диалога нет - сразу считаем параметры и выводим пользователю строку отображения
            this.calc_params();
        }
    };

    /**
     * Метод для расчета знчений массива параметров
     */
    Step.prototype.calc_params = (function(context) {
        /*
        Пока что это самая сложная функция во всей программе.
        Тут нужно:
        1. Обойти массив параметров
            a. Для каждого параметра нужно влезть в scope и найти значения _requirements
            b. Сформировать из полученных _requirements массив аргументов и передать его
                в формулу расчета параметра (_formula)
            c. Вызвать выполнение формулы и сохранить результат в scope под именем _name...
        */

        var scope = context.scope;

        /**
         * Функция для выдергивания необходимых параметров из scope'a алгоритма
         * @param req - {Array} - массив параметров
         * @return {Array}  - массив значений для указанных параметров
         */
        function get_requirements(req) {
            var values = [];
            for(var i= 0, j= req.length; i < j; i++) {
                values.push(scope[req]);
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
                    requirements = get_requirements(this.params[i].requirements);

                // Сразу сохраняем результат в scope
                this.scope[param_name] = calc_function(requirements);
            }
        }
    })(Step);


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

})(exports);