angular.module("garageApp").controller("mainCtrl", function($scope,mainServ){


  // $scope.getSale = function(){
  //   mainServ.getSale();
  // }



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
      mainServ.getfacebooksignup()
        .then(function(response){
        $scope.info = response;
        });
    };



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

    //
    //     $location.path('/home');
    // };






});
