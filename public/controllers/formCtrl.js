angular.module("garageApp").controller("formCtrl", function($scope, mainServ){

  $scope.userId;

  (function (userInfo){
    mainServ.getKnownUser(userInfo)
    .then(function(response){
      console.log(response);
      $scope.userId = response.data._id;
      console.log($scope.userId);

    });

  })()

  var geocoder = new google.maps.Geocoder();



  $scope.postSale = function(sale){
    console.log(sale)
    var addObj = {address:sale.address};
    console.log(addObj);

    geocoder.geocode(addObj, function(results, status){
       var temp = results[0].geometry.viewport;
       sale.lat = temp.b.b;
       sale.lng = temp.f.f;
       mainServ.postSale($scope.userId, sale)
       console.log(sale);
       // .then(function(response){
       //  console.log(response);
       //    //$scope.getUserID(); //updates the list!
       //  });
    })
  }

});
