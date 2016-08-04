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
    content: $scope.contentString
  });

// CALL GETSALE HERE

  $scope.getSales();

  // var marker = new google.maps.Marker({
  //   position: markerPos,
  //   map: map,
  //   title: "A"
  // });
  //
  // marker.addListener('click', function(){
  //   infowindow.open(map,marker);
  // });
}

//end of map function

// beginning of getSales

$scope.getSales = function(){
  mainServ.getSales()
  .then(function(res){
    console.log(res);
    for(var i =0; i<res.length; i++){
      addPos = {
        lat: res[i].lng,
        lng: res[i].lat
      }

      marker = new google.maps.Marker({
        position: addPos,
        map: map,
        title: "A"
      });
    // $scope.initMap(addPos);
    $scope.saleInfo = res;
    }
  })
}

$scope.updateSale = function(sale){
  mainServ.updateSale(sale);
};





});
