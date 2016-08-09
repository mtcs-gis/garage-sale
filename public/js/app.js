angular.module("garageApp", ["ui.router"]).config(function($stateProvider,$urlRouterProvider){



  $stateProvider
  .state("login", {
    url:"/login",
    templateUrl: "./../templates/login.html",
    controller: "loginCtrl"
  })
  .state("profile", {
    url:"/profile",
    templateUrl: "./../templates/profile.html",
    controller: "profileCtrl"
  })
  .state("map", {
    url:"/",
    templateUrl: "./../templates/map.html",
    controller: "mainCtrl"
  })
  .state("createSale", {
    url:"/createSale",
    templateUrl: "./../templates/createSale.html",
    controller: "formCtrl"
  })

  $urlRouterProvider.otherwise("/");


});
