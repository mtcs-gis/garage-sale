angular.module("garageApp").controller("formCtrl", function($scope, mainServ){

  $scope.postSale = function(sale){
    mainServ.postSale(sale);
  }

});
