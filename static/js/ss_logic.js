/**
 * Created by al on 05.06.14.
 *
 * Логика работы ресурса
 *
 *
 * '<ul id="dimensions">' +
 '<li class="current_dim hover_class" ng-repeat="dim in dimensions">{{ dim }}' +
 '<div class="sub_menu">' +
 '<img class="sub_menu_list" src="img/pen.png " />' +
 '<img class="sub_menu_list" src="img/x.png " />' +
 '</div>'
 */

angular.module('s_sewing',[])
    .directive('body', function() {
            return {
                restrict: 'E',
                scope: {},
                controller: function($scope, $element) {
                    $scope.openAddWindow = function() {
                        $element.append('<div appendedDiv ng-click="appendedFunc()"></div>');
                    }
                },
                link: function(scope, element, attrs) {
                    var a = element;
                }
            }
        })

function DimensionsCtrl($scope) {
    $scope.dimensions = [
        {name: 'Мерка 1'},
        {name: 'Мерка 2'},
        {name: 'Мерка 3'}
    ]
    $scope.last_dimension = $scope.dimensions[$scope.dimensions.length-1];
    $scope.dimensions.length--;
}