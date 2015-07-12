'use strict';

angular.module('restaurantsApp')
  .factory('urlText', [function() {
    return function(url) {
      var link = document.createElement('a');
      link.href = url;

      if (-1 !== link.href.indexOf('facebook.com/pages')) {
        return window.decodeURIComponent(link.pathname.split('/')[2]);
      }

      if (-1 !== link.hostname.indexOf('facebook')) {
        return link.pathname.replace(/\//, '');
      }

      return link.hostname.replace('www.', '');
    }
  }])
  .factory('urlIcon', [function() {
    return function(url) {
      var link = document.createElement('a');
      link.href = url;

      if (-1 !== link.hostname.indexOf('facebook')) {
        return 'facebook';
      }

      return 'link';
    }
  }])
;
