/**
 * Тестовые данные
 */

(function (global) {
    "use strict";

    // Размеры
    var test_dimensions = [
        {
            id: 1,
            name: 'Мерка 1',
            type: 'woman',
            values: [
                {name:'ЦГ',value: 15},
                {name:'ВГ',value: 60},
                {name:'ДПТ',value: 33},
                {name: 'ВПКП', value: 28}
            ]
        },
        {
            id: 2,
            name: 'Мерка 2',
            type: 'men',
            values: [
                {name:'ПОТ',value: 15},
                {name:'ПОБ',value: 60},
                {name:'ДИ',value: 33}
            ]
        },
        {
            id: 3,
            name: 'Мерка 3',
            type: 'woman',
            values: [
                {name:'ОШ',value: 15},
                {name:'ОБ',value: 60},
                {name:'ШС',value: 33}
            ]
        }
    ];

    if(!global.initial_data) global.initial_data = {};
    global.initial_data.test_dimensions = test_dimensions;

})(this);