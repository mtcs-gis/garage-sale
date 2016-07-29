angular.module('garageApp').controller('mapCtrl', function($scope,mainServ){



// intializing map




//             var map = new google.maps.Map(document.getElementById('map'), {
//               zoom: 12,
//               center: {lat: 45.674788, lng: -111.094465}
//             });
//             var geocoder = new google.maps.Geocoder();
//
//             // document.getElementById('submit').addEventListener('click', function() {
//             //   geocodeAddress(geocoder, map);
//             // });
//
//
//
// // building the geocoding function
//
//
//
//       $scope.geocodeAddress = function() {
//         $scope.map;
//         $scope.address;
//         var data = {
//           address: "332 E Main Bozeman"
//         };
//         var resultsMap = {};
//             // var address = document.getElementById('address').value;
//             // if(address === ""){
//             //   // return alert("Please insert an address");
//             // }
//             // var time = document.getElementById('time').value;
//             // if(time === ""){
//             //   // return alert("Please Insert a Time");
//             // }
//             // var ampm = document.getElementById('am').value;
//             // $scope.test;
//             // $scope.ampm = ampm;
//             // $scope.address = address;
//             // $scope.time = "@ " + time;
//             geocoder.geocode(data, function(results, status) {
//               if (status === google.maps.GeocoderStatus.OK) {
//                 $scope.address = data.address;
//                 console.log($scope.address);
//                 $scope.map.setCenter(results[0].geometry.location);
//                 resultsMap.setZoom(17);
//
//
//
//                 marker = new google.maps.Marker({
//                   map: resultsMap,
//                   position: results[0].geometry.location,
//                   title: 'Garage Sale'
//
//                 });
//
//
//
//               } else {
//                 alert('Geocode was not successful for the following reason: ' + status);
//               }
//             });
//           }


});
