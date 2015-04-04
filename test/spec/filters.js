'use strict';

describe('filter', function() {

  beforeEach(module('restaurantsFilters'));

  describe('thumbnail', function() {
    it('should convert image path to thumbnail image path',
        inject(function(thumbnailFilter) {
      expect(thumbnailFilter('images/menu/cezar/1.jpg')).toBe('images/thumbnails/menu/cezar/1.jpg');
      expect(thumbnailFilter('images/menu/good-food/3.jpg')).toBe('images/thumbnails/menu/good-food/3.jpg');
    }));
  });
});
