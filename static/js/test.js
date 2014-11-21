/**
 * Created by ПК on 21.11.2014.
 */
(function(api) {

    // Создаем тестовый алгоритм
    var testAlg = new api.Algorithm();


    // Создаем тестовое значение для расчета
    var testValue = new api.Value('val_1', null, function() {

        return 1 + 1;

    });

    var step1 = new api.Step(
            '<div>Я результат шага 1</div>',
            testValue,
            new api.Dialog(
                '<div>Я диалог шага 1</div>',
                []
            )
        ),
        step2 = new api.Step(
            '<div>Я - результат шага 2</div>',
            new api.Value('val_2', 'val_1', function(req){
                return req[0] * 2;
            })
        );

    testAlg.addSteps([step1, step2]);

    console.log(testAlg.scope);

    var t = 1;

    this.avaliableAlgorithms = [testAlg];

})(this.algorithmApi);