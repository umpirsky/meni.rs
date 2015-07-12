'use strict';

describe('filter', function() {

  beforeEach(module('restaurantsApp'));

  describe('thumbnail', function() {
    it('should convert image path to thumbnail image path',
        inject(function(thumbnailFilter) {
      expect(thumbnailFilter('images/menu/cezar/1.jpg', 200)).toBe('images/thumbnails-200/menu/cezar/1.jpg');
      expect(thumbnailFilter('images/menu/good-food/3.jpg', 600)).toBe('images/thumbnails-600/menu/good-food/3.jpg');
    }));
  });
});
