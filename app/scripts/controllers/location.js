'use strict';

/**
 * @name restaurantsApp.controller:LocationCtrl
 */
angular.module('restaurantsApp')
  .controller('LocationCtrl', function ($rootScope, $scope, $routeParams, $http, locationByKeyLocative) {
    $rootScope.title = 'Meniji restorana u ' + locationByKeyLocative($routeParams.location) + ', naručite hranu za dostavu brzo i lako';

    $http.get('data/' + $routeParams.location + '.json').success(function(data) {
      $scope.restaurants = data;
    });
  });
