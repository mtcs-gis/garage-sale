angular.module("garageApp").controller("profileCtrl", function($scope, mainServ){
	$scope.stuff = false;
	$scope.userProfile;// profile page
  

	(function (userInfo){
		mainServ.getKnownUser(userInfo)
		.then(function(response){
			//console.log(response);
			$scope.userProfile = response;
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
		//console.log(updateinfo);
		var user = updateInfo;
		//console.log(updateinfo);
    mainServ.getUpdateUserID(user)
      .then(function(response){
      	console.log(response.data);
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

