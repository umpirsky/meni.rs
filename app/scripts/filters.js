'use strict';

angular.module('meniFilters', []).filter('thumbnail', function() {
  return function(url) {
    return url.replace('images/', 'images/thumbnails/');
  };
});
