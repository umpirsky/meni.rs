'use strict';

/**
 * @name restaurantsApp.controller:LocationCtrl
 */
angular.module('restaurantsApp')
  .controller('LocationCtrl', function ($scope, $routeParams, $http) {
    $http.get('data/' + $routeParams.location + '.json').success(function(data) {
      $scope.restaurants = data;
    });
  });
