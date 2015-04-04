'use strict';

/**
 * @name restaurantsApp.controller:MainCtrl
 */
angular.module('restaurantsApp')
  .controller('MainCtrl', function ($scope, $http) {
    new Placeholdem($('#query'));

    $http.get('data/restaurants.json').success(function(data) {
      $scope.restaurants = data;
    });
  });
