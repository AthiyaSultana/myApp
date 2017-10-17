angular.module('practise').factory('exampleService',function($http,$q) {

    var exampleService = {};

    exampleService.categories=[
        {
            'name':'Burger',
            'items':[
                {
                    'name':'Veg Burger',
                    'price':120
                },{
                    'name':'Chicken Burger',
                    'price':340
                },{
                    'name':'Cheese Burger',
                    'price':100
                },{
                    'name':'Taco Burger',
                    'price':340
                },
                {
                    'name':'Salmon Burger',
                    'price':340
                }
            ]
        },
        {
            'name':'Noodles',
            'items':[
                {
                    'name':'Veg Noodles',
                    'price':120
                },{
                    'name':'Chicken Noodles',
                    'price':280
                },{
                    'name':'Cheese Noodles',
                    'price':100
                },{
                    'name':'Egg Noodles',
                    'price':70
                },
                {
                    'name':'Rice Noodles',
                    'price':50
                }
            ]
        },{
            'name':'Fried Rice',
            'items':[
                {
                    'name':'Veg FriedRice',
                    'price':70
                },{
                    'name':'Chicken FriedRice',
                    'price':100
                },{
                    'name':'Egg FriedRice',
                    'price':100
                },{
                    'name':'Spicy FriedRice',
                    'price':50
                },
                {
                    'name':'Plain FriedRice',
                    'price':50
                }
            ]
        }, {
            'name':'Donuts',
            'items':[
                {
                    'name':'Cinnamon Donuts',
                    'price':120
                },{
                    'name':'AppleCrumb Donuts',
                    'price':380
                },{
                    'name':'Jelly Donuts',
                    'price':100
                },{
                    'name':'Chocolate Donuts',
                    'price':340
                },
                {
                    'name':'Srawberry Donuts',
                    'price':310
                }
            ]
        }
    ]
    exampleService.createUser = function(data){
    	var deferred = $q.defer();
    	$http.post('/api/users/createUser',data).then(function(successData){
    			deferred.resolve(successData.data);
    	},function(error){
    		deferred.reject(error.data);
    	});
    	return deferred.promise;
    };
    exampleService.login = function(data){
        var deferred = $q.defer();
        $http.post('/api/users/signin',data).then(function(successData){
                deferred.resolve(successData.data);
        },function(error){
            deferred.reject(error.data);
        });
        return deferred.promise;
    };

      exampleService.getSessionUser = function () {
        var deferred = $q.defer();
        $http.get("/api/users/me").then(function (sData) {
            exampleService.user = sData.data;
            deferred.resolve(exampleService.user);
        }).catch(function (eData) {
            deferred.reject(eData.data);
        });

        return deferred.promise;
    };
    return exampleService;
});