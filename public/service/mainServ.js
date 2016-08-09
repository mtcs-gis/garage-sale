angular.module("garageApp")
.service("mainServ", function($http){


  this.loginPostLogin = function(userLogin){
    return $http({
      method:"POST",
      url:"/login",
      data: userLogin
    })
    .then(function(res){
      console.log("You have logged in like a champ!");
      return res.data;
    });
  };

  this.getforgotPassword = function(reSetting){
    return $http({
      method:"POST",
      url:"/forgot",
      data:reSetting
    })
    .then(function(res){
      console.log(res.data);
      return res.data;
    })
  }

  this.getKnownUser = function(userInfo){
    return $http({
      method:"GET",
      url:"/user"
    })
    .then(function(res){
      return res;
    })
  }
  this.deleteSaleStuff = function(user){
    return $http({
      method:"GET",
      url:"/user/" + user._id,
      data:user
    })
    .then(function(res){
      return res;
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
    .then(function(res){
      // console.log(response.data);
      return res;
    })
  }

  this.signupPostSignUp = function(userSignUp){
    return $http({
    method:"POST",
    url:"/signup",
    data: userSignUp
   })
   .then(function(res){
    //console.log(response.data);
    console.log("You have Signed in like a champ!");
    return res.data;
   })
  }

  this.getfacebooksignup = function(){
    return $http({
      method:"GET",
      url:"/auth/facebook"
    })
    .then(function(res){
      console.log("You have Signed in to Facebook like champ!");
      return res.data;
    })
  }

  this.getSignOut = function(){
  return $http({
    method:"GET",
    url:"/logout"
  })
  .then(function(res){
    console.log("SignOut");
    return res;

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

  this.getAllUserSales = function(){
    return $http({
      method: 'GET',
      url: '/users'
    }).then(function(res){
      console.log(res.data);
      return res.data;
    })
  }

  // // this is for getting just one sale!

  // this.getSale = function(id){
  //   return $http({
  //     method: 'GET',
  //     url: '/sales/' +id
  //   }).then(function(res){
  //     return res.data;
  //   })
  // }

  this.postSale = function(id, sale){
      console.log(sale);
    return $http({
      method: 'POST',
      url: '/sale/' + id,
      data: sale
    }).then(function(res){
      console.log(res.data);
      return res.data;
    })
  }

  // this.updateSale = function(sale){
  //   return $http({
  //     method: 'PUT',
  //     url: '/sales/' + sale.id,
  //     data: sale
  //   }).then(function(res){
  //     return res;
  //   })
  // }




});
