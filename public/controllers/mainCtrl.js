angular.module("garageApp").controller("mainCtrl", function($scope, $location, mainServ){

//initializing variables g scope

  var map;
  var addPos;
  var info;
  var infoWindow;
  var markerPos;
  var marker;
  var infoWindow;

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


// get sales function that loops through all sales

$scope.getSales = function(){
  var content;
  var date;
  mainServ.getAllSales()
  .then(function(response){
    var markerlist = [];
    for(var i = 0; i < response.length; i++){

      content = response[i];
      date = response[i].date.slice(0,10);
      time = response[i].time;
      $scope.names= response[i];

      addPos = {
        lng: response[i].lat,
        lat: response[i].lng
      }

      infowindow = new google.maps.InfoWindow({
        content: content.name.toUpperCase() + "<br>" + content.address.toUpperCase() + "<br>" + date
      })

      marker = new google.maps.Marker({
        position: addPos,
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        infowindow: infowindow
      })


      marker.addListener('click', function(){
        this.infowindow.open(map,this);
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


  // (function (){                   //self-invoking function that responses to whether a user is log in or not
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

  $scope.signOut = function(){   //logs a you out and redirects them to the home page
      console.log("SignOut");
      mainServ.getSignOut()
      .then(function(response){
      })
  }

});
