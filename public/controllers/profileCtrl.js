angular.module("garageApp").controller("profileCtrl", function($scope, mainServ){

	(function (){
			mainServ.getKnownUser()
			.then(function(response){
				console.log(response);
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



	$scope.signOut = function(){
    //console.log("SignOut");
    mainServ.getSignOut()
    .then(function(response){
      window.location.href = 'http://localhost:3000';
    })
  };

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
