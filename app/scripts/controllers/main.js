'use strict';

/**
 * @name restaurantsApp.controller:MainCtrl
 */
angular.module('restaurantsApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    geolocator.locate(function onGeoSuccess(geolocation) {
      if ('RS' != geolocation.address.countryCode) {
        return;
      }

      switch(geolocation.address.city) {
        case 'Niš':
          $location.path('/nis');
          break;
        case 'Novi Sad':
          $location.path('/novi-sad');
          break;
      }

      $scope.$apply();
    });
  });
