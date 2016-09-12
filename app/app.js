"use strict";

var app = angular.module("Florist", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
    when('', {
      templateUrl: '/partials/inventoryDisplay.html',
      controller: 'InventoryCtrl'
    })
});
