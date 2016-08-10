angular.module('garageApp')
.controller('loginCtrl', function($scope, $location, mainServ){

  // $scope.verify;
  $scope.loginSuccess = false;


  $scope.postLogin = function(loginEmail, secret){ 
    var userLogin = {
      userName: loginEmail,
      password: secret
    };
    mainServ.loginPostLogin(userLogin)
    .then(function(response){
      var verify = response;
       if (verify.user){
          $location.path('map');
          $scope.userLogin = "";
        } else {
          $location.path('/');
          $scope.loginSucces = false;
        }
    })
  };
  $scope.forgotPassword = function(lostPassword){
    var reSetting = {
      userName: lostPassword
         };
    mainServ.getforgotPassword(reSetting)
    .then(function(response){
      console.log(response);

    })
  };
  $scope.postSignUp = function(signUpEmail, passWord){
    var userSignUp = {
      userName: signUpEmail,
      password: passWord
    };
    mainServ.signupPostSignUp(userSignUp)
    .then(function(response){
      $scope.userSignUp = "";
      $location.path('map');
    })
  };

  // $scope.facebooksignup = function(){
    
  // };

  // (function (){
  //     mainServ.getKnownUser()
  //     .then(function(response){
  //       //console.log(response);
  //       $scope.verify = response.data;
  //       //console.log($scope.verify);
  //       var userID = response.data;
  //       var user;
  //       if (userID.facebook){
  //         button = true;
  //         icons = false;
  //       } else {
  //         button = false;
  //         icons = true;
  //       }
  //         $scope.hideStuff = icons;
  //         $scope.profilePage = button;
  //     });
  //   })()











});