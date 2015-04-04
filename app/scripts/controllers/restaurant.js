'use strict';

/**
 * @name restaurantsApp.controller:RestaurantCtrl
 */
angular.module('restaurantsApp')
  .controller('RestaurantCtrl', function ($scope, $routeParams, $http) {
    $http.get('data/' + $routeParams.slug + '.json').success(function(data) {
      $scope.restaurant = data;
    });
  });
