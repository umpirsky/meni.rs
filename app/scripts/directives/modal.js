'use strict';

angular.module('restaurantsApp')
  .directive('modal', function modal($modal) {
    return {
      link: link,
      controller: controller,
      restrict: 'A',
      bindToController: true,
      controllerAs: 'modal',
    };

    function controller($scope) {
    }

    function link(scope, element, attrs, ctrl) {
      element.on('click', function() {
        scope.startAt = $(this).data('index');

        $modal.open({
          templateUrl: 'views/modal.html',
          size: 'md',
          scope: scope,
        });
      });
    }
});
