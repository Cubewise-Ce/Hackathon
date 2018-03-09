app.controller('PnLCtrl', ['$scope', '$rootScope', '$tm1Ui', function($scope, $rootScope, $tm1Ui) {
	/*
    *     defaults.* are variables that are declared once and are changed in the page, otherwise known as constants in programming languages
    *     lists.* should be used to store any lists that are used with ng-repeat, i.e. tm1-ui-element-list
    *     selections.* should be used for all selections that are made by a user in the page
    *     values.* should store the result of any dbr, dbra or other values from server that you want to store to use elsewhere, i.e. in a calculation
    * 
    *     For more information: https://github.com/cubewise-code/canvas-best-practice
    */
    
    $scope.defaults = {};
    $scope.selections = {};
    $scope.lists = {};
    $scope.values = {};
    
     // Event(s)
  $scope.$on('filter.update', function(event, args){
    $scope.selections[args.dimension] = args.value;
    if (args.dimension=='year'){
        $scope.selections.nextYear = parseInt(args.value) + 1 ;
    }
  });

    // needed below to get the initialized values on the filter
    $scope.$emit('filter.update.request', {dimension: 'year'});
    $scope.$emit('filter.update.request', {dimension: 'version'});

}]);
