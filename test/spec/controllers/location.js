'use strict';

describe('Controller: LocationCtrl', function () {

  // load the controller's module
  beforeEach(module('restaurantsApp'));

  var LocationCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $routeParams, _$httpBackend_) {
    $routeParams.location = 'nis';
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/nis.json').
      respond([
        {
          'name': 'Pasta Bar 2x2',
          'slug': 'dva-puta-dva',
          'logo': 'images/logo/dva-puta-dva.jpg'
        },
        {
          'name': 'Pink Panter',
          'slug': 'pink-panter',
          'logo': 'images/logo/pink-panter.jpg'
        }
      ]);

    scope = $rootScope.$new();
    LocationCtrl = $controller('LocationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of restaurants to the scope', function () {
    $httpBackend.flush();
    expect(scope.restaurants.length).toBe(2);
  });
});
