angular.module("garageApp").controller("mainCtrl", function($scope,mainServ){

//initializing variables g scope
$scope.saleInfo;
$scope.contentString;
$scope.latLng;
var map;
var addPos;
var info;
var markerPos;
var marker;

// creating initmap to get the map started
$scope.initMap = function(markerPos){
  map = new google.maps.Map(document.getElementById('map'),{
    center: {lat:45.6708, lng: -111.0678},
    zoom: 13
  });

  $scope.contentString = "hello";

  var infowindow = new google.maps.InfoWindow({
    content: "hello"
  });

  $scope.getUserSales();


}

//end of map function

// beginning of getSales

$scope.getUserSales = function(){
  mainServ.getAllUserSales()
  .then(function(res){
    console.log(res[0].sale);
    for(var i = 0; i < res.length; i++){
      for(var j = 0; i < res[i].sale.length; j++){
        addPos = {
          lng: res[i].sale[j].lat,
          lat: res[i].sale[j].lng
        }
        marker = new google.maps.Marker({
          position: addPos,
          map: map,
          title: "A"
        });
        console.log(marker);
      }
    }
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
    var infowindow = new google.maps.InfoWindow({
      content: "hello"
    });
  })
}

$scope.updateSale = function(sale){
  mainServ.updateSale(sale);
};

// $scope.getUserSales = function(){
//   mainServ.getAllUserSales()
//   .then(function(res){
//     console.log(res);
//   })
// }






});
