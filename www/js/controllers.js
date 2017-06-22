angular.module('starter.controllers', [])

.controller('AppCtrl', function() {

})

.controller('HomeCtrl', function($scope, $ionicModal, ProductsService, CategoriesService, RegionsService) {
    $scope.originalProducts = ProductsService.getAll();
    $scope.originalProducts.$loaded(function(){
      $scope.products = $scope.originalProducts;
    });

    $scope.categories = CategoriesService.getAll();
    $scope.categories.$loaded(function(){
      $scope.category = $scope.categories[0];
    });

    $scope.regions = RegionsService.getAll();
    $scope.regions.$loaded(function(){
      $scope.region = $scope.regions[0];
    });

    // SEARCH
    $scope.isSearchVisible = false;
    $scope.toggleSearch = function toggleSearch(){
      $scope.isSearchVisible = !$scope.isSearchVisible;
    }

    // FILTER
    $scope.categoryChanged = function categoryChanged(selected){
      $scope.selectedCategory = selected;
    }

    $scope.regionChanged = function regionChanged(selected){
      $scope.selectedRegion = selected;
    }

    $scope.filterProducts = function filter(){
      $scope.products = [];
      angular.forEach($scope.originalProducts, function(product, key){
          var categoryMatch = false;
          var regionMatch = false;

          if ($scope.selectedCategory.name == "Todas" || product.category == $scope.selectedCategory.name){
            categoryMatch = true;
          }
          
          if ($scope.selectedRegion.name == "Todas" || product.origin == $scope.selectedRegion.name){
            regionMatch = true;
          }
          
          if (categoryMatch && regionMatch){
            $scope.products.push(product);
          }
      });
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
      if ($scope.selectedCategory == undefined){
        $scope.selectedCategory = $scope.category;
      }
      else {
        $scope.category == $scope.selectedCategory;
      }
      
      if ($scope.selectedRegion == undefined){
        $scope.selectedRegion = $scope.region;
      }
      else{
        $scope.region = $scope.selectedRegion;
      }

      $scope.filterProducts();
      $scope.modal.hide();
    };

    $scope.cancelFilter = function() {
      $scope.selectedCategory = $scope.category;
      $scope.selectedRegion = $scope.region;

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
    console.log("LOADED", $scope.product);
    var address = $scope.product.seller.address;
    var mapSource = mapSrc + address.split(' ').join('+') + "&" + key;
    console.log("MapSource", mapSource);
    document.getElementById("map").setAttribute("src", mapSource);
  })
})

.controller('ContactCtrl', function($scope, $ionicPopup){

  $scope.contact = {
    name: '',
    lastname: '',
    email: '',
    comment: '',
  }

  $scope.sendContactForm = function(){
    $scope.showAlert();
  }

  $scope.showAlert = function(){
    var alertPopup = $ionicPopup.alert({
      title: 'Contacto realizado',
      template: 'Gracias por contactarnos. Nos pondremos en contacto contigo a la mayor brevedad posible.'
    });

    alertPopup.then(function(res){
      $scope.contact = {};
    });
  }

})

