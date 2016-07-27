angular.module('garageApp').controller('mapCtrl', function($scope,mainServ){



// intializing map

     function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 12,
              center: {lat: 45.674788, lng: -111.094465}
            });
            var geocoder = new google.maps.Geocoder();

            document.getElementById('submit').addEventListener('click', function() {
              geocodeAddress(geocoder, map);
            });
          };
          initMap();


// building the geocoding function

      function geocodeAddress(geocoder, resultsMap) {
            var address = document.getElementById('address').value;
            if(address === ""){
              return alert("Please insert an address");
            }
            var time = document.getElementById('time').value;
            if(time === ""){
              return alert("Please Insert a Time");
            }
            var ampm = document.getElementById('am').value;
            $scope.test;
            $scope.ampm = ampm;
            $scope.address = address;
            $scope.time = "@ " + time;
            geocoder.geocode({'address': address}, function(results, status) {
              if (status === google.maps.GeocoderStatus.OK) {
                console.log(results[0].formatted_address);
                $scope.results = results[0].formatted_address;
                resultsMap.setCenter(results[0].geometry.location);
                resultsMap.setZoom(17);

                marker = new google.maps.Marker({
                  map: resultsMap,
                  position: results[0].geometry.location,
                  title: 'Garage Sale'

                });

              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });
          }


});
