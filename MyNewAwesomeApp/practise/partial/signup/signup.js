angular.module('practise').controller('SignupCtrl',function($scope,exampleService,$state){

$scope.user ={};
$scope.hideForm = false;
$scope.createUser = function(form){
		if(form.$valid && $scope.user.password == $scope.user.confirmPassword){
			//call back end to create user
			console.log("$scope.user",$scope.user);
			var promise = exampleService.createUser($scope.user);
			promise.then(function(success){
				$scope.hideForm = true;
			},function(error){
				console.log("error",error);
				$scope.error =error.message;
			});
		}
};
$scope.back = function(){
$state.go('home');
};


});