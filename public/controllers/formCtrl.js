angular.module("garageApp").controller("formCtrl", function($scope, mainServ){
  $scope.yard;
  
  (function (userInfo){
    mainServ.getKnownUser(userInfo)
    .then(function(response){
      console.log(response);
      $scope.yard = response.data;
      console.log($scope.yard);
     
    })
;
  })()
  var geocoder = new google.maps.Geocoder();



  $scope.postSale = function(yard){
    console.log(yard)
    var addObj = {address:yard.sale.address};
    console.log(addObj);

    geocoder.geocode(addObj, function(results, status){
       var temp = results[0].geometry.viewport;
       yard.sale.lat = temp.b.b;
       yard.sale.lng = temp.f.f;
       mainServ.postSale(yard)
       console.log(yard);
       // .then(function(response){
       //  console.log(response);
       //    //$scope.getUserID(); //updates the list!
       //  });
    })
  }

});
