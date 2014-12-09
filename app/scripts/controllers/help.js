'use strict';

/**
 * @ngdoc function
 * @name zbsApp.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the zbsApp
 */
angular.module('zbsApp')
  .controller('HelpCtrl', function ($scope) {
    $scope.pageClass = 'page-help';
    $scope.viewName = 'Help';
  });
