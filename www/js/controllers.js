angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicHistory, SellersService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.isLoggedIn = false;

  // hardcoded seller
  $scope.seller = SellersService.getSeller(1);

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal; 
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
    $scope.isLoggedIn = true;
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.logout = function() {
    $scope.isLoggedIn = false;
    $state.go('app.home');
    // TODO $ionicHistory.clearHistory()
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope, ProductsService) {
  $scope.products = ProductsService.getAll();
})

.controller('ProductCtrl', function($scope, $stateParams, ProductsService, SellersService) {
  $scope.product = ProductsService.getProduct($stateParams.productId); // { img: 'img/bonobon.png', origin: 'Argentina', location: 'Badalona', name: 'Bombones', id: 2, description: "Estos son los mejores mejores bombones de toda sudamérica." };
  $scope.seller = SellersService.getSeller($scope.product.seller); // { face: 'img/iguazu.jpg', name: "Tienda Iguazú", shortDescription: 'Productos Argentinos' };
});
