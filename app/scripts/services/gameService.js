/**
 * @ngdoc service
 * @name zbsApp.gameService
 * @description
 * # gameService
 * Service in the zbsApp.
 */
angular.module('zbsApp')
  .factory('gameService', function gameService() {
    'use strict';

    //
    // Test data for now. This will eventually be loaded by the VM.
    //
    var data = {
      history: [{
        command: '',
        location: 'Kitchen',
        prologue: 'This is the prologue and is only used at start of game...',
        content: '<p>This is the kitchen.</p>',
        score: 0,
        turn: 1,
        time: '9:00 am',
        inventory: {},
        chapter: 1,
        chapterTitle: 'The Beginning',
        words: {},
        hints: {},
        maps: {}
      },{
        command: 'n',
        location: 'Living Room',
        prologue: '',
        content: '<p>This is the living room.</p>',
        score: 0,
        turn: 2,
        time: '9:01 am',
        inventory: {},
        chapter: 1,
        chapterTitle: 'The Beginning',
        words: {},
        hints: {},
        maps: {}
      },{
        command: 's',
        location: 'Kitchen',
        prologue: '',
        content: '<p>This is the kitchen.</p>',
        score: 0,
        turn: 3,
        time: '9:02 am',
        inventory: {},
        chapter: 1,
        chapterTitle: 'The Beginning',
        words: {},
        hints: {},
        maps: {}
      },{
        command: 'w',
        location: 'Backyard',
        prologue: '',
        content: '<p>This is the backyard.</p>',
        score: 0,
        turn: 4,
        time: '9:03 am',
        inventory: {},
        chapter: 1,
        chapterTitle: 'The Beginning',
        words: {},
        hints: {},
        maps: {}
      }],
      current: function() {
        return internal.history[internal.history.length-1];
      }
    };

    var service = {

      currentTurn: 0,
      maxTurns: 3,

      initialize: function() {
        service.currentTurn = 0;
      },

      //
      // This is current running test turns regardless of command...
      //
      sendCommand: function(command) {

        if (service.currentTurn == service.maxTurns) {
          service.currentTurn = 0;
        } else {
          service.currentTurn++;
        }

        return data.history[service.currentTurn];
      },

      getHistory: function(turn) {
        if (turn >= 0 && turn < data.history.length) {
          return data.history[turn];
        }
      },

      getCurrentTurn: function() {
        return data.history[service.currentTurn];
      },

      getRestorePoint: function() {
      },

      addTurnToGameModel: function() {

      },

      copyGame: function(gameModel) {

      },

      storeSaveFile: function(gameModel, memoryStream) {

      },

      restoreGame: function(gameModel) {

      },

      storeCurrentGame: function() {

      },

      storeSaveGameModel: function() {

      },

      getChannelList: function(channelData) {

      },

      getWordList: function(xmlWordList) {

      },

      createViewModelForRestore: function(turn) {

      },

      addHeader: function(gameViewModel, content, lineBreak, isBold) {

      },

      addRuns: function(paragraph, content) {

      },

      applyHyperlinks: function(run, runInfo) {

      },

      addParagraph: function(gameViewModel, text, alignment) {

      }

    };

    return {
      initialize: service.initialize,
      sendCommand: service.sendCommand,
      getHistory: service.getHistory,
      getCurrentTurn: service.getCurrentTurn
    };

  });
