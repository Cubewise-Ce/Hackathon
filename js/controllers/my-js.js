(function(){
  var app = angular.module('app');
  app.directive('dynamicColspan', function(){
    return {
      restrict: 'A',
      scope: {
        year: '@',
        currentYear: '@',
        listsMonths: '=',
        listsQuarters: '='
      },
      link:function($scope, $elements, $attributes){
        var myList = year == currentYear ? listsQuarters : listsMonths ;
        var colspanCOunt = myList.length + 2 ;
        $elements.attr('colspan', colspanCOunt);
      }
    };
  });
})();

