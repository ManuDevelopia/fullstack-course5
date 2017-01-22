(function(){
  'use strict';

  angular.module('LunchCheckerApp',[])
    .controller('LunchCheckerController', function($scope){
      $scope.itemList = '';
      $scope.checkMessage = '';

      $scope.checkItems = function(){
        var itemList = $scope.itemList;
        if (itemList.length === 0 ){ return;}

        var itemArray = itemList.split(',');
        var nItems = itemArray.length;

        if (nItems > 0 && nItems <= 3){
          $scope.checkMessage = 'Enjoy!';
        } else if (nItems > 3){
          $scope.checkMessage = 'Too much!';
        }

      };
    });

})();
