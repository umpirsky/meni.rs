'use strict';

/**
 * @name meniApp
 */
angular
  .module('meniApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'bootstrapLightbox',
    'slick'
  ])
  .config(function ($routeProvider, LightboxProvider) {
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

    LightboxProvider.templateUrl = 'views/lightbox.html';
    LightboxProvider.getImageUrl = function (image) {
      return image;
    };
  });
