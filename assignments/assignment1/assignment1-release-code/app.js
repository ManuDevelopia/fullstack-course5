(function(){
  'use strict';

  angular.module('LunchCheckerApp',[])
    .controller('LunchCheckerController', function($scope){
      $scope.itemList = '';
      $scope.checkMessage = '';

      $scope.checkItems = function(){
        var itemList = $scope.itemList;
        var itemArray = itemList.split(',');

        // Clean empty elments
        itemArray = itemArray.filter(function(a){return a.length !== 0;});

        // Check elements if '0'
        if (itemList.length === 0 ||
            itemArray.length === 0){
          $scope.checkMessage = 'Please enter data first';
          return;
        }

        var nItems = itemArray.length;

        if (nItems > 0 && nItems <= 3){
          $scope.checkMessage = 'Enjoy!';
        } else if (nItems > 3){
          $scope.checkMessage = 'Too much!';
        }

      };
    });

})();
