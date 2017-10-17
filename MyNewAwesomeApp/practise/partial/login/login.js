angular.module('practise').controller('LoginCtrl',function($scope,$state,exampleService){

	$scope.user={};
	$scope.login = function(form){

		if(form.$valid){
			//call backend to check whether the user is auhorised or not
			console.log("$scope.user",$scope.user);
			var promise = exampleService.login($scope.user);
			promise.then(function(success){
				$state.go('restuarent');
			}).catch(function(error){
				console.log("error",error);
				$scope.error = error.message;
			});
		}
	};


});