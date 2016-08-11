angular.module("garageApp").controller("profileCtrl", function($scope, mainServ){
    $scope.stuff = false;
    $scope.stuff = true;
    $scope.userProfile;// profile page
    $scope.yardData;



    $scope.custom = false;
       $scope.toggleCustom = function() {
           $scope.custom = $scope.custom === false ? true: false;
       };

  $scope.userId;

  (function (userInfo){
    mainServ.getKnownUser(userInfo)
    .then(function(response){
      //console.log(response);
      var verify = response.data;
     // console.log($scope.userId);
     if (verify.local){
          $scope.userId = response.data._id;
        } else if (verify.facebook){
          $scope.userId = response.data._id;
        } else {
         $location.url('/login');
        }

    });

    $scope.deleteSale = function(id){
      console.log(id);
      mainServ.deleteSale(id)
      .then(function(response){
        console.log(response);
      })
    }

    $scope.updateUser = function(updateInfo){
        // console.log(updateInfo);
        var user = updateInfo;
        //console.log(updateInfo);
    mainServ.getUpdateUserID(user)
     .then(function(response){
         //console.log(response.data);
           //$scope.getUserID(); //updates the list!
         })
     }

  $scope.signOut = function(){
        console.log("SignOut");
        mainServ.getSignOut()
        .then(function(response){
              window.location.href = 'http://localhost:3000';
        })
  }

  })

});
