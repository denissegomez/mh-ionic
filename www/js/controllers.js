angular.module('starter.controllers', [])

.controller('AppCtrl', function() {

})

.controller('HomeCtrl', function($scope, ProductsService) {
  $scope.products = ProductsService.getAll();
})

.controller('ProductCtrl', function($scope, $stateParams, ProductsService) {
  $scope.product = ProductsService.getProduct($stateParams.productId); // { img: 'img/bonobon.png', origin: 'Argentina', location: 'Badalona', name: 'Bombones', id: 2, description: "Estos son los mejores mejores bombones de toda sudamérica." };
})

.controller('ContactCtrl', function($scope){

})
