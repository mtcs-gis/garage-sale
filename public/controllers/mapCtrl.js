angular.module('garageApp').controller('mapCtrl', function($scope,mainServ){

  var cities = [
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 43.7000,
        long : -79.4000
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522
    }
];


      $scope.where;
      $scope.mark

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



          function geocodeAddress(geocoder, resultsMap) {
            var address = document.getElementById('address').value;
            var time = document.getElementById('time').value;
            $scope.address = address;
            $scope.time = time;
            geocoder.geocode({'address': address}, function(results, status) {
              if (status === google.maps.GeocoderStatus.OK) {
                resultsMap.setCenter(results[0].geometry.location);
                resultsMap.setZoom(17);
                var marker = new google.maps.Marker({
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
