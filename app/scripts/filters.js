'use strict';

angular.module('restaurantsFilters', [])
  .filter('thumbnail', function() {
    return function(url) {
      return url.replace('images/', 'images/thumbnails/');
    };
  })
  .filter('urlText', ['urlText', function(urlText) {
    return function(url) {
      return urlText(url);
    };
  }])
  .filter('urlIcon', ['urlIcon', function(urlIcon) {
    return function(url) {
      return urlIcon(url);
    };
  }])
;
