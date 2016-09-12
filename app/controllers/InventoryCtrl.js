"use strict";

app.controller('InventoryCtrl', function($scope, FlowerFactory) {

  FlowerFactory.getArrangements()
    .then((itemObject) => {
      $scope.arrangements = itemObject;
    });
});
