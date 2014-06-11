(function() {
    var app = angular.module('s_sewing', []);

    // Директивы
    app.directive('mainDirective', function() {
        return {
            restrict: 'A',
            controller: function($scope) {

                $scope.appWindows = {
                    currentWindow: 'main',
                    changeCurrent: function(window) {
                        this.currentWindow = window;
                    }
                };

                $scope.test = 'dim';
            }
        };
    });

    app.directive('dimensions', function() {
        return {
            restrict: 'E',
            controller: function($scope) {
                $scope.dimensions_menu = {
                    items: [
                        {name: 'Мерка 1'},
                        {name: 'Мерка 2'},
                        {name: 'Мерка 3'}
                    ],
                    render_conf: {
                        c_index: 0,
                        isLast: function() {
                            if (this.c_index == $scope.dimensions_menu.items.length-1) {
                                this.c_index = 0;
                                return 'last_dim';
                            } else {
                                this.c_index++;
                            }
                        },
                        addNewItem: function() {}
                    }
                };

            },
            controllerAs: 'dimCtrl',
            templateUrl: './templates/dimension_menu.html',
            replace: true
        }
    });

    // Контроллеры

})();