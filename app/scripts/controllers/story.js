'use strict';

/**
 * @ngdoc function
 * @name zbsApp.controller:StoryCtrl
 * @description
 * # StoryCtrl
 * Controller of the zbsApp
 */
angular.module('zbsApp')
  .controller('StoryCtrl', ['$scope', 'gameService', function ($scope, gameService) {
    $scope.pageClass = 'page-story';
    $scope.viewName = 'Story';
    $scope.commandLine = ''; // not working!
    $scope.story = {};

    $scope.initialize = function() {
      $scope.story = gameService.getCurrentTurn();
    };

    $scope.update = function() {
      $scope.story = gameService.getCurrentTurn();
    };

    $scope.addNoun = function(noun) {
      alert(noun);
    };

    $scope.sendCommand = function($event) {
      var keyCode = window.event ? $event.keyCode : $event.which;
      if (keyCode == 13) {
        gameService.sendCommand($scope.commandLine);
        $scope.update();
        $scope.commandLine = '';
      }
    };

    $scope.initialize();
  }]);
