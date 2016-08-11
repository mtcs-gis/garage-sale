angular.module("garageApp" ).controller("formCtrl", function($scope, $location, mainServ){

  $scope.userId;
  $scope.success;
  $scope.addButton = "Add Sale";
  $scope.mySales;

  (function (userInfo){
    console.log(userInfo)
    mainServ.getKnownUser(userInfo)
    .then(function(response){
      //console.log(response);
      var verify = response.data;
     // console.log($scope.userId);
     if (verify.local){
          $scope.userId = response.data._id;
        } else if (verify.facebook){
          $scope.userId = response.data._id;
        }

    });

  })()

  var geocoder = new google.maps.Geocoder();



  $scope.postSale = function(sale){

    var addObj = {address:sale.address + " Bozeman"
    };

    console.log(addObj);

    geocoder.geocode(addObj, function(results, status){
       var temp = results[0].geometry.viewport;


       sale.lat = temp.b.b;
       sale.lng = temp.f.f;
       mainServ.postSale(sale)
       $scope.getMySales();
    })

  }
  $scope.getMySales = function(){
    mainServ.getMySales()
    .then(function(response){
      $scope.mySales = response;
    })
  }

  $scope.deleteSale = function(id){
    console.log(id);
    mainServ.deleteSale(id)
    .then(function(response){
      $scope.getMySales();
    })
  }

});
