'use strict';

angular.module('NileArtGallery').controller('ExhibitionsController', ['$scope', function($scope) {
  $scope.ExhibitionsCurrent = [{
    "name": "Visual Memories",
    "creator": "Nagi Farid",
    "date": "27/1/2016",
    "mainImage": "images/Exhibitions/NagiFarid/NagiFarid_main.jpg",
    "images": [
      "images/Exhibitions/NagiFarid/NagiFarid_01.jpg",
      "images/Exhibitions/NagiFarid/NagiFarid_02.jpg",
      "images/Exhibitions/NagiFarid/NagiFarid_03.jpg",
      "images/Exhibitions/NagiFarid/NagiFarid_04.jpg",
      "images/Exhibitions/NagiFarid/NagiFarid_05.jpg",
      "images/Exhibitions/NagiFarid/NagiFarid_06.jpg",
      "images/Exhibitions/NagiFarid/NagiFarid_07.jpg",
      "images/Exhibitions/NagiFarid/NagiFarid_08.jpg",
      "images/Exhibitions/NagiFarid/NagiFarid_09.jpg",
      "images/Exhibitions/NagiFarid/NagiFarid_10.jpg"
    ]
  }];
  $scope.Exhibitions = [{
    "name": "The Im-Possibelitites",
    "creator": "Noha Nagi",
    "date": "21/10/5015",
    "mainImage": "images/Exhibitions/NohaNagui/NohaNagui_main.jpg",
    "images": [
      "images/Exhibitions/NohaNagui/NohaNagui_01.jpg",
      "images/Exhibitions/NohaNagui/NohaNagui_02.jpg",
      "images/Exhibitions/NohaNagui/NohaNagui_03.jpg",
      "images/Exhibitions/NohaNagui/NohaNagui_04.jpg",
      "images/Exhibitions/NohaNagui/NohaNagui_05.jpg"
    ]
  }, {
    "name": "On the Edge",
    "creator": "Salah El- Meligy",
    "date": "10/5/2015",
    "mainImage": "images/Exhibitions/SalahElmeligy/SalahElmeligy_main.jpg",
    "images": [
      "images/Exhibitions/SalahElmeligy/SalahElmeligy_01.jpg",
      "images/Exhibitions/SalahElmeligy/SalahElmeligy_02.jpg",
      "images/Exhibitions/SalahElmeligy/SalahElmeligy_03.jpg"
    ]
  }, {
    "name": "The Silence of Music",
    "creator": "Suheil Baddour",
    "date": "18/3/2015",
    "mainImage": "images/Exhibitions/Suheil/Suheil_main.jpg",
    "images": [
      "images/Exhibitions/Suheil/Suheil_01.jpg",
      "images/Exhibitions/Suheil/Suheil_02.jpg",
      "images/Exhibitions/Suheil/Suheil_03.jpg",
      "images/Exhibitions/Suheil/Suheil_04.jpg",
      "images/Exhibitions/Suheil/Suheil_05.jpg",
      "images/Exhibitions/Suheil/Suheil_06.jpg",
      "images/Exhibitions/Suheil/Suheil_07.jpg",
      "images/Exhibitions/Suheil/Suheil_08.jpg",
      "images/Exhibitions/Suheil/Suheil_09.jpg",
      "images/Exhibitions/Suheil/Suheil_10.jpg",
      "images/Exhibitions/Suheil/Suheil_11.jpg",
      "images/Exhibitions/Suheil/Suheil_12.jpg",
      "images/Exhibitions/Suheil/Suheil_13.jpg",
      "images/Exhibitions/Suheil/Suheil_14.jpg",
      "images/Exhibitions/Suheil/Suheil_15.jpg",
      "images/Exhibitions/Suheil/Suheil_16.jpg",
      "images/Exhibitions/Suheil/Suheil_17.jpg",
      "images/Exhibitions/Suheil/Suheil_18.jpg",
      "images/Exhibitions/Suheil/Suheil_19.jpg",
      "images/Exhibitions/Suheil/Suheil_20.jpg",
      "images/Exhibitions/Suheil/Suheil_21.jpg",
      "images/Exhibitions/Suheil/Suheil_22.jpg",
      "images/Exhibitions/Suheil/Suheil_23.jpg",
      "images/Exhibitions/Suheil/Suheil_24.jpg",
      "images/Exhibitions/Suheil/Suheil_25.jpg",
      "images/Exhibitions/Suheil/Suheil_26.jpg",
      "images/Exhibitions/Suheil/Suheil_27.jpg"
    ]
  }];
  $scope.showExhibitionCurrent = function($index) {
    $scope.count = $index;
    $scope.exhibitionCurrent = $scope.ExhibitionsCurrent[$index];
    $scope.exhibition = $scope.ExhibitionsCurrent[$index];
    $scope.mainImage = $scope.ExhibitionsCurrent[$index].mainImage;
    $scope.name = $scope.ExhibitionsCurrent[$index].name;
    $scope.creator = $scope.ExhibitionsCurrent[$index].creator;
    $scope.date = $scope.ExhibitionsCurrent[$index].date;
    $scope.images = $scope.ExhibitionsCurrent[$index].images;
    // console.log($scope.exhibition);
    // console.log($scope.count);
    // console.log($scope.exhibitionName);
    // console.log($scope.images);
  };
  $scope.showExhibition = function($index) {
    $scope.count = $index;
    $scope.exhibitionCurrent = $scope.ExhibitionsCurrent[$index];
    $scope.exhibition = $scope.Exhibitions[$index];
    $scope.mainImage = $scope.Exhibitions[$index].mainImage;
    $scope.name = $scope.Exhibitions[$index].name;
    $scope.creator = $scope.Exhibitions[$index].creator;
    $scope.date = $scope.Exhibitions[$index].date;
    $scope.images = $scope.Exhibitions[$index].images;
    // console.log($scope.exhibition);
    // console.log($scope.count);
    // console.log($scope.exhibitionName);
    // console.log($scope.images);
  };
  $scope.showDefaultExhibition = true;
  $scope.hideDefaultExhibition = function() {
    $scope.showDefaultExhibition = false;
  };
}]);
