"use strict";

app.factory('FlowerFactory', ($q, $http, firebaseURL, $location) => {

  let getArrangements = () => {
    let arrangements = [];
    return $q((resolve, reject) => {
      $http.get(`${firebaseURL}/arrangements.json`)
      .success((itemObject) => {
       if (itemObject !== null){
          Object.keys(itemObject).forEach((key)=>{
            itemObject[key].id = key;
            arrangements.push(itemObject[key]);
          });
          resolve(arrangements);
        } else {
          resolve(arrangements);
        }
      })
      .error((error) => {
        reject(error);
      });
    });
  };

return {getArrangements};

});
