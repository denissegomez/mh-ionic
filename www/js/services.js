angular.module('starter.services', [])

.factory('ProductsService', function(){
    var products = [
        { seller: 1, img: 'img/curcuma.jpg', origin: 'Árabe', location: 'Barcelona - Sants', name: 'Curcuma', id: 1 },
        { seller: 1, img: 'img/bonobon.png', origin: 'Argentina', location: 'Badalona', name: 'Bombones', id: 2, description: "Estos son los mejores mejores bombones de toda sudamérica." },
        { seller: 1, img: 'img/crema-mani.jpg', origin: 'Brasil', location: 'Barcelona - Encants', name: 'Crema de Maní', id: 3 },
    ];

    return {
        getAll: function(){
            return products;
        },
        getProduct : function(id){
            return products[id - 1]; // TODO: This works as long as id is autoincremental. Implement proper solution
        }        
    }
})

.factory('SellersService', function(){
    var sellers = [
        {id: 1, face: 'img/iguazu.jpg', name: 'Tienda Iguazú', shortDescription: 'Productos Latinos' },
    ];

    return {
        getSeller: function(id){
            return sellers[id - 1]; // TODO: This works as long as id is autoincremental. Implement proper solution
        }
    }
})