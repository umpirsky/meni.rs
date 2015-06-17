'use strict';

angular.module('restaurantsServices', ['ngCookies'])
  .factory('locationDetect', ['$location', '$timeout', '$cookies', function($location, $timeout, $cookies) {
    return function(located) {
      var handleLocation = function(location) {
        switch(location) {
          case 'Niš':
            located('nis');
            break;
          case 'Novi Sad':
            located('novi-sad');
            break;
        }
      };

      var city = $cookies.get('restaurants_location');
      if (city) {
        handleLocation(city);
      } else {
        geolocator.locate(function (geolocation) {
          if ('RS' != geolocation.address.countryCode) {
            return;
          }

          var expires = new Date();
          expires.setMonth(expires.getMonth() + 1);
          $cookies.put('restaurants_location', geolocation.address.city, {'expires': expires});

          handleLocation(geolocation.address.city);
        });
      }
    }
  }])
;
