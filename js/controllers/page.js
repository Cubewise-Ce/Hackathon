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
	$bedrock.saveDataAll('dev').then(function(status){ 
    console.info(status); 
  });
}]);

