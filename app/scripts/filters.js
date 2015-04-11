'use strict';

angular.module('restaurantsFilters', [])
  .filter('thumbnail', function() {
    return function(url) {
      return url.replace('images/', 'images/thumbnails/');
    };
  })
  .filter('urlname', function() {
    return function(url) {
      var link = document.createElement('a');
      link.href = url;

      if (-1 !== link.href.indexOf('facebook.com/pages')) {
        return link.pathname.split('/')[2];
      }

      if (-1 !== link.hostname.indexOf('facebook')) {
        return link.pathname.replace(/\//, '');
      }

      return link.hostname.replace('www.', '');
    };
  })
  .filter('urlicon', function() {
    return function(url) {
      var link = document.createElement('a');
      link.href = url;

      if (-1 !== link.hostname.indexOf('facebook')) {
        return 'facebook';
      }

      return 'link';
    };
  })
;
