angular.module('garageApp').controller('loginCtrl', function($scope, $location, mainServ){

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
    //console.log("Login");
    mainServ.loginPostLogin(userLogin)
    .then(function(response){
      var verify = response;
      //console.log(verify.user);
       if (verify.user){
          $location.path('profile');
          $scope.userLogin = "";
        } else {
          alert("Please Sign up!")
        }
      //$location.path('profile');
      //$scope.userLogin = "";
    })
  };

  $scope.postSignUp = function(signUpEmail, passWord){
    // $scope.displayName = signUpEmail;
    // $scope.welcome = true;
    var userSignUp = {
      userName: signUpEmail,
      password: passWord
    };
      //console.log("Signup!");
    mainServ.signupPostSignUp(userSignUp)
    .then(function(response){
      $scope.userSignUp = "";
      $location.path('profile');
      //console.log($scope.userSignUp);
    })
  };

  $scope.facebooksignup = function(){
    console.log("You have signed into Facebook like a Champ!");
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