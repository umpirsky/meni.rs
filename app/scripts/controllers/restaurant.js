'use strict';

/**
 * @name meniApp.controller:RestaurantCtrl
 */
angular.module('meniApp')
  .controller('RestaurantCtrl', function ($scope, $routeParams, $http) {
    $http.get('restaurants/' + $routeParams.slug + '.json').success(function(data) {
      $scope.restaurant = data;
    });

    $scope.openLightboxModal = function (index) {
      Lightbox.openModal($scope.restaurant.images, index);
    };
  });
