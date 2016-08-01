angular.module('garageApp').controller('mapCtrl', function($scope,mainServ){



  $scope.postSale = function(sale){
    mainServ.postSale(sale)
    .then(function(res){
    })
  }

  $scope.getSale = function(){
    mainServ.getSale()
    .then(function(res){
    })
  }


  $scope.initMap = function() {
    $scope.address;
            var data =[
              {
                address: "232 E Main Bozeman"
              },
              {
                address: "414 W Main Bozeman"
              },
              {
                address: "414 Wilson Bozeman"
              },
              {
                address: "211 S 5th Bozeman"
              },
              {
                address: "116  S 10th Bozeman"
              },
              {
                address: "401 S Black Bozeman"
              }
            ];
            $scope.address = data;

            var map = new google.maps.Map(document.getElementById('map'), {
             zoom: 12,
             center: {lat: 45.674788, lng: -111.094465}
            });
            var geocoder = new google.maps.Geocoder();

              $scope.geocodeAddress(geocoder, map, data);

            };




          $scope.geocodeAddress = function(geocoder, resultsMap, locations) {


                  for(var i =0; i<locations.length; i++){
                   geocoder.geocode(locations[i], function(results, status) {
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
