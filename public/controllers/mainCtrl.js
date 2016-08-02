angular.module("garageApp").controller("mainCtrl", function($scope,mainServ){



  $scope.getSales = function(){
    mainServ.getSales()
    .then(function(res){
      $scope.sales = res;
    })
  }

  $scope.updateSale = function(sale){
    mainServ.updateSale(sale);
  };





});
