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
  $scope.product = ProductsService.getProduct($stateParams.productId); // { img: 'img/bonobon.png', origin: 'Argentina', location: 'Badalona', name: 'Bombones', id: 2, description: "Estos son los mejores mejores bombones de toda sudamérica." };
})

.controller('ContactCtrl', function($scope){

})

