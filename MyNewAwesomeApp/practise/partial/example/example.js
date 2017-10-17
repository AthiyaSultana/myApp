angular.module('practise').controller('ExampleCtrl',function($scope,exampleService){

$scope.count =0;
$scope.vendor={
	
};
$scope.saveVendor = function(form){
	$scope.vendor.shopsName =[];
	$scope.vendor.shopsName.push({
		city:$scope.vendor.city,
		doorNumber:$scope.vendor.doorNumber
	});
	delete $scope.vendor.city;
	delete $scope.vendor.doorNumber;

console.log("form",form,$scope.vendor);	
if(form.$valid){
	var promise = exampleService.createVendor($scope.vendor);
	promise.then(function(success){
		form.$submitted = false;
		console.log("vendor created successfully");
		$scope.vendor={};
	},function(error){
		console.log("error",error);
	},function(message){
		alert(message);
	});
}
};

});