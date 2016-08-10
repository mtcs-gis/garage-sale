angular.module("garageApp").controller("mainCtrl", function($scope, mainServ){

//initializing variables g scope

var map;
var addPos;
var info;
var infoWindow;
var markerPos;
var marker;

$scope.landingPage = true;
$scope.mapPage = true;

$scope.labels= [];

$scope.count;
$scope.saleInfo = [];


  $scope.enterMapPage = function(){
    $scope.mapPage = false;
    $scope.landingPage=false;
  };




// creating initmap to get the map started

  $scope.initMap = function(){
    map = new google.maps.Map(document.getElementById('map'),{
      center: {lat:45.6708, lng: -111.0678},
      zoom: 11
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
      console.log(res);
      for(var i = 0; i < res.length; i++){
        for(var j = 0; i < res[i].sale.length; j++){
          addPos = {
            lng: res[i].sale[j].lat,
            lat: res[i].sale[j].lng
          }

// still looking to do circles

        marker = new google.maps.Marker({
          position: addPos,
          map: map,
          animation:google.maps.Animation.DROP,
          label: labels[labelIndex++ % labels.length]
        });

        content = res[i].sale[j];
        $scope.saleInfo.push(content);
        // lable.push(marker.label);
      }
    }
    $scope.saleInfo;

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


  (function (){                   //self-invoking function that responses to whether a user is log in or not
      mainServ.getKnownUser()
      .then(function(response){
        var userID = response.data;
        var user;
        if (userID.facebook){
          logoutIcon = true;
        } else if (userID.local) {
          logoutIcon = true;
        } else {
          logoutIcon = false;
        }
          $scope.logOutStuff = logoutIcon;
      });
    })()

  $scope.signOut = function(){   //logs a you out and redirects them to the home page
      console.log("SignOut");
      mainServ.getSignOut()
      .then(function(response){
            $location.path('/');
      })
  }




});
