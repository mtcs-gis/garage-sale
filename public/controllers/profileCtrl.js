angular.module("garageApp").controller("profileCtrl", function($scope, mainServ){
    $scope.stuff = false;
    $scope.stuff = true;
    $scope.userProfile;// profile page
    $scope.yardData;



    $scope.custom = false;
       $scope.toggleCustom = function() {
           $scope.custom = $scope.custom === false ? true: false;
       };

    (function (userInfo){
        mainServ.getKnownUser(userInfo)
        .then(function(response){

          $scope.userProfile = response.data;
          $scope.yardData = response.data.sale;

          var userID = response.data;
          var user;

          if (userID.local){
            user = userID.local.userName;
          } else {
            user = userID.facebook.name;
          }
              $scope.profilename = user;
        });
    })()

    $scope.deleteSale = function(stuff){
      mainServ.deleteSaleStuff(stuff)
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
