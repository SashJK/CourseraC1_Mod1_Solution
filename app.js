angular
// Create Module
.module('LunchCheck', [])
// Create controller
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope) {
  $scope.lunchmenu = "";
  $scope.message = "";
  $scope.checkTooMuch = function(){
    if($scope.lunchmenu == ""){
      $scope.message = "Please enter data first";
    }
    else{
      var itemCount = getDishCount($scope.lunchmenu);
      if (itemCount <=3) {
        $scope.message = "Enjoy!";
      }
      else if(itemCount > 3 ){
        $scope.message = "Too much!!";
      }
    }
  } ;
};

function getDishCount(string){
  var lunchmenucount = 0;
  const lunchlist = string.split(',');
  lunchlist.forEach((item, i) => {
    lunchmenucount++;
  });

  return lunchmenucount;
};
