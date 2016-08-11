angular.module("garageApp", ["ui.router"]).config(function($stateProvider,$urlRouterProvider){



  $stateProvider
  .state("landingPage", {
    url: "/landingPage",
    templateUrl: "./../templates/landingPage.html"
  })
  .state("login", {
    url:"/login",
    templateUrl: "./../templates/login.html",
    controller: "loginCtrl"
  })
  // .state("profile", {
  //   url:"/profile",
  //   templateUrl: "./../templates/profile.html",
  //   controller: "profileCtrl"
  // })
  .state("map", {
    url:"/map",
    templateUrl: "./../templates/map.html",
    controller: "mainCtrl"
  })
  .state("createSale", {
    url:"/createSale",
    templateUrl: "./../templates/createSale.html",
    controller: "formCtrl"
  })
  // .state("reset", {
  //   url:"/reset",
  //   templateUrl: "./../templates/reset.html",
  //   //controller: "resetCtrl"
  // })
  // .state("forgot", {
  //   url:"/forgot",
  //   templateUrl: "./../templates/forgot.html"
  //   //controller: "forgotCtrl"


  $urlRouterProvider.otherwise("/landingPage");


});
