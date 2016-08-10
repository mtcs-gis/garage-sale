angular.module('garageApp').controller('loginCtrl', function($scope, $location, mainServ){


  $scope.wrongCred = true;
  $scope.userName;


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
          $scope.wrongCred = false;
        }
    })
  };
  // $scope.forgotPassword = function(lostPassword){
  //   var reSetting = {
  //     userName: lostPassword
  //        };
  //   mainServ.getforgotPassword(reSetting)
  //   .then(function(response){
  //     console.log(response);
  //
  //   })
  // };
  $scope.postSignUp = function(signUpEmail, passWord){
    var userSignUp = {
      userName: signUpEmail,
      password: passWord
    };
    mainServ.signupPostSignUp(userSignUp)
    .then(function(response){
      console.log(response.user.local.userName)
      $location.path('map');
    })
  };

  // $scope.facebooksignup = function(){
  //   $window.location.reload(); //refresh the windows
  // };











});
