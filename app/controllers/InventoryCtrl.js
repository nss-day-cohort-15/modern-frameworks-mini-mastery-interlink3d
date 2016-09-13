"use strict";

app.controller('InventoryCtrl', function($scope, FlowerFactory) {

  FlowerFactory.getArrangements()
    .then((arrangements1) => {
      console.log(arrangements1);
      $scope.arrangements = arrangements1;
    });
});
