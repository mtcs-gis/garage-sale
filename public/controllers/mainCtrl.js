angular.module("garageApp").controller("mainCtrl", function($scope,mainServ){

//initializing variables g scope

var map;
var addPos;
var info;
var infoWindow;
var markerPos;
var marker;

// var lable = [];
$scope.saleInfo = [];




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
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var labelIndex = 0;
  var content;
  var infoWindow;
  mainServ.getAllUserSales()
  .then(function(res){
    //console.log(res[0].sale);
    for(var i = 0; i < res.length; i++){
      for(var j = 0; i < res[i].sale.length; j++){
        addPos = {
          lng: res[i].sale[j].lat,
          lat: res[i].sale[j].lng
        }
        marker = new google.maps.Marker({
          position: addPos,
          map: map,
          color: "blue",
          animation:google.maps.Animation.DROP,
          label: labels[labelIndex++ % labels.length]
        });

        content = res[i].sale[j];
        $scope.saleInfo.push(content);
        // lable.push(marker.label);
      }
    }
    return saleInfo;
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
