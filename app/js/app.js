'use strict';


// Declare app level module which depends on filters, and services
var NileArtGallery = angular.module('NileArtGallery', [
    'ngRoute',
    'angular-carousel',
    'ngTouch'
  ])
  .config(['$routeProvider', function($routeProvider, $locationProvider){) {
    $routeProvider.when('/exhibitions', {
      templateUrl: 'partials/exhibitions.html',
      controller: ''
    });
    $routeProvider.when('/artist', {
      templateUrl: 'partials/artists.html',
      controller: ''
    });
    $routeProvider.when('/store', {
      templateUrl: 'partials/store.html',
      controller: ''
    });
    $routeProvider.when('/home', {
      templateUrl: 'partials/home.html',
      controller: ''
    });
    $routeProvider.when('/gallery', {
      templateUrl: 'partials/gallery.html',
      controller: ''
    });
    $routeProvider.when('/aboutUs', {
      templateUrl: 'partials/aboutUs.html',
      controller: ''
    });
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
    $locationProvider.html5Mode(true); //activate HTML5 Mode
  }]);
