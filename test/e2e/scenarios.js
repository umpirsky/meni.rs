'use strict';

describe('Meni App', function() {

  describe('Restaurant list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter restaurant list as a user types into the search box', function() {

      var restaurantList = element.all(by.repeater('restaurant in restaurants'));
      var query = element(by.model('query'));

      expect(restaurantList.count()).toBe(7);

      query.sendKeys('Cezar');
      expect(restaurantList.count()).toBe(1);

      query.clear();
      query.sendKeys('pi');
      expect(restaurantList.count()).toBe(2);
    });
  });
});
