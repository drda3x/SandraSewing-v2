(function() {
    var app = angular.module('s_sewing', []);

    var global = {
        dimensions: {
            items: [
                {id: 1, name: 'Мерка 1'},
                {id: 2, name: 'Мерка 2'},
                {id: 3, name: 'Мерка 3'}
            ],
            currentItem: null
        }
    };

    // Директивы
    // Директива поведения главного контейнера (body)
    app.directive('mainDirective', function() {
        return {
            restrict: 'A',
            controller: function($scope) {

                $scope.appWindows = {
                    currentWindow: 'main',
                    changeCurrent: function(window, item) {
                        this.currentWindow = window;
                        global.dimensions.currentItem = item;
                        var e;
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
                $scope.dimensionsMenuCtrl = {

                    // Список - мерки
                    items: global.dimensions.items,

                    // Объект для манипуляций со списком
                    render_conf: {
                        // Метод для удаления элементов
                        removeItem: function(item) {
                            var items = $scope.dimensionsMenuCtrl.items;

                            // Проходим по списку и удаляем нужный нам элемент
                            for(var i= 0, j= items.length; i<j; i++) {
                                if(items[i].id == item.id) {
                                    items.splice(i,1);
                                    break;
                                }
                            }
                        },
                        selectedItem: null,
                        select: function(item) {
                            this.selectedItem = item.id;
                        },
                        isSelected: function(item) {
                            var b = item.id == this.selectedItem;
                            return b;
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
            templateUrl: './templates/dimension_window.html',
            controller: function($scope) {
                $scope.dimWindowCtrl = {
                    dimensions: global.dimensions,
                    create_or_update: function() {
                        if(!this.dimensions.currentItem.id) {
                            this.dimensions.currentItem.id = this.dimensions.items.length+1;
                            this.dimensions.items.push(this.dimensions.currentItem);
                        } else {
                            console.log('cr');
                        }

                        return true;
                    }
                };
            }
        };
    });

    // Контроллеры

})();