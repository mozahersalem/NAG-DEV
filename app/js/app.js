'use strict';


// Declare app level module which depends on filters, and services
var NileArtGallery = angular.module('NileArtGallery', [
    'ngRoute',
    'angular-carousel',
    'ngTouch'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/exhibitions', {
        templateUrl: 'partials/exhibitions.html',
        controller: ''
      }).when('/artist', {
        templateUrl: 'partials/artists.html',
        controller: ''
      }).when('/store', {
        templateUrl: 'partials/store.html',
        controller: ''
      }).when('/home', {
        templateUrl: 'partials/home.html',
        controller: ''
      }).when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: ''
      }).when('/aboutUs', {
        templateUrl: 'partials/aboutUs.html',
        controller: ''
      }).otherwise({
        redirectTo: '/home'
    });
    // $locationProvider.html5Mode(true); //activate HTML5 Mode
  }]);
