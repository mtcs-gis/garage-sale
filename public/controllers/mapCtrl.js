angular.module('garageApp').controller('mapCtrl', function($scope,mainServ){

// initializing variables
var address;
var map;
var geoLocation;
$scope.title = "Post";

//projecting the map on the page function

  $scope.initMap = function(){
  var newMap = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: {lat: 45.674788, lng: -111.094465}
  });
}



//new maker that has been pulled from the database.
$scope.makeMarker = function(newMap, markerPos){
  marker = new google.maps.Marker({
   setMap: newMap,
   position: markerPos,
   title: "A-Z"
  });
};




$scope.postSale = function(sale){
  var newAddress = { address: sale.address + " Bozeman"};
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode(newAddress, function(results,status){
    if(status === google.maps.GeocoderStatus.OK){
      geoLocation = results[0].geometry.location;

      //Calling makeMarker function here with geoLocation as  parameter

      $scope.makeMarker(geoLocation);

    } else {
      console.log("didn't work because of " + status);
    }
  })

  // setting a timeout to avoid 'spatial query limit' error

  $scope.title = "Saving"
  window.setTimeout(function(){
    mainServ.postSale(sale)
    .then(function(res){
      console.log(res);
      sale.address = "";
      $scope.title = "Saved"
    })
  }, 1000);
};







  // $scope.geocodeAddress = function(geocoder, resultsMap, locations) {
  //     console.log({locations});
  //     for(var i =0; i<locations.length; i++){
  //      geocoder.geocode(locations, function(results, status) {
  //        if (status === google.maps.GeocoderStatus.OK) {
  //          resultsMap.setZoom(13);
  //
  //          marker = new google.maps.Marker({
  //            map: resultsMap,
  //            position: results[0].geometry.location,
  //            title: "A-Z"
  //          });
  //
  //        } else {
  //          alert('Geocode was not successful for the following reason: ' + status);
  //        }
  //
  //      });
  //    }
  //
  // }


    // $scope.getSale = function(){
    //   $scope.address;
    //   mainServ.getSales()
    //   .then(function(res){
    //     $scope.address = res;

        // console.log($scope.address);
        // $scope.initMap($scope.address)


    //
    // $scope.initMap = function() {
    //
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //      zoom: 12,
    //      center: {lat: 45.674788, lng: -111.094465}
    //     });

        // var geocoder = new google.maps.Geocoder();

        // $scope.geocodeAddress(geocoder, map, address);





});
