angular.module('garageApp').controller('mapCtrl', function($scope,mainServ){




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

            var map = new google.maps.Map(document.getElementById('map'), {
             zoom: 12,
             center: {lat: 45.674788, lng: -111.094465}
            });
            var geocoder = new google.maps.Geocoder();

              $scope.geocodeAddress(geocoder, map, data);
              var result = " ";
              for(var i =1; i<data.length; i++){
                result += data[i].address + ", ";
              }
              $scope.address = result;
              return $scope.address;

            };





          $scope.geocodeAddress = function(geocoder, resultsMap, locations) {


                  for(var i =0; i<locations.length; i++){
                   geocoder.geocode(locations[i], function(results, status) {
                     if (status === google.maps.GeocoderStatus.OK) {
                       resultsMap.setZoom(14);

                       marker = new google.maps.Marker({
                         map: resultsMap,
                         position: results[0].geometry.location
                       });

                     } else {
                       alert('Geocode was not successful for the following reason: ' + status);
                     }

                   });
                 }
               }







});
