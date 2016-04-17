'use strict';

/* Directives */

// var app = angular.module('NileArtGallery', []).
NileArtGallery.directive('nFooter', [function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/footer/footer.html'
  };
}]);
