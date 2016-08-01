angular.module("garageApp").controller("mainCtrl", function($scope,mainServ){



  $scope.getSales = function(){
    mainServ.getSales()
    .then(function(res){
      $scope.sales = res;
    })
  }

  $scope.updateSale = function(sale){
    mainServ.updateSale(sale);
  };

  $scope.info;

$scope.postlogin = function(loginemail, sercet){
    var userlogin = {
     userName: loginemail,
     password: sercet
   };
      console.log(userlogin);
      mainServ.loginpostlogin(userlogin)
          .then(function(response){
        $scope.userlogin = "";
          //console.log($scope.userlogin);
      })
  };

$scope.postsignup = function(signupemail, password){
    var usersignup = {
      userName: signupemail,
      password: password
      };
      mainServ.signuppostsignup(usersignup)
          .then(function(response){
        $scope.usersignup = "";
      })
  };

 $scope.signout = function(){
  mainServ.getsignout()
  .then(function(response){
    window.location.href = 'http://localhost:3000';
  })
}

 $scope.facebooksignup = function(){

        $location.path('/home');
    };






});
