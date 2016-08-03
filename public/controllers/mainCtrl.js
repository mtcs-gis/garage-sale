angular.module("garageApp").controller("mainCtrl", function($scope,mainServ){


var map;
$scope.initMap = function(){
  map = new google.maps.Map(document.getElementById('map'),{
    center: {lat:45.6770, lng: -111.0429},
    zoom: 10
  });
}

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
