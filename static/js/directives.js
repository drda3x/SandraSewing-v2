/**
 *  Angular-директивы и связующие объектры
 */

(function(window) {
    var app = angular.module('s_sewing', []);

    // Директивы
    // Директива поведения главного контейнера (body)
    app.directive('mainDirective', function() {
        return {
            restrict: 'A',
            controller: function($scope) {

                $scope.dimensions.items = window.initial_data.test_dimensions;

                $scope.appWindows = {
                    currentWindow: 'main',
                    changeCurrent: function(window, item) {
                        this.currentWindow = window;
                        $scope.dimensions.currentItem = item;
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

                $scope.selectedItem = null;

                $scope.select = function(item) {
                    this.selectedItem = item.id;
                };

                $scope.isSelected = function(item) {
                    return item.id == this.selectedItem;
                };

                $scope.removeItem = function(item) {
                    var items = $scope.items;

                    // Проходим по списку и удаляем нужный нам элемент
                    for(var i= 0, j= items.length; i<j; i++) {
                        if(items[i].id == item.id) {
                            items.splice(i,1);
                            break;
                        }
                    }
                };
            },
            controllerAs: 'dimCtrl',
            templateUrl: 'templates/dimension_menu.html',
            replace: true
        }
    });

    app.directive('newDimensionWindow', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/dimension_window.html',
            controller: function($scope) {

                $scope.itemName = null;
                $scope.item = null;

                $scope.init = function(item) {
                    this.models.itemName = (item) ? item.name : null;
                    this.models.item = item;
                };

                $scope.create_or_update = function(item) {
                    if(this.models.itemName && this.models.itemName.length > 0) {
                        if(!this.models.item) {
                            global.dimensions.create(this.models.itemName);
                        } else {
                            this.models.item.name = this.models.itemName;
                        }
                    }
                    return true;
                };
            }
        };
    });

    // Контроллеры

})(this);