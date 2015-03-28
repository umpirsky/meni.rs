'use strict';

/**
 * @name meniApp.controller:MainCtrl
 */
angular.module('meniApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('restaurants/restaurants.json').success(function(data) {
      $scope.restaurants = data;
    });
  });
