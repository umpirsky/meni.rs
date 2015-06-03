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

      $(document).on('click', 'slick a', function() {
        $scope.startAt = $(this).data('index');

        modalInstance && modalInstance.dismiss();

        $modal.open({
          templateUrl: 'views/modal.html',
          size: 'md',
          scope: $scope,
        });
      });
    }

    function link(scope, element, attrs, ctrl) {
    }
});
