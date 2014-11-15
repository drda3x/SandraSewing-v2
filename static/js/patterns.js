/**
 * Библиотека создания алгоритмов
 *
 * Тут хранится логика создания, расчета и отображения алгоритма как класса
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
    Algorithm.prototype.iterate = function() {};

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
    Step.prototype.process = function() {};

    /**
     * Метод для расчета знчений массива параметров
     */
    Step.prototype.calc_params = function() {
        /*
        Пока что это самая сложная функция во всей программе.
        Тут нужно:
        1. Обойти массив параметров
            a. Для каждого параметра нужно влезть в scope и найти значения _requirements
            b. Сформировать из полученных _requirements массив аргументов и передать его
                в формулу расчета параметра (_formula)
            c. Вызвать выполнение формулы и сохранить результат в scope под именем _name...
         */
    };


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
     */
    function Dialog() {}

})(exports);