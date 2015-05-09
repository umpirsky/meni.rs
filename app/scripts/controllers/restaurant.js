'use strict';

/**
 * @name restaurantsApp.controller:RestaurantCtrl
 */
angular.module('restaurantsApp')
  .controller('RestaurantCtrl', function ($scope, $routeParams, $http, $modal) {
    $http.get('data/' + $routeParams.slug + '.json').success(function(data) {
      $scope.restaurant = data;
    });

    $scope.zoom = function(index) {
      $scope.startAt = index;

      $modal.open({
        templateUrl: 'views/modal.html',
        scope: $scope
      });
    };

    $scope.breakpoints = [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }];
  });
