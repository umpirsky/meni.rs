'use strict';

angular.module('restaurantsFilters', [])
  .filter('thumbnail', function() {
    return function(url, size) {
      return url.replace('images/', 'images/thumbnails-' + size + '/');
    };
  })
  .filter('phoneUrl', function() {
    return function(phone) {
      return phone ? 'tel:' + phone.split(',')[0] : phone;
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
