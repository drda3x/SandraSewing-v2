(function() {
    var app = angular.module('s_sewing', []);

    // Директивы
    // Директива поведения главного контейнера (body)
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

    // Директива поведения меню с мерками
    app.directive('dimensions', function() {
        return {
            restrict: 'E',
            controller: function($scope) {
                $scope.dimensions_menu = {

                    // Список - мерки
                    items: [
                        {id: 1, name: 'Мерка 1'},
                        {id: 2,name: 'Мерка 2'},
                        {id: 3,name: 'Мерка 3'}
                    ],

                    // Объект для манипуляций со списком
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

                        // Метод для добавления новых элементов
                        addNewItem: function() {},

                        // Метод для удаления элементов
                        removeItem: function(item) {
                            var items = $scope.dimensions_menu.items;

                            // Проходим по списку и удаляем нужный нам элемент
                            for(var i= 0, j= items.length; i<j; i++) {
                                if(items[i].id == item.id) {
                                    items.splice(i,1);
                                    break;
                                }
                            }
                        }

                    }
                };

            },
            controllerAs: 'dimCtrl',
            templateUrl: './templates/dimension_menu.html',
            replace: true
        }
    });

    app.directive('newDimensionWindow', function() {
        return {
            restrict: 'E',
            templateUrl: './templates/dimension_window.html'
        };
    });

    // Контроллеры

})();