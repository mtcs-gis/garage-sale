angular.module("garageApp", ["ui.router"]).config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state("home", {
    url:"/",
    templateUrl: "./../templates/home.html"
  }).state("map", {
    url:"/map",
    templateUrl: "./../templates/map.html"
  })

  $urlRouterProvider.otherwise("/");


});
