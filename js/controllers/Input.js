app.controller('InputCtrl', ['$scope', '$rootScope', '$log', '$tm1Ui', '$location', function($scope, $rootScope, $log, $tm1Ui, $location) {
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
  $scope.constants = {};
   
  $scope.constants.INSTANCE = 'dev';
  $scope.constants.DIMENSION_ACCOUNT = 'Account';
  $scope.lists.headAccounts = ['Net Income'];

  // Utilities
  $scope.retrieveAccount = function(){
    var account = $location.search().account;
    if(!_.isNil(account) && !_.isEmpty(account)){        
      $scope.values.account = account;
             
      $tm1Ui.attributeGet($scope.constants.INSTANCE, $scope.constants.DIMENSION_ACCOUNT, account, 'Description').then(function(attributeObj){
        if(attributeObj && attributeObj.Value){
          // add into our list of header accounts
          $scope.lists.headAccounts.push(attributeObj.Value);
        }
          
      });
    }
  };

  // finally
  $scope.retrieveAccount();
}]);
