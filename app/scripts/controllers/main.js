'use strict';

/**
 * @name meniApp.controller:MainCtrl
 */
angular.module('meniApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('restaurants/restaurants.json').success(function(data) {
      $scope.restaurants = data;

      Placeholdem($('#query'));

      $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});
      $('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});
    });
  });
