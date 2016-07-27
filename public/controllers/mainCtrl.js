angular.module("garageApp").controller("mainCtrl", function($scope,mainServ){

  $scope.map;
  $scope.address;
  $scope.sales;


  $scope.getSales = function(){
    mainServ.getSales()
    .then(function(res){
      $scope.sales = res;
    })
  }

  $scope.postSale = function(sale){
  //  angular.copy
    mainServ.postSale(sale);
  }

  $scope.updateSale = function(sale){
    mainServ.updateSale(sale);
  };




});
