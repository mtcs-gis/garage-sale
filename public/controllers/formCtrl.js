angular.module("garageApp").controller("formCtrl", function($scope, mainServ){

  var geocoder = new google.maps.Geocoder();



  $scope.postSale = function(sale){
    var addObj = {address:sale.address};
    console.log(addObj);

    geocoder.geocode(addObj, function(results, status){
       var temp = results[0].geometry.viewport;
       sale.lat = temp.b.b;
       sale.lng = temp.f.f;
       mainServ.postSale(sale);
    })
  }

});
