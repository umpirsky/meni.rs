'use strict';

/**
 * @ngdoc function
 * @name meniApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meniApp
 */
angular.module('meniApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
