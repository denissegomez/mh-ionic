angular.module('starter.services', [])

.factory('CategoriesService', function($firebaseArray, ApiUrl){
    var categoriesRef = new Firebase(ApiUrl + '/categories');	
	var categories = [];

    return {
        getAll: function(){
            categories = $firebaseArray(categoriesRef);
            return categories;  
        },       
    }
})

.factory('RegionsService', function($firebaseArray, ApiUrl){
    var regionsRef = new Firebase(ApiUrl + '/regions');	
	var regions = [];

    return {
        getAll: function(){
            regions = $firebaseArray(regionsRef);
            return regions;  
        },       
    }
})

.factory('ProductsService', function($firebaseArray, $firebaseObject, ApiUrl){

    var productsRef = new Firebase(ApiUrl + '/products');	
	var products = [];

    return {
        getAll: function(){
            products = $firebaseArray(productsRef);
            return products;  
        },
        getProduct : function(id){
            var productRef = productsRef.child(id);
		    return $firebaseObject(productRef);
        }        
    }
})

.factory('SellersService', function(){
    // var sellers = [
    //     {id: 1, face: 'img/iguazu.jpg', name: 'Tienda Iguazú', shortDescription: 'Productos Latinos' },
    // ];

    // return {
    //     getSeller: function(id){
    //         return sellers[id - 1]; // TODO: This works as long as id is autoincremental. Implement proper solution
    //     }
    // }
})