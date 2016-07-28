angular.module("garageApp").controller("mainCtrl", function($scope,mainServ){

  $scope.map;
  $scope.address;
  $scope.sales;


  $scope.getSales = function(){
    mainServ.getSales()
    .then(function(res){
      $scope.sales = res;
    })
  }

  $scope.postSale = function(sale){
  //  angular.copy
    mainServ.postSale(sale);
  }

  $scope.updateSale = function(sale){
    mainServ.updateSale(sale);
  };

   $scope.info;
 
  $scope.postlogin = function(username, sercet){
      var userlogin = {
       userName: username,
       password: sercet
     };
        //console.log(userlogin);
        mainServ.loginpostlogin(userlogin)
            .then(function(response){     
          $scope.userlogin = "";
            //console.log($scope.userlogin);
        })
    };

  $scope.postsignup = function(username, firstname, lastname, email, password){
      var usersignup = {
        userName: username,
        firstName: username,
        lastName: lastname,
        password: password,
        selfEmail: email
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
