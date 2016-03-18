'use strict';

angular.module('NileArtGallery').controller('StoreController', ['$scope', function($scope) {
  $scope.storeItems = [
  // Akram Fadl
  	{
  		"img" : "images/Store/Akram Fadl/1.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "150 X 100",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/2.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "150 X 100",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/3.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "100 X 100",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/4.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "150 X 100",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/5.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "140 X 130",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/6.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "80 X 80",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/7.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "80 X 40",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/8.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "80 X 40",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/9.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "120 X 120",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/10.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "120 X 120",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/11.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "60 X 50",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/12.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "60 X 50",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/13.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "60 X 50",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/14.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "60 X 50",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/15.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "60 X 50",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Akram Fadl/16.jpg",
  		"artistName" : "Akram Fadl",
  		"size" : "180 X 120",
  		"material" : "Oil On Canvas"
  	}
  	,
// Hassan Kamel
  	{
  		"img" : "images/Store/Hassan Kamel/1.jpg",
  		"artistName" : "Hassan Kamel",
  		"size" : "35 x 22 x 8",
  		"material" : "Bronze"
  	},{
  		"img" : "images/Store/Hassan Kamel/2.jpg",
  		"artistName" : "Hassan Kamel",
  		"size" : "42 x 24 x 15",
  		"material" : "Bronze"
  	},{
  		"img" : "images/Store/Hassan Kamel/3.jpg",
  		"artistName" : "Hassan Kamel",
  		"size" : "16 x 14 x 15",
  		"material" : "Bronze"
  	},{
  		"img" : "images/Store/Hassan Kamel/4.jpg",
  		"artistName" : "Hassan Kamel",
  		"size" : "100 x 35 x 35",
  		"material" : "Bronze"
  	},{
  		"img" : "images/Store/Hassan Kamel/5.jpg",
  		"artistName" : "Hassan Kamel",
  		"size" : "20 x 18 x 93",
  		"material" : "Bronze"
  	},{
  		"img" : "images/Store/Hassan Kamel/6.jpg",
  		"artistName" : "Hassan Kamel",
  		"size" : "25 x 14 x 8",
  		"material" : "Bronze"
  	},
  	//Heba Hafez
  	{
  		"img" : "images/Store/Heba Hafez/1.jpg",
  		"artistName" : "Heba Hafez",
  		"size" : "110 X 130",
  		"material" : "Oil On Canvas"
  	},{
  		"img" : "images/Store/Heba Hafez/2.jpg",
  		"artistName" : "Heba Hafez",
  		"size" : "130 X 160",
  		"material" : "Oil On Canvas"
  	},
  	//Marianne
  	{
  		"img" : "images/Store/Marianne/1.jpg",
  		"artistName" : "Marianne",
  		"size" : "150 X 180",
  		"material" : "oil and acrylic on canvas"
  	},{
  		"img" : "images/Store/Marianne/2.jpg",
  		"artistName" : "Marianne",
  		"size" : "120 X 150",
  		"material" : "oil and acrylic on canvas"
  	},{
  		"img" : "images/Store/Marianne/3.jpg",
  		"artistName" : "Marianne",
  		"size" : "120 X 150",
  		"material" : "oil and acrylic on canvas"
  	},{
  		"img" : "images/Store/Marianne/4.jpg",
  		"artistName" : "Marianne",
  		"size" : "120 X 150",
  		"material" : "oil and acrylic on canvas"
  	},{
  		"img" : "images/Store/Marianne/5.jpg",
  		"artistName" : "Marianne",
  		"size" : "120 X 150",
  		"material" : "oil and acrylic on canvas"
  	},
  	//Marwa Adel
  	{
  		"img" : "images/Store/Marwa Adel/1.jpg",
  		"artistName" : "Marwa Adel",
  		"size" : "70 x 70",
  		"material" : "oil on canvas"
  	},{
  		"img" : "images/Store/Marwa Adel/2.jpg",
  		"artistName" : "Marwa Adel",
  		"size" : "70 X 70",
  		"material" : "oil on canvas"
  	},{
  		"img" : "images/Store/Marwa Adel/3.jpg",
  		"artistName" : "Marwa Adel",
  		"size" : "70 X 70",
  		"material" : "oil on canvas"
  	},{
  		"img" : "images/Store/Marwa Adel/4.jpg",
  		"artistName" : "Marwa Adel",
  		"size" : "100 X 100",
  		"material" : "oil on canvas"
  	},{
  		"img" : "images/Store/Marwa Adel/5.jpg",
  		"artistName" : "Marwa Adel",
  		"size" : "70 X 70",
  		"material" : "oil on canvas"
  	},{
  		"img" : "images/Store/Marwa Adel/6.jpg",
  		"artistName" : "Marwa Adel",
  		"size" : "70 X 70",
  		"material" : "oil on canvas"
  	},
  	//Nagi farid Tadros
  	{
  		"img" : "images/Store/Nagi farid Tadros/1.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "Height  31",
  		"material" : "bronze plated nickel"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/2.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "Height  43",
  		"material" : "Black Granite with bronze plated nickel"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/3.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "Height  29",
  		"material" : "Bronze plated nickel"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/4.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "Height  30",
  		"material" : "Granite with bronze plated nickel"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/5.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "Height  32",
  		"material" : "Unkown"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/6.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "Height  330",
  		"material" : "Unkown"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/7.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "Height  30",
  		"material" : "Unkown"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/8.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "Height  31",
  		"material" : "Unkown"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/9.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "Height  12",
  		"material" : "Unkown"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/10.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "110 x31x 15",
  		"material" : "Wood and bronze"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/11.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "116 x 42 x 24",
  		"material" : "nickel chrome and bronze"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/12.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "36 x 36",
  		"material" : "Plexiglas and Plated brass"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/13.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "46 x 24 x 21",
  		"material" : "nickel chrome and bronze"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/14.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "28 x 17 x 11",
  		"material" : "nickel chrome and bronze"
  	},{
  		"img" : "images/Store/Nagi farid Tadros/15.jpg",
  		"artistName" : "Nagi farid Tadros",
  		"size" : "22 x 15 x1 0",
  		"material" : "nickel chrome and bronze"
  	},
  	//Reda Abdel Rahman
  	{
  		"img" : "images/Store/Reda Abdel Rahman/1.jpg",
  		"artistName" : "Reda Abdel Rahman",
  		"size" : "120 X 140",
  		"material" : "Oil on canvas"
  	},{
  		"img" : "images/Store/Reda Abdel Rahman/2.jpg",
  		"artistName" : "Reda Abdel Rahman",
  		"size" : "140 X 200",
  		"material" : "Oil on canvas"
  	},{
  		"img" : "images/Store/Reda Abdel Rahman/3.jpg",
  		"artistName" : "Reda Abdel Rahman",
  		"size" : "120 X 140",
  		"material" : "Oil on canvas"
  	},{
  		"img" : "images/Store/Reda Abdel Rahman/4.jpg",
  		"artistName" : "Reda Abdel Rahman",
  		"size" : "120 X 140",
  		"material" : "Oil on canvas"
  	},{
  		"img" : "images/Store/Reda Abdel Rahman/5.jpg",
  		"artistName" : "Reda Abdel Rahman",
  		"size" : "120 X 140",
  		"material" : "Oil on canvas"
  	},{
  		"img" : "images/Store/Reda Abdel Rahman/6.jpg",
  		"artistName" : "Reda Abdel Rahman",
  		"size" : "120 X 140",
  		"material" : "Oil on canvas"
  	},{
  		"img" : "images/Store/Reda Abdel Rahman/7.jpg",
  		"artistName" : "Reda Abdel Rahman",
  		"size" : "140 X 200",
  		"material" : "Oil on canvas"
  	}
  ];
}]);
