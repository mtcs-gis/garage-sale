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
  $scope.forgotPassword = function(lostPassword){
    var reSetting = {
      userName: lostPassword
         };
    mainServ.getforgotPassword(reSetting)
    .then(function(response){
      console.log(response);

    })
  };
  $scope.postSignUp = function(signUpEmail, passWord, passWordTwo){
    var one = passWord;
    var two = passWordTwo;
    if(one === two){
        var userSignUp = {
        userName: signUpEmail,
        password: one
        };
    } else {
        alert("Passwords Don't Match!");
    }
    mainServ.signupPostSignUp(userSignUp)
    .then(function(response){
        if(response.user.local){
          $location.path('map');
          //console.log(response.user.local.userName)
        } else{
          $location.path('/');
        }
      
    })
  };



});
