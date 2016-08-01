angular.module('garageApp').controller('mapCtrl', function($scope,mainServ){
 var address;
 var data;

  $scope.postSale = function(sale){
    mainServ.postSale(sale)
    .then(function(res){
    })
  }

  $scope.getSale = function(){
    $scope.address;
    mainServ.getSales()
    .then(function(res){
      $scope.address = res;
      console.log($scope.address);
      $scope.initMap($scope.address)
    })
  }


  $scope.initMap = function(address) {

      var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 12,
       center: {lat: 45.674788, lng: -111.094465}
      });

      var geocoder = new google.maps.Geocoder();

      $scope.geocodeAddress(geocoder, map, address);

  };




  $scope.geocodeAddress = function(geocoder, resultsMap, locations) {
      console.log({locations});
      for(var i =0; i<locations.length; i++){
       geocoder.geocode(locations, function(results, status) {
         if (status === google.maps.GeocoderStatus.OK) {
           resultsMap.setZoom(13);

           marker = new google.maps.Marker({
             map: resultsMap,
             position: results[0].geometry.location,
             title: "A-Z"
           });

         } else {
           alert('Geocode was not successful for the following reason: ' + status);
         }

       });
     }

  }







});
