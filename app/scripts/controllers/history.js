'use strict';

/**
 * @ngdoc function
 * @name zbsApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the zbsApp
 */
angular.module('zbsApp')
  .controller('HistoryCtrl', function ($scope) {
    $scope.pageClass = 'page-history';
    $scope.viewName = 'History';
  });
