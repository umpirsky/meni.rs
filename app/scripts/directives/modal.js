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
      var modalInstance;

      this.show = function(index) {
        modalInstance && modalInstance.dismiss();

        $scope.startAt = index;

        $modal.open({
          templateUrl: 'views/modal.html',
          size: 'md',
          scope: $scope,
        });
      };
    }

    function link(scope, element, attrs, ctrl) {
    }
});
