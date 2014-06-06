/**
 * Created by al on 05.06.14.
 *
 * Логика работы ресурса
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

    .directive('mydir', function() {
            return {
                restrict: 'E',
                template: '<span>Hello</span>',
                replace: true,
                controller: function($scope, $element) {
                    $scope.fnc = function() {
                        alert('ctrl is working');
                    }
                }
            }
        })
    .directive('appendedDiv', function() {
        return {
            controller: function($scope, $element) {
                $scope.appendedFunc = function() {
                    var a = $element;
                }
            },
            template: '<div>Привет, как дела?</div>',
            restrict: 'E',
            replce: true
        }
    })