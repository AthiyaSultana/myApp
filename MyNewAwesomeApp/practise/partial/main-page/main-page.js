angular.module('practise').controller('MainPageCtrl',function($scope,exampleService,$state,$http,sessionUser){

$scope.categoriesList = exampleService.categories;
$scope.selectedItem={

};
console.log("sessionUser",sessionUser);
$scope.hideList = false;

$scope.sortParameter = "price";
  $scope.sortBy = function () {
        if ($scope.sortParameter.indexOf('-') >= 0) {
            $scope.sortParameter = 'price';
        } else {
            $scope.sortParameter = '-price';
        }
        //         $scope.reverse = ! $scope.reverse;
        $scope.sortArrow = !$scope.sortArrow;
    };

$scope.showSelectedItems = function(){
	$scope.items=[];
	console.log("selectedItem",$scope.selectedItem);
	$scope.hideList = true;
	for(var key in $scope.selectedItem){
		if($scope.selectedItem[key] == true){
			$scope.items.push(key);
		}
	}
	// $scope.items = Object.keys($scope.selectedItem);

};

$scope.hideLists = function(){
	$scope.hideList = false;
	$scope.selectedItem ={};
};
$scope.logout = function () {
        $http.post('/api/users/signout').then(function(res) {
            $state.go('home');
        }).catch(function(err){
            console.log(err.data);
        })
    };

});