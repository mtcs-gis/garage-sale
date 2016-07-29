angular.module("garageApp").controller("mainCtrl", function($scope,mainServ){



  $scope.getSales = function(){
    mainServ.getSales()
    .then(function(res){
      $scope.sales = res;
    })
  }

  $scope.postSale = function(id, sale){
    mainServ.postSale(id, sale);
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

 $scope.facebooksignup = function(){
      mainServ.getfacebooksignup()
        .then(function(response){
        $scope.info = response;
        });
    };
>>>>>>> master



// $scope.facebooksignup = function(id, token, email, name){
//   var userfacebook = {
//     id:id,
//     token:token,
//     email:email,
//     name:name
//   };
//   mainServ.getfacebooksignup(userfacebook)
//     .then(function(response){
//     $scope.userfacebook = "";
//   })
// };


});
