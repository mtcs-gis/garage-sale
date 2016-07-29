angular.module("garageApp", ["ui.router"]).config(function($stateProvider,$urlRouterProvider){



  $stateProvider
  .state("home", {
    url:"/",
    templateUrl: "./../templates/home.html"
  }).state("map", {
    url:"/map",
    templateUrl: "./../templates/map.html"
  }).state("createSale", {
    url:"/createSale",
    templateUrl: "./../templates/createSale.html",
    controller: "mapCtrl"
  })

  $urlRouterProvider.otherwise("/");


});
