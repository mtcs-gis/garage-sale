angular.module("garageApp").controller("mainCtrl", function($scope, $location, mainServ){

//initializing variables g scope

  var map;
  var addPos;
  var info;
  var infoWindow;
  var markerPos;
  var marker;




  $scope.names = {};


  $scope.getUsername = function(name){
    $scope.userName = name;
  }





// creating initmap to get the map started

  $scope.initMap = function(){
    map = new google.maps.Map(document.getElementById('map'),{
      center: {lat:45.6708, lng: -111.0678},
      zoom: 12
    });
    $scope.getSales();
  }

//end of map function

// beginning of getSales



$scope.getSales = function(){
  mainServ.getAllSales()
  .then(function(response){
    for(var i = 0; i < response.length; i++){

      $scope.names= response;

      addPos = {
        lng: response[i].lat,
        lat: response[i].lng
      }

      // circle = new google.maps.Circle({
      //   strokeColor: 'rgb(198, 86, 61)',
      //   strokeOpacity: 0.8,
      //   strokeWeight: 1,
      //   fillColor: 'rgb(198, 86, 61)',
      //   fillOpacity: 0.35,
      //   map: map,
      //   center: addPos,
      //   radius: 200
      // })
      marker = new google.maps.Marker({
        position: addPos,
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      })
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
      })
  }

});
