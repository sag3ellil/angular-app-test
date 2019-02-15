( function () {
'use strict';

angular.module('firstapp',[])
.controller('firstcontroller',function($scope)
{$scope.name="bouraoui";
$scope.sayHello =function(){
  return "hello every body";
};

});

})();
