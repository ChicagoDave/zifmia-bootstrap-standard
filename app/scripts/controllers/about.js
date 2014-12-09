'use strict';

/**
 * @ngdoc function
 * @name zbsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zbsApp
 */
angular.module('zbsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.pageClass = 'page-about';
    $scope.viewName = 'About';
  });
