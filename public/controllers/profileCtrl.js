angular.module("garageApp").controller("profileCtrl", function($scope, mainServ){
	$scope.stuff = false;
	$scope.stuff = true;
	$scope.userProfile;// profile page
  	
  	$scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };

    $scope.custom1 = false;
        $scope.toggleCustom1 = function() {
            $scope.custom1 = $scope.custom1 === false ? true: false;
        };

	(function (userInfo){
		mainServ.getKnownUser(userInfo)
		.then(function(response){
			//console.log(response);
			$scope.userProfile = response.data;
		  //console.log($scope.userProfile);
		  var userID = response.data;
		  var user;
		  if (userID.local){
		    user = userID.local.userName;
		  } else {
		    user = userID.facebook.name;
		  }
		  	$scope.profilename = user;

		  	// $scope.email = userID.local.userName;
		  	// $scope.password = userID.local.password;
		  	//$scope.getUserID();//update the User
		});
	})()

	// $scope.getUserID = function(userInfo){
 //    mainServ.getKnownUser()
 //    	.then(function(response){
 //    		//console.log(response.data);
 //    		$scope.documents = response.data.local;
 //    		//console.log(response);
 //    	})
	// }

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
	};

	$scope.open = function () {
		console.log('opening pop up');
		var modalInstance = $modal.open({
	templateUrl: 'profile.html',
		});
	}


});


// (function (){
// 			mainServ.getKnownUser()
// 			.then(function(response){
// 			  var userID = response.data;
// 			  if (userID.local){
// 			    $scope.profilename = userID.local.userName;
// 			  } else {
// 			    $scope.profilename = userID.facebook.name;
// 			  }
// 			});
// 		})()
// this code above is self invoking on profile page


// $scope.displayName = function (){
	// 	mainServ.getKnownUser()
	// 	.then(function(response){
	// 		console.log(response);
	// 	  	var userID = response.data;
	//		var user;
	// 	  if (userID.local){
	// 	    user = userID.local.userName;
	// 	  } else {
	// 	    user = userID.facebook.name;
	// 	  }

	// 	  $scope.profilename = user;
	// 	})
	// };
	// $scope.displayName();

