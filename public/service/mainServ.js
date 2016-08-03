angular.module("garageApp")
.service("mainServ", function($http){


  this.loginPostLogin = function(userLogin){
      //console.log(userLogin);
    return $http({
      method:"POST",
      url:"/login",
      data: userLogin
    })
    .then(function(response){
      //console.log(response.data);
      console.log("You have logged in like a champ!");
      return response.data;
    });
  };

  this.getKnownUser = function(userInfo){
    return $http({
      method:"GET",
      url:"/user"
    })
    .then(function(response){
      return response;
    })
  }
  // app.get('/user', userControl.getOneUser);
  this.getUpdateUserID = function(user){
    // console.log(user);
    return $http({
      method:"PUT",
      url:"/user/" + user._id,
      data: user
    })
    .then(function(response){
      // console.log(response.data);
      return response;
    })
  }

  this.signupPostSignUp = function(userSignUp){
    return $http({
    method:"POST",
    url:"/signup",
    data: userSignUp
   })
   .then(function(response){
    //console.log(response.data);
    console.log("You have Signed in like a champ!");
    return response.data;
   })
  }

  this.getfacebooksignup = function(){
    return $http({
      method:"GET",
      url:"/auth/facebook"
    })
    .then(function(response){
      console.log("You have Signed in to Facebook like champ!");
      return response.data;
    })
  }

  this.getSignOut = function(){

  return $http({
    method:"GET",
    url:"/logout"
  })
  .then(function(response){
    console.log("SignOut");
    return response;

  })
  }

  this.getSales = function(){
    return $http({
      method: 'GET',
      url: '/sales'
    }).then(function(res){
      return res.data;
    })
  }

  // this is for getting just one sale!

  this.getSale = function(id){
    return $http({
      method: 'GET',
      url: '/sales/' +id
    }).then(function(res){
      return res.data;
    })
  }

  this.postSale = function(sale){
    return $http({
      method: 'POST',
      url: '/sale/',
      data: sale
    }).then(function(res){
      return res.data;
    })
  }

  this.updateSale = function(sale){
    return $http({
      method: 'PUT',
      url: '/sales/' + sale.id,
      data: sale
    }).then(function(res){
      return res;
    })
  }




});
