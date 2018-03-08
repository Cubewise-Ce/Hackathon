app.service('$bedrock', ['$tm1Ui', '$q', function($tm1Ui, $q){
  var _service = this;

  _service.BEDROCK_SAVEDATAALL= 'Bedrock.Server.SaveDataAll';

  _service.saveDataAll = function(instance, debug){
    if(_.isNil(debug)){
      return $tm1Ui.processExecute(instance,  _service.BEDROCK_SAVEDATAALL);
    }
    else{
      return $tm1Ui.processExecute(instance,  _service.BEDROCK_SAVEDATAALL, 'pDebug', _.parseInt(debug));
    }    
  };
}]);

app.controller('PageCtrl', ['$scope', '$rootScope', '$bedrock', '$timeout', '$state', '$stateParams', '$http', 
                            	function($scope, $rootScope, $bedrock, $timeout, $state, $stateParams, $http) {
  
  $scope.$state = $state;

  // event catcher
  $scope.$on('filter.update.request', function(event, args){
    $scope.broadcast(args.dimension, $scope.selections[args.dimension]);
  });

  // Utilities
  $scope.broadcast = function(_dimension, _value){
    $scope.$broadcast('filter.update', {dimension: _dimension, value: _value});
  };

	$bedrock.saveDataAll('dev').then(function(status){ 
    console.info(status); 
  });
}]);

