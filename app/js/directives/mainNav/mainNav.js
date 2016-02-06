'use strict';

/* Directives */

// var app = angular.module('NileArtGallery', []).
NileArtGallery.directive('mainNav', [function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/mainNav/mainNav.html'
  };
}]);
