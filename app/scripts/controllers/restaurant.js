'use strict';

/**
 * @name meniApp.controller:RestaurantCtrl
 */
angular.module('meniApp')
  .controller('RestaurantCtrl', function ($scope, $routeParams, $http, Lightbox) {
    $http.get('restaurants/' + $routeParams.slug + '.json').success(function(data) {
      $scope.restaurant = data;

      $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});
      $('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});
    });

    $scope.openLightboxModal = function (index) {
      Lightbox.openModal($scope.restaurant.images, index);
    };
  });
