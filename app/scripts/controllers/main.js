'use strict';

/**
 * @name restaurantsApp.controller:MainCtrl
 */
angular.module('restaurantsApp')
  .controller('MainCtrl', function ($scope, $location, $timeout, locationDetect) {
    locationDetect(function (location) {
      if (null === location) {
        return;
      }

      $location.path('/' + location);

      $timeout(function() {
        $scope.$apply();
      });
    });
  });
