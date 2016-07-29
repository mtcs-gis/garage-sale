angular.module("garageApp").controller("formCtrl", function($scope, mainServ){


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
    mainServ.postSale(sale)
    .then(function(response){
      console.log(response);
    });
  };



  $scope.updateSale = function(sale){
    mainServ.updateSale(sale);
  };
});
