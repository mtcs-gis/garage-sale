angular.module("garageApp").controller("mainCtrl", function($scope, $location, mainServ){

//initializing variables g scope

  var map;
  var addPos;
  var info;
  var infoWindow;
  var markerPos;
  var marker;

  $scope.content = {};
  var name;
  var address;
  var time;
  var date;



  $scope.getUsername = function(name){
    $scope.userName = name;
  }





// creating initmap to get the map started

  $scope.initMap = function(){
    map = new google.maps.Map(document.getElementById('map'),{
      center: {lat:45.6708, lng: -111.0678},
      zoom: 11
    });
    $scope.getSales();
  }

//end of map function

// beginning of getSales


$scope.getSales = function(){
  mainServ.getAllSales()
  .then(function(response){
    for(var i = 0; i < response.length; i++){
      $scope.name = response[0].name

      addPos = {
        lng: response[i].lat,
        lat: response[i].lng
      }

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


  // (function (){
  //     mainServ.getKnownUser()
  //     .then(function(response){
  //       var userID = response.data;
  //       var user;
  //       if (userID.facebook){
  //         logoutIcon = true;
  //       } else if (userID.local) {
  //         logoutIcon = true;
  //       } else {
  //         logoutIcon = false;
  //       }
  //         $scope.logOutStuff = logoutIcon;
  //     });
  //   })()

  $scope.signOut = function(){
      console.log("SignOut");
      mainServ.getSignOut()
      .then(function(response){
      })
  }

});
