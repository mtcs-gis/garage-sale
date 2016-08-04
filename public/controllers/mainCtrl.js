angular.module("garageApp").controller("mainCtrl", function($scope,mainServ){

//initializing variables g scope
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
          animation:google.maps.Animation.DROP,
          title: 'A-Z'
        });
        marker.addListener('click', toggleBounce);
        console.log(marker);
      }
    }
    function toggleBounce(){
      if(marker.getAnimation() !== null){
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
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
