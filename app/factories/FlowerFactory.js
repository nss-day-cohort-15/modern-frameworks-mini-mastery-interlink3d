"use strict";

app.factory('FlowerFactory', ($q, $http) => {

  let getArrangements = () => {
    let arrangements = [];
    return $q((resolve, reject) => {
      $http.get("https://flower-power-angular.firebaseio.com/arrangements.json")
      .success((itemObject) => {
        resolve(itemObject);
      })
      .error((error) => {
        reject(error);
      });
    });
  };

return {getArrangements};

});
