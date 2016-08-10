angular.module("garageApp").directive("loginDirective", function(){

  return {
    templateUrl: './../templates/login.html',
    restrict: "E"
  };




})

.directive("signupDirective", function(){


  return {
    templateUrl: './../templates/signup.html',
    restrict: "E"
  }

})

.directive("enterDirective", function(){

  return {
    templateUrl: './../templates/enter.html',
    restrict: "E"
  }

})
