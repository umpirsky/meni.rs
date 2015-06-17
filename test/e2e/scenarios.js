'use strict';

describe('Restaurants App', function() {
  describe('Location list view', function() {
    beforeEach(function() {
      browser.get('/');
    });

    it('should list Niš and Novi Sad', function() {
      expect(element.all(by.css('.location-item')).count()).toBe(2);
      expect(element.all(by.css('h2')).getText()).toEqual(['Niš', 'Novi Sad'])
    });
  });

  describe('Restaurant list view', function() {
    beforeEach(function() {
      browser.get('/#/nis');
    });

    it('should list restaurants', function() {
      var restaurantList = element.all(by.repeater('restaurant in restaurants'));

      expect(restaurantList.count()).toBeGreaterThan(20);
    });

    it('should filter restaurant list as a user types into the search box', function() {
      var restaurantList = element.all(by.repeater('restaurant in restaurants'));
      var query = element(by.model('query'));

      query.sendKeys('Cezar');
      expect(restaurantList.count()).toBe(1);
    });
  });
});
