"use strict";

var app = angular.module("Florist", ["ngRoute", 'angular.filter'])
.constant("firebaseURL", "https://flower-power-angular.firebaseio.com");

app.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'partials/inventoryDisplay.html',
      controller: 'InventoryCtrl'
    })
});
