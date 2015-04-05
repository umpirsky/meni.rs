'use strict';

/**
 * @name restaurantsApp
 */
angular
  .module('restaurantsApp', [
    'restaurantsFilters',
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'slick',
    'angular-flexslider'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/nis/:slug', {
        templateUrl: 'views/restaurant.html',
        controller: 'RestaurantCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
