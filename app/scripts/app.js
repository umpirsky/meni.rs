'use strict';

/**
 * @ngdoc overview
 * @name meniApp
 * @description
 * # meniApp
 *
 * Main module of the application.
 */
angular
  .module('meniApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/meni/:slug', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
