'use strict';

/**
 * @ngdoc function
 * @name zbsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zbsApp
 */
angular.module('zbsApp')
  .controller('MainCtrl', function ($scope,$location) {

    $scope.storyTitle = 'The Shadow in the Cathedral';

    $scope.copyrightText =  'All Rights Reserved - Textfyre, Inc.';

});
