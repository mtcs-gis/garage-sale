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


  $urlRouterProvider.otherwise("/landingPage");


});
