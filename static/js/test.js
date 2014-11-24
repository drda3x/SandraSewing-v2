/**
 * Created by ПК on 21.11.2014.
 */
(function(api) {

    // Создаем тестовый алгоритм
    var testAlg = new api.Algorithm('HAAALK');

    var step0 = new api.Step(
            '<div>Требуется ли продолжить работу алгоритма? </div>' +
            '<input type="button" value="Нет"> ' +
            '<input type="button" value="Да">'
        ),
        step1 = new api.Step(
            '<div>Я результат шага 1: <<val_1>></div>',
            new api.Value('val_1', 'inp_1', function() {
                return 1 + 1;
            })
        );

    testAlg.addSteps([step0, step1]);

    var t = 1;

    this.avaliableAlgorithms = [testAlg];

})(this.algorithmApi);