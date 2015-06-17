'use strict';

/**
 * @name restaurantsApp
 */
angular
  .module('restaurantsApp', [
    'restaurantsServices',
    'restaurantsFilters',
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'slick',
    'angular-flexslider',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:location/:slug', {
        templateUrl: 'views/restaurant.html',
        controller: 'RestaurantCtrl'
      })
      .when('/:location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $modalStack) {
    $rootScope.$on('$routeChangeSuccess', function () {
      $modalStack.dismissAll();
    });
  })
;
