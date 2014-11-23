/**
 * Created by ПК on 21.11.2014.
 */
(function(api) {

    // Создаем тестовый алгоритм
    var testAlg = new api.Algorithm('HAAALK');


    // Создаем тестовое значение для расчета
    var testValue = new api.Value('val_1', 'inp_1', function() {

        return parseInt(arguments[0]) + 1;

    });

    var step1 = new api.Step(
            '<div>Я результат шага 1: <<val_1>></div>',
            testValue,
            '<div>Введите значения <input type="text" ng-model="stepValues[\'inp_1\']"></div>'
        ),
        step2 = new api.Step(
            '<div>Я - результат шага 2 <<val_1>> <<val_2>></div>',
            new api.Value('val_2', 'val_1', function(req){
                return req[0] * 2;
            })
        );

    testAlg.addSteps([step1, step2]);

    var t = 1;

    this.avaliableAlgorithms = [testAlg];

})(this.algorithmApi);