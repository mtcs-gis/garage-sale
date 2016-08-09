angular.module('garageApp').controller('loginCtrl', function($scope, $location, $window, mainServ){

  $scope.loginEmail = "Admin@yahoo";
  $scope.secret = "Admin";
  $scope.signUpEmail = "Admin@yahoo";
  $scope.passWord = "Admin";
  $scope.verify;
  


  $scope.postLogin = function(loginEmail, secret){ 
    var userLogin = {
      userName: loginEmail,
      password: secret
    };
    mainServ.loginPostLogin(userLogin)
    .then(function(response){
      var verify = response;
       if (verify.user){
         $window.location.reload(); //refresh the windows
          $location.path('profile');
          $scope.userLogin = "";
        } else {
          alert("Please Sign up!")
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
      $window.location.reload(); //refresh the windows
      $location.path('profile');
    })
  };

  $scope.facebooksignup = function(){
    $window.location.reload(); //refresh the windows
  };

  (function (){
      mainServ.getKnownUser()
      .then(function(response){
        //console.log(response);
        $scope.verify = response.data;
        //console.log($scope.verify);
        var userID = response.data;
        var user;
        if (userID.facebook){
          button = true;
          icons = false;
        } else {
          button = false;
          icons = true;
        }
          $scope.hideStuff = icons;
          $scope.profilePage = button;
      });
    })()











});