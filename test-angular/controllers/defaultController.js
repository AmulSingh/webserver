(function(){
    var defaultController = function($scope, taskFactory, value1, value2){
        $scope.value1 = value1;
        $scope.value2 = value2;
        $scope.marketlist = taskFactory.getLists();
    }
    
    defaultController.$inject = ['$scope', 'taskFactory', 'value1', 'value2'];
    
    angular.module('todoApp').controller('defaultController',defaultController);

}());