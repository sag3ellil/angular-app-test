( function () {
'use strict';

angular.module('firstapp',[])
.controller('firstcontroller',function($scope)
{$scope.nom="bouraoui";
$scope.sayHello =function(){
  return "hello every body";
};

})

.controller('calculatorController',function($scope)
{
  $scope.name="";
  $scope.totalvalue=0;
  $scope.displaynumeric=function(){
    var totalnamevalue= calculnumeriquefromstring($scope.name);
    $scope.totalvalue=totalnamevalue;
  };

  function calculnumeriquefromstring( string )
  {
    var stringvalue=0;
    for(var i=0;i<string.length;i++)
    {
      stringvalue=stringvalue+string.charCodeAt(i);
    }
    return stringvalue;
  }
});
})();
