angular.module("garageApp").controller("mainCtrl", function($scope,$window){

  $scope.askQuestion = function(){
    var answer = prompt("Is this Garage Sale at your current location?");
    answer = answer.toUpperCase();
    if(answer === "YES"){
      $window.navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      $scope.$apply(function(){
        $scope.lat = lat;
        $scope.long = long;
      });
  })
    } else {
      return console.log("SOmething Else");
    }
  }
});
