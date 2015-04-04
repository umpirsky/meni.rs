'use strict';

angular.module('restaurantsFilters', []).filter('thumbnail', function() {
  return function(url) {
    return url.replace('images/', 'images/thumbnails/');
  };
});
