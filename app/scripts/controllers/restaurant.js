'use strict';

/**
 * @name restaurantsApp.controller:RestaurantCtrl
 */
angular.module('restaurantsApp')
  .controller('RestaurantCtrl', function ($scope, $routeParams, $http) {
    $scope.zoomed = false;

    $http.get('data/' + $routeParams.slug + '.json').success(function(data) {
      $scope.restaurant = data;
    });

    $scope.zoom = function(index) {
      $scope.zoomed = true;
    };

    $scope.unzoom = function() {
      $scope.zoomed = false;
    };
  });
