'use strict';

/**
 * @name meniApp
 */
angular
  .module('meniApp', [
    'meniFilters',
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'slick'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/meni/:slug', {
        templateUrl: 'views/restaurant.html',
        controller: 'RestaurantCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
