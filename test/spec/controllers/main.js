'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('meniApp'));

  var MainCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/restaurants.json').
      respond([
        {
          "name": "Pasta Bar 2x2",
          "slug": "dva-puta-dva",
          "logo": "images/logo/dva-puta-dva.jpg"
        },
        {
          "name": "Pink Panter",
          "slug": "pink-panter",
          "logo": "images/logo/pink-panter.jpg"
        }
      ]);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of restaurants to the scope', function () {
    $httpBackend.flush();
    expect(scope.restaurants.length).toBe(2);
  });
});
