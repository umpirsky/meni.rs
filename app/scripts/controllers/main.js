'use strict';

/**
 * @name restaurantsApp.controller:MainCtrl
 */
angular.module('restaurantsApp')
  .controller('MainCtrl', function ($scope, $http, $location, $cookies, $timeout) {
    $scope.goToLocation = function(location) {
      switch(location) {
        case 'Niš':
          $location.path('/nis');
          break;
        case 'Novi Sad':
          $location.path('/novi-sad');
          break;
      }

      $timeout(function() {
        $scope.$apply();
      });
    };

    var city = $cookies.get('restaurants_location');
    if (city) {
      $scope.goToLocation(city);
    } else {
      geolocator.locate(function (geolocation) {
        if ('RS' != geolocation.address.countryCode) {
          return;
        }

        var expires = new Date();
        expires.setMonth(expires.getMonth() + 1);
        $cookies.put('restaurants_location', geolocation.address.city, {'expires': expires});

        $scope.goToLocation(geolocation.address.city);
      });
    }
  });
