/**
 *  Angular-директивы и связующие объектры
 */

(function(window) {
    var app = angular.module('s_sewing', []);

    var global = {
        dimensions: {
            // Список мерок
            items: window.initial_data.test_dimensions,
            
            // Текущая мерка
            currentItem: null,

            // Метод для создания новой мерки
            create: function(name, type, values) {
                this.items.push(
                    new window.defaultStructures.defDimansionItemStructure(
                        this.items.length + 1,
                        name,
                        type,
                        values
                    )
                );
            }
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
                        if(global.Ctrls.dimensionWindowCtrl) {
                            global.Ctrls.dimensionWindowCtrl.init(item);
                        }
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
            templateUrl: 'templates/dimension_menu.html',
            replace: true
        }
    });

    var dimWindowCtrl = {
        dimensions: global.dimensions,
        c_name: ((global.dimensions.currentItem) ? global.dimensions.currentItem.name : null),
        create_or_update: function() {
            if(this.dimensions.currentItem && !this.dimensions.currentItem.id && this.dimensions.currentItem.name.length > 0) {
                this.dimensions.currentItem.id = this.dimensions.items.length+1;
                this.dimensions.items.push(this.dimensions.currentItem);
            }

            return true;
        }
    };

/*    var dimWinCtrl = {
        dimensions: global.dimensions,
        create_or_update: function() {
            if(this.dimensions.currentItem && !this.dimensions.currentItem.id && this.dimensions.currentItem.name.length > 0) {
                this.dimensions.currentItem.id = this.dimensions.items.length+1;
                this.dimensions.items.push(this.dimensions.currentItem);
            }

            return true;
        }
    };*/

    var dimWinCtrl = {
        models: {
            itemName: null,
            item: null
        },
        init: function(item) {
            this.models.itemName = (item) ? item.name : null;
            this.models.item = item;
        },
        create_or_update: function() {
            if(this.models.itemName && this.models.itemName.length > 0) {
                if(!this.models.item) {
                    global.dimensions.create(this.models.itemName);
                } else {
                    this.models.item.name = this.models.itemName;
                }
            }
            return true;
        }
    };

    app.directive('newDimensionWindow', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/dimension_window.html',
            controller: function($scope) {
                var dimWindowCtrl = {
                    models: {
                        itemName: null,
                        item: null
                    },
                    init: function(item) {
                        this.models.itemName = (item) ? item.name : null;
                        this.models.item = item;
                    },
                    create_or_update: function() {
                        if(this.models.itemName && this.models.itemName.length > 0) {
                            if(!this.models.item) {
                                global.dimensions.create(this.models.itemName);
                            } else {
                                this.models.item.name = this.models.itemName;
                            }
                        }
                        return true;
                    }
                };

                if(!global.Ctrls) {
                    global.Ctrls = {}
                }

                global.Ctrls.dimensionWindowCtrl = dimWindowCtrl;
                $scope.dimWindowCtrl = dimWindowCtrl;
            }
        };
    });

    // Контроллеры

})(this);