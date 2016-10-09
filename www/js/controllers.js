angular.module('starter.controllers', [])

.controller('AppCtrl', function() {

})

.controller('HomeCtrl', function($scope, $ionicModal, ProductsService, CategoriesService, RegionsService) {
    $scope.products = ProductsService.getAll();
    $scope.categories = CategoriesService.getAll();
    $scope.regions = RegionsService.getAll();

    // SEARCH
    $scope.isSearchVisible = false;

    $scope.toggleSearch = function toggleSearch(){
      $scope.isSearchVisible = !$scope.isSearchVisible;
    }

    // FILTER MODAL
    $ionicModal.fromTemplateUrl('templates/product-filter.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.applyFilter = function() {
      $scope.modal.hide();
    };

    $scope.cancelFilter = function() {
      $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
})

.controller('ProductCtrl', function($scope, $stateParams, ProductsService) {
  var mapSrc="https://www.google.com/maps/embed/v1/place?q=";
  var key="key=AIzaSyCbYJ4j5j31bQPBCdAekW6fXakQI_d1Uak";

  $scope.product = ProductsService.getProduct($stateParams.productId); 
  $scope.product.$loaded(function(){
    console.log("LOADED");
    var address = $scope.product.seller.address;
    var mapSource = mapSrc + address.split(' ').join('+') + "&" + key;
    console.log("MapSource", mapSource);
    document.getElementById("map").setAttribute("src", mapSource);
  })
})

.controller('ContactCtrl', function($scope){

})

