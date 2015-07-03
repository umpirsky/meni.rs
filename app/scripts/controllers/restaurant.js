'use strict';

/**
 * @name restaurantsApp.controller:RestaurantCtrl
 */
angular.module('restaurantsApp')
  .controller('RestaurantCtrl', function ($rootScope, $scope, $routeParams, $http, $modalStack) {
    $http.get('data/' + $routeParams.location + '/' + $routeParams.slug + '.json').success(function(data) {
      $scope.restaurant = data;

      $rootScope.title = $scope.restaurant.name;
    });

    $scope.close = function() {
      $modalStack.dismissAll();
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
