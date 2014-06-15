/**
 * Дефолтные структуры: формулы, шаблоны мерок и тд...
 */

(function (global) {
    "use strict";

    // Структура мерки
    function defDimensionItemStructure(id, name, type, values) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.values = values;
    }

    var defMenDimensionStructure = [];
    var defWomanDimensionStructure = [];

    // Вывод в глобал
    if(!global.defaultStructures) global.defaultStructures = {};
    global.defaultStructures.defDimansionItemStructure = defDimensionItemStructure;

})(this);