angular.module("garageApp").service("mainServ", function($http){


  this.loginpostlogin = function(userlogin){
    return $http({
    method:"POST",
    url:"/login",
    data: userlogin
  })
  .then(function(response){
      console.log(response.data);
      return response.data;
    });
  };

 this.signuppostsignup = function(usersignup){
    return $http({
    method:"POST",
    url:"/signup",
    data: usersignup
   })
   .then(function(response){
    //console.log(response.data);
    return response.data;
   })
 }

  this.getfacebooksignup = function(){
    return $http({
      method:"GET",
      url:"/auth/facebook"
    })
    .then(function(response){
      return response.data;
    })
  }

  //this is for getting all the sales

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

  this.getsignout = function(){
  return $http({
    method:"GET",
    url:"/logout"
  })
  .then(function(response){
    return response;
  })
  }


});
