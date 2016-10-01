angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicHistory, SellersService) {
  // hardcoded seller
  $scope.seller = SellersService.getSeller(1);
})

.controller('HomeCtrl', function($scope, ProductsService) {
  $scope.products = ProductsService.getAll();
})

.controller('ProductCtrl', function($scope, $stateParams, ProductsService, SellersService) {
  console.log($stateParams.productId);
  $scope.product = ProductsService.getProduct($stateParams.productId); // { img: 'img/bonobon.png', origin: 'Argentina', location: 'Badalona', name: 'Bombones', id: 2, description: "Estos son los mejores mejores bombones de toda sudamérica." };
  $scope.seller = SellersService.getSeller($scope.product.seller); // { face: 'img/iguazu.jpg', name: "Tienda Iguazú", shortDescription: 'Productos Argentinos' };
})

.controller('ContactCtrl', function($scope){

})
