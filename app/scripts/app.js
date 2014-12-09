'use strict';

/**
 * @ngdoc overview
 * @name zbsApp
 * @description
 * # zbsApp
 *
 * Main module of the application.
 */
angular
  .module('zbsApp', ['ngResource','ngRoute','ngSanitize'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/story.html',
        controller: 'StoryCtrl'
      })
      .when('/maps', {
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl'
      })
      .when('/hints', {
        templateUrl: 'views/hints.html',
        controller: 'HintsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('addWord', function($compile) {
  return {
    restrict: "E",
    replace: false,
    scope : {
      word: '=',
      label: '='
    },
    link:  function (scope, element, attrs) {
      element.html('<span ng-click="addWord({{word}})">{{label}}</span>');
      $compile(element.contents())(scope);
    }
  }
});
