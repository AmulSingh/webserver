(function(){
    var todoController = function($scope, taskFactory, value1, value2){
        $scope.tasks = taskFactory.getTasks();
        $scope.value1 = value1;
        $scope.value2 = value2;
        $scope.result = {};
        $scope.add = function(){
            if(($scope.taske).length != 0){
                if($scope.status === true){
                    $scope.result = {
                    SrNo : (($scope.tasks).length)+1,
                    Task : $scope.taske,
                    Status : 'Done'
                    };
                }else{
                    $scope.result = {
                    SrNo : (($scope.tasks).length)+1,
                    Task : $scope.taske,
                    Status : 'Not Done'
                    };
                }
            }else if($scope.taske == ""){
                alert('plzz add a task!')
            }
            $scope.tasks.push($scope.result);
            $scope.taske = "";
            $scope.status = false;
        }
        $scope.delete = function(){
            alert('to be completed...')
        }
    }
    
     todoController.$inject = ['$scope', 'taskFactory', 'value1', 'value2'];
    
    angular.module('todoApp').controller('todoController',todoController);
}());